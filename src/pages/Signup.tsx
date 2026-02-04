import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  Card,
  CardContent,
  FormControlLabel,
  Checkbox,
  useMediaQuery,
  useTheme,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import logoVertical from "@/assets/logoVertical.png"
import { useToast } from "@/hooks/use-toast";
import { IUserSignup } from "@/interfaces/UserInterfaces";
import { useAuth } from "@/contexts/AuthContext";
import { useUser } from "@/contexts/UserContext";

// Password must contain: 1 uppercase, 1 lowercase, 1 number, 1 special char, min 8 chars
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const PASSWORD_REQUIREMENTS = "Password must be at least 8 characters with 1 uppercase, 1 lowercase, 1 number, and 1 special character (@$!%*?&)";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { toast } = useToast();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const { signup, authLoading, actionLoading } = useAuth();
  const { userActionLoading } = useUser();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate password in real-time
    if (name === "password") {
      if (value && !PASSWORD_REGEX.test(value)) {
        setPasswordError(PASSWORD_REQUIREMENTS);
      } else {
        setPasswordError("");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate password strength
    if (!PASSWORD_REGEX.test(formData.password)) {
      toast({
        title: "Invalid Password",
        description: PASSWORD_REQUIREMENTS,
        variant: "destructive",
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match. Please try again.",
        variant: "destructive",
      });
      return;
    }

    if (!agreeToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms and conditions.",
        variant: "destructive",
      });
      return;
    }

    const userObj: IUserSignup = {
      fname: formData.firstName,
      lname: formData.lastName,
      email: formData.email,
      username: formData.username,
      password: formData.password,
    };

    try {
      const response = await signup(userObj);

      toast({
        title: "Success",
        description: response.message || "Account created successfully",
      });

      navigate("/login");
    } catch (err: any) {
      console.log("Signup Failed", err)
      toast({
        title: "Signup Failed",
        description: err.response?.data?.message || "Something went wrong",
        variant: "destructive",
      });
    }
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, hsl(218, 23%, 7%), hsl(218, 23%, 9%))",
      }}
    >
      <Box sx={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "500px" }}>
        <Card
          sx={{
            backdropFilter: "blur(16px)",
            backgroundColor: "rgba(0, 0, 0, 0.47)",
            border: "1px solid rgba(0, 0, 0, 0.55)",
            boxShadow: "0 0 40px hsla(271, 91%, 65%, 0.2)",
            borderRadius: 2,
          }}
        >
          <CardContent sx={{ p: { xs: 3, sm: 4 }, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <Box
              component="img"
              src={logoVertical}
              alt="Logo"
              sx={{
                width: "200px",
                height: "auto",
                marginBottom: "20px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              }}
            />
            <Box component="form" onSubmit={handleSubmit}>
              <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                <TextField
                  fullWidth
                  name="firstName"
                  label="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
                <TextField
                  fullWidth
                  name="lastName"
                  label="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </Box>
              <Box sx={{ display: "flex", gap: 2, }}>
                <TextField
                  fullWidth
                  name="email"
                  label="Email Address"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  sx={{ mb: 3 }}
                />
                <TextField
                  fullWidth
                  name="username"
                  label="Username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </Box>


              <TextField
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleInputChange}
                required
                error={!!passwordError}
                helperText={passwordError}
                sx={{ mb: 3 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                        aria-label={showPassword ? "Hide password" : "Show password"}    
                        sx={{padding:"15px"}}
                      >
                        {showPassword ? <VisibilityOff sx={{fontSize:18, opacity:0.7}}/> : <Visibility sx={{fontSize:18, opacity:0.7}} />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                sx={{ mb: 3 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        edge="end"
                        aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                        sx={{padding:"15px"}}

                      >
                        {showConfirmPassword ? <VisibilityOff sx={{fontSize:18, opacity:0.7}}/> : <Visibility sx={{fontSize:18, opacity:0.7}} />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={agreeToTerms}
                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                  />
                }
                label={
                  <Typography sx={{ fontSize: "0.875rem" }}>
                    I agree to the{" "}
                    <Link to="/terms" style={{ color: "hsl(271, 91%, 65%)" }}>
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" style={{ color: "hsl(271, 91%, 65%)" }}>
                      Privacy Policy
                    </Link>
                  </Typography>
                }
                sx={{ mb: 3 }}
              />

              <Button type="submit" fullWidth variant="contained" disabled={authLoading || actionLoading || userActionLoading}>
                {authLoading || actionLoading || userActionLoading ? "Creating Account..." : "Create Account"}
              </Button>
            </Box>

            <Box sx={{ mt: 3, textAlign: "center" }}>
              <Typography sx={{ fontSize: "0.875rem" }}>
                Already have an account?{" "}
                <Link to="/login" style={{ color: "hsl(271, 91%, 65%)" }}>
                  Sign in here
                </Link>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Signup;
