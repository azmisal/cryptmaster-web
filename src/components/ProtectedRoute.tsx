import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

import Loading from "./Loading";

interface ProtectedRouteProps {
  component: React.ComponentType<any>;
}

export const ProtectedRoute = ({ component: Component }: ProtectedRouteProps) => {
  const { isAuthenticated, authLoading } = useAuth();

  if (authLoading) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Component />;
};
