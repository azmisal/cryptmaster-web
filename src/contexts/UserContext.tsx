import { createApiClient } from "@/api/AuthApi";
import { IUser } from "@/interfaces/UserInterfaces";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { useAuth } from "./AuthContext";
import { tokenStore } from "@/stores/tokenstore";

// Define the shape of user data
interface IUserContext {
  user: IUser | null;
  setUser: (user: IUser) => void;
  clearUser: () => void;
  userActionLoading: boolean;
  updateUser: (user: IUser | null) => Promise<any>;
}

// Default values
const defaultUserContext: IUserContext = {
  user: null,
  userActionLoading: false,
  setUser: () => { },
  clearUser: () => { },
  updateUser: async () => Promise.resolve(null),
};

// Create context
const UserContext = createContext<IUserContext>(defaultUserContext);

// Provider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [userActionLoading, setUserActionLoading] = useState(false);

  const setUserContext = (user: IUser) => {
    setUser(user);
  };

  const clearUser = () => {
    setUser(null);
  };

  const updateUser = async (user: IUser) => {

    setUserActionLoading(true);
    const accessToken = tokenStore().getToken();
    const apiClient = createApiClient(accessToken);
    try {
      const newUser = await apiClient.post("/update-user", { user: user });
      setUser(newUser.data.updateResponse);
      return newUser
    } catch (error) {
      console.error("user Update error:", error);
    } finally {
      setUserActionLoading(false);
    }

  }

  const contextValue = React.useMemo(
    () => ({ user, setUser: setUserContext, userActionLoading, clearUser, updateUser }),
    [user, userActionLoading]
  );

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

// Hook to use context easily
export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used within UserProvider");
  return ctx;
};
