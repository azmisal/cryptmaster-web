import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of user data
interface IUserContext {
  user_id: string;
  email: string;
  setUser: (user: { user_id: string; email: string }) => void;
  clearUser: () => void;
}

// Default values
const defaultUserContext: IUserContext = {
  user_id : "",
  email: "",
  setUser: () => {},
  clearUser: () => {},
};

// Create context
const UserContext = createContext<IUserContext>(defaultUserContext);

// Provider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user_id, setId] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const setUser = (user: { user_id: string; email: string }) => {
    setId(user.user_id);
    setEmail(user.email);
  };

  const clearUser = () => {
    setId("");
    setEmail("");
  };

  const contextValue = React.useMemo(
    () => ({ user_id, email, setUser, clearUser }),
    [user_id, email]
  );

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

// Hook to use context easily
export const useUser = () => useContext(UserContext);
