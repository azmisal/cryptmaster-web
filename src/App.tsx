import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { CustomThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Wallet } from "./pages/Wallet";
import Trade from "./pages/Trade";
import Graph from "./pages/Graph";
import { useEffect, useState } from "react";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { UserProvider } from "./contexts/UserContext";
import { AuthProvider } from "./contexts/AuthContext";
import { WalletProvider } from "./contexts/WalletContext";
import { TextButtonPage } from "./pages/Test"
import About from "./pages/About";
import Learn from "./pages/Learn";

// const queryClient = new QueryClient();,

const App = () => {


  return (
    // <QueryClientProvider client={queryClient}>
    <UserProvider>
      <WalletProvider>
        <CustomThemeProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <AuthProvider>

                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/wallet" element={<ProtectedRoute component={Wallet} />} />
                  <Route path="/trade" element={<ProtectedRoute component={Trade} />} />
                  <Route path="/graph" element={<ProtectedRoute component={Graph} />} />
                  <Route path="/about" element={<ProtectedRoute component={About} />} />
                  <Route path="/learn" element={<ProtectedRoute component={Learn} />} />
                </Routes>
                
              </AuthProvider>

            </ BrowserRouter>
          </TooltipProvider>
        </CustomThemeProvider>
      </WalletProvider>
    </UserProvider>
  )
};
export default App;
