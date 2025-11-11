import { Box } from '@mui/material';
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import Navbar from "@/components/Navbar";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const Home = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

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