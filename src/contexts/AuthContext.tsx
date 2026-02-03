import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { IUserLogin, IUserSignup } from "@/interfaces/UserInterfaces";
import { API, createApiClient } from "../api/AuthApi";
import { tokenStore } from "@/stores/tokenstore";
import { useUser } from "./UserContext";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  isAuthenticated: boolean;
  authLoading: boolean;
  actionLoading: boolean;
  signup: (data: IUserSignup) => Promise<any>;
  login: (data: IUserLogin) => Promise<void>;
  logout: () => Promise<void>;
  refreshToken: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { setUser, clearUser } = useUser();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const navigate = useNavigate();
  /* ---------------- INIT AUTH ---------------- */
  useEffect(() => {
    const initAuth = async () => {
      let token = tokenStore().getToken();
      if (!token) {
        try {
          await refreshToken();

          token = tokenStore().getToken();
          if (token)
            navigate("/wallet");
          else {
            navigate("/");
          }
        } catch {
          tokenStore().clearToken();
          clearUser();
          setIsAuthenticated(false);
          navigate("/");
        }
      }

      setIsAuthenticated(!!token);
      setAuthLoading(false);
    };

    initAuth();
  }, []);

  /* ---------------- AUTH ACTIONS ---------------- */

  const signup = async (data: IUserSignup) => {
    const response = await API.post("/auth/signup", data);
    return response.data;
  };

  const login = async (data: IUserLogin) => {
    setActionLoading(true);
    try {
      const response = await API.post("/auth/login", data);

      const { accessToken, user } = response.data.loginResponse;
      tokenStore().setToken(accessToken);
      setUser(user);
      setIsAuthenticated(true);
    } finally {
      setActionLoading(false);
    }
  };

  const logout = async () => {
    setActionLoading(true);
    try {
      const token = tokenStore().getToken();
      if (token) {
        const apiClient = createApiClient(token);
        await apiClient.post("/auth/logout");
      }
    } finally {
      tokenStore().clearToken();
      clearUser();
      setIsAuthenticated(false);
      setActionLoading(false);
    }
  };

  const refreshToken = async () => {
    try {
      const response = await API.post(
        "/auth/refresh",
        {},
        { withCredentials: true }
      );
      const { accessToken, user } = response.data;
      tokenStore().setToken(accessToken);
      setUser(user);
      setIsAuthenticated(true);

    }
    catch (error) {
      console.log(error);
      tokenStore().clearToken();
      clearUser();
      setIsAuthenticated(false);
      navigate("/");
    }

  };

  const value = useMemo(
    () => ({
      isAuthenticated,
      authLoading,
      actionLoading,
      signup,
      login,
      logout,
      refreshToken,
    }),
    [isAuthenticated, authLoading, actionLoading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
