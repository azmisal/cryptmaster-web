import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useToast } from "@/hooks/use-toast";
import cryptoBg from "@/assets/crypto-hero-bg.jpg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import logoVertical from "@/assets/logoVertical.png"
import { useUser } from "@/contexts/UserContext";

const Login = () => {
  const [loginData, setData] = useState({ email: "", password: "" });
  const { toast } = useToast();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login, authLoading, actionLoading } = useAuth();
  const { userActionLoading } = useUser();
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await login(loginData);
      toast({
        title: "Login Successfull;",
        description: "You are logged in",
      });
      navigate("/wallet");
    } catch (err: any) {
      console.log(err);
      toast({
        title: "Login failed",
        description: "Please try again",
        variant: "destructive",
      });
      setError(err.message || "Login failed. Please try again.");
    }
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        p: 0,
        background: 'linear-gradient(135deg, hsl(210, 25.00%, 3.10%) 0%, hsl(218, 23%, 9%) 50%, hsl(218, 23%, 7%) 100%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${cryptoBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.2,
          zIndex: 1
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom right, hsla(218, 23%, 7%, 0.8) 0%, hsla(218, 23%, 7%, 0.6) 50%, hsla(218, 23%, 7%, 0.8) 100%)',
          zIndex: 2
        }
      }}
    >
      {/* Decorative Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '25%',
          right: '25%',
          width: { xs: '8rem', sm: '12rem', lg: '16rem' },
          height: { xs: '8rem', sm: '12rem', lg: '16rem' },
          background: 'hsla(271, 91.00%, 65.10%, 0.22)',
          borderRadius: '50%',
          filter: 'blur(48px)',
          animation: 'pulse 2s ease-in-out infinite',
          zIndex: 3
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '25%',
          left: '25%',
          width: { xs: '6em', sm: '9rem', lg: '12rem' },
          height: { xs: '6rem', sm: '9rem', lg: '12rem' },
          background: 'hsla(271, 81%, 56%, 0.1)',
          borderRadius: '50%',
          filter: 'blur(32px)',
          animation: 'pulse 2s ease-in-out infinite 1s',
          zIndex: 3
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '400px',
          mx: 'auto',
          p: { xs: 2, sm: 3 }
        }}
      >
        <Card
          sx={{
            backdropFilter: 'blur(16px)',
            backgroundColor: 'rgba(0, 0, 0, 0.47)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 0 40px hsla(271, 91%, 65%, 0.2)',
            borderRadius: 2,
            animation: 'fadeIn 0.6s ease-out forwards',
            '@keyframes fadeIn': {
              '0%': { opacity: 0, transform: 'translateY(20px)' },
              '100%': { opacity: 1, transform: 'translateY(0)' }
            }
          }}
        >
          <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
            <Box sx={{ textAlign: 'center', mb: 2, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
              <Box
                component="img"
                src={logoVertical}
                alt="Logo"
                sx={{
                  width: "200px",
                  height: "auto",
                  // marginBottom: "20px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: 'hsla(210, 40%, 98%, 0.8)',
                  fontSize: { xs: '.8rem', sm: '1rem' }
                }}
              >
                Sign in to your trading account
              </Typography>
            </Box>

            <Box component="form" onSubmit={handleSubmit} sx={{ space: 3 }}>
              <TextField
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
                value={loginData.email}
                onChange={handleChange}
                required
                variant="outlined"
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'hsl(271, 91%, 65%)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'hsl(271, 91%, 65%)',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'hsla(210, 40%, 98%, 0.8)',
                    '&.Mui-focused': {
                      color: 'hsl(271, 91%, 75%)',
                    },
                  },
                }}
              />

              <TextField
                fullWidth
                id="password"
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={loginData.password}
                onChange={handleChange}
                required
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        sx={{ color: 'hsla(210, 40%, 98%, 0.6)', padding:"15px" }}
                      >
                        {showPassword ? <VisibilityOff sx={{fontSize:18, opacity:0.7}}/> : <Visibility sx={{fontSize:18, opacity:0.7}} />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  mb: 4,
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    '& fieldset': {
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'hsl(271, 91%, 65%)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'hsl(271, 91%, 65%)',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'hsla(210, 40%, 98%, 0.8)',
                    '&.Mui-focused': {
                      color: 'hsl(271, 91%, 75%)',
                    },
                  },
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={authLoading || actionLoading || userActionLoading}
                sx={{
                  fontSize: { xs: '0.875rem', sm: '1rem' },
                  fontWeight: 600,
                  py: 1.5,
                  borderRadius: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  background: 'linear-gradient(135deg, hsl(271, 91%, 65%), hsl(271, 91%, 75%))',
                  color: 'hsl(210, 40%, 98%)',
                  boxShadow: '0 10px 30px -10px hsla(271, 91%, 65%, 0.4)',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-2px) scale(1.05)',
                    boxShadow: '0 0 40px hsla(271, 91%, 65%, 0.3)',
                    background: 'linear-gradient(135deg, hsl(271, 91%, 65%), hsl(271, 91%, 75%))'
                  }
                }}
              >
                {authLoading || actionLoading || userActionLoading ? "Signing In..." : "Sign In"}
              </Button>
            </Box>

            <Box sx={{ mt: 3, textAlign: 'center', space: 2 }}>
              <Typography
                component={Link}
                to="/forgot-password"
                sx={{
                  display: 'block',
                  color: 'hsl(271, 91%, 75%)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  mb: 2,
                  '&:hover': {
                    color: 'hsl(271, 91%, 65%)',
                  }
                }}
              >
                Forgot your password?
              </Typography>

              <Typography sx={{ fontSize: '0.875rem', color: 'hsla(210, 40%, 98%, 0.8)' }}>
                Don't have an account?{" "}
                <Typography
                  component={Link}
                  to="/signup"
                  sx={{
                    color: 'hsl(271, 91%, 75%)',
                    textDecoration: 'none',
                    fontWeight: 500,
                    '&:hover': {
                      color: 'hsl(271, 91%, 65%)',
                    }
                  }}
                >
                  Sign up here
                </Typography>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Login;