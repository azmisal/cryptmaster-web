import { Box } from '@mui/material';
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import { useEffect } from 'react';
import { tokenStore } from '@/stores/tokenstore';

const Home = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const token = tokenStore().getToken()
    if(token) {
      navigate("/wallet");
    }
  }, );  

  const handleGetStarted = () => {
    toast({
      title: "Welcome to CRYPTMASTER!",
      description: "Get ready to start your virtual cryptocurrency trading journey.",
    });
    navigate("/signup")
  };
  const handleSignIn = () => {
    toast({
      title: "Welcome Back to CRYPTMASTER!",
      description: "Resume your virtual cryptocurrency trading journey.",
    });
    navigate("/login")
  };
  
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <HeroSection onGetStarted={handleGetStarted} onSignIn={handleSignIn} />
      <StatsSection />
      <FeaturesSection />
      <Footer />

    </Box>
  );
};

export default Home;