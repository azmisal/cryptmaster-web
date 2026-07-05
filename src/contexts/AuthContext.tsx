import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { IUserLogin, IUserSignup } from "@/interfaces/UserInterfaces";
import { API, createApiClient } from "../api/AuthApi";
import { tokenStore } from "@/stores/tokenstore";
import { useUser } from "./UserContext";
import { useNavigate } from "react-router-dom";
import { useWallet } from "./WalletContext";
import { registerLogoutHandler } from "@/events/AuthEvents";

interface AuthContextType {
  isAuthenticated: boolean;
  authLoading: boolean;
  actionLoading: boolean;
  signup: (data: IUserSignup) => Promise<any>;
  login: (data: IUserLogin) => Promise<void>;
  logout: (user_id: string) => Promise<void>;
  refreshToken: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { setUser, clearUser } = useUser();
  const { walletSetter, clearWallet } = useWallet();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const navigate = useNavigate();

  const clearAuthState = useCallback(() => {
    tokenStore().clearToken();
    clearUser();
    clearWallet();
    setIsAuthenticated(false);
  }, [clearUser, clearWallet]);

  const fetchWallet = useCallback(async (accessToken: string, userId: string) => {
    const apiClient = createApiClient(accessToken);
    const response = await apiClient.post("/wallet", { user_Id: userId });
    return response.data.wallet;
  }, []);

  const applyAuthenticatedSession = useCallback(async (accessToken: string, user: any) => {
    tokenStore().setToken(accessToken);
    const wallet = await fetchWallet(accessToken, user.user_Id);

    setUser(user);
    walletSetter(wallet);
    setIsAuthenticated(true);
  }, [fetchWallet, setUser, walletSetter]);

  useEffect(() => {
    registerLogoutHandler(() => {
      clearAuthState();
      navigate("/login", { replace: true });
    });
  }, [clearAuthState, navigate]);

  useEffect(() => {
    let isActive = true;

    const restoreSession = async () => {
      try {
        const response = await API.post("/auth/refresh", {});
        const { accessToken, user } = response.data;

        if (!isActive) return;

        await applyAuthenticatedSession(accessToken, user);
      } catch {
        if (isActive) {
          clearAuthState();
        }
      } finally {
        if (isActive) {
          setAuthLoading(false);
        }
      }
    };

    restoreSession();

    return () => {
      isActive = false;
    };
  }, [applyAuthenticatedSession, clearAuthState]);

  /* ---------------- AUTH ACTIONS ---------------- */

  const signup = useCallback(async (data: IUserSignup) => {
    const response = await API.post("/auth/signup", data);
    return response.data;
  }, []);

  const login = useCallback(async (data: IUserLogin) => {
    setActionLoading(true);
    try {
      const response = await API.post("/auth/login", data);

      const { accessToken, user } = response.data.loginResponse;
      await applyAuthenticatedSession(accessToken, user);
    } catch (error) {
      clearAuthState();
      throw error;
    } finally {
      setActionLoading(false);
    }
  }, [applyAuthenticatedSession, clearAuthState]);

  const logout = useCallback(async (user_Id: string) => {
    setActionLoading(true);
    try {
      const token = tokenStore().getToken();
      if (token) {
        const apiClient = createApiClient(token);
        await apiClient.post("/auth/logout",{ user_Id:  user_Id});
      }
    } finally {
      clearAuthState();
      setActionLoading(false);
    }
  }, [clearAuthState]);

  const refreshToken = useCallback(async () => {
    try {
      const response = await API.post("/auth/refresh", {});
      const { accessToken, user } = response.data;
      await applyAuthenticatedSession(accessToken, user);
    }
    catch (error) {
      console.log(error);
      clearAuthState();
      throw error;
    }

  }, [applyAuthenticatedSession, clearAuthState]);

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
    [isAuthenticated, authLoading, actionLoading, signup, login, logout, refreshToken]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
