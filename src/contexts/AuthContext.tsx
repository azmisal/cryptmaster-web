import { IUser, IUserLogin, IUserSignup } from "@/interfaces/UserInterfaces";
import React, { createContext, useContext, useState, useEffect } from "react";
import { API, createApiClient } from "../api/AuthApi"
import { useNavigate } from "react-router-dom";



interface AuthContextType {
  user: IUser | null;
  accessToken: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  isLoggedIn: boolean;
  signup: (signupData: IUserSignup) => Promise<any>;
  login: (loginData: IUserLogin) => Promise<void>;
  logout: () => Promise<void>;
  updateUser: (user: IUser | null) => void;
  refreshToken: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [user, setUser] = useState<IUser | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");
    const storedUser = sessionStorage.getItem("user");
    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
      setAccessToken(token);
      navigate("/wallet", { replace: true });

    }
    else {
      navigate("/");
    }

  }, []);

  const signup = async (signupData: IUserSignup) => {
    try {
      const response = await API.post("/signup", signupData);

      // Axios automatically parses JSON
      return response.data;
    } catch (err: any) {
      console.log("Entered Catch Signup auth cont", err);

      // Axios stores server errors in err.response
      const message = err.response?.data?.message || err.message || "Signup failed";
      throw new Error(message);
    }
  };
  const login = async (loginData: IUserLogin) => {
    setIsLoading(true);
    try {
      const response = await API.post("/login", loginData);
      if (response.status !== 200) {
        throw new Error("Login failed");
      }
      const data = await response.data;

      // Store access token in sessionStorage (NOT localStorage for security)
      sessionStorage.setItem("accessToken", data.loginResponse.accessToken);
      sessionStorage.setItem("user", JSON.stringify(data.loginResponse.user));

      setAccessToken(data.loginResponse.accessToken);
      setLoggedIn(true);
      setUser(data.loginResponse.user);
    } catch (error) {
      throw new Error(error.response?.data?.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };
  const logout = async () => {
    setIsLoading(true);
    const apiClient = createApiClient(accessToken);
    try {
      console.log("ENtered Logout try");
      const logoutResponse = await apiClient.post("/logout", { user_Id: user?.user_Id });
      console.log(logoutResponse);
      sessionStorage.removeItem("accessToken");
      sessionStorage.removeItem("user");
      console.log("removed session tokens");

      setAccessToken(null);
      setLoggedIn(false);
      setUser(null);

      navigate("/login", { replace: true });
    } catch (error) {
      console.log("ENtered Logout catch");

      console.error("Logout error:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const updateUser = async (user: IUser) => {
    setIsLoading(true);
    const apiClient = createApiClient(accessToken);
    try {
      const newUser = await apiClient.post("/update-user", { user: user });
      setUser(newUser.data.updateResponse);
    } catch (error) {
      console.error("user Update error:", error);
    } finally {
      setIsLoading(false);
    }

  }
  const refreshToken = async () => {
    const apiClient = createApiClient(accessToken);

    try {
      const response = await apiClient.get("/auth/refresh");

      if (response.status !== 200) {
        throw new Error("Token refresh failed");
      }

      const data = response.data;
      sessionStorage.setItem("accessToken", data.authenticated.accessToken);
      sessionStorage.setItem("user", data.authenticated.user);

      setAccessToken(data.authenticated.accessToken);
      setLoggedIn(true);
      setUser(data.authenticated.user)
    } catch (error) {

      logout();
      throw error;
    }
  };
  const value = React.useMemo(() => ({
    user,
    accessToken,
    isLoggedIn,
    isLoading,
    isAuthenticated: !!user,
    signup,
    login,
    logout,
    updateUser,
    refreshToken,
  }), [user, accessToken, isLoading]);
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );

}


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
