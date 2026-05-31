import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Rocket } from "lucide-react";

const ComingSoon = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                minHeight: "100vh",
                overflow: "hidden",
                bgcolor: "background.default",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Navbar />

            {/* Main Content */}
            <Box
                component="section"
                sx={{
                    position: "relative",
                    pt: { xs: 16, sm: 15 },
                    pb: { xs: 10, sm: 12 },
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {/* Background Gradient */}
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        background:
                            theme.palette.mode === "dark"
                                ? "linear-gradient(to bottom right, hsl(218, 23%, 7%), hsl(218, 23%, 7%), hsla(271, 91%, 65%, 0.06))"
                                : "linear-gradient(to bottom right, hsl(45, 20%, 94%), hsl(45, 20%, 94%), hsla(271, 91%, 65%, 0.06))",
                    }}
                />

                <Container
                    maxWidth="lg"
                    sx={{
                        position: "relative",
                        zIndex: 1,
                    }}
                >
                    <Box sx={{ textAlign: "center" }}>
                        <Typography
                            variant="h2"
                            component="h1"
                            sx={{
                                fontSize: { xs: "2.4rem", sm: "3rem", md: "3.5rem" },
                                fontWeight: 900,
                                mb: 1.5,
                                background:
                                    "linear-gradient(135deg, hsl(271, 91%, 65%), hsl(271, 91%, 75%))",
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Coming Soon
                        </Typography>

                        <Typography
                            variant="h6"
                            sx={{
                                fontSize: { xs: "1rem", sm: "1.125rem", md: "1.2rem" },
                                color: theme.palette.text.secondary,
                                maxWidth: "56rem",
                                mx: "auto",
                                mb: { xs: 4, sm: 5 },
                            }}
                        >
                            This feature is being prepared. It’ll be available shortly.
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Button
                                variant="contained"
                                startIcon={<Rocket size={18} />}
                                onClick={() => navigate("/")}
                                sx={{
                                    px: 3,
                                    py: 1.25,
                                    borderRadius: 999,
                                    fontWeight: 700,
                                    textTransform: "none",
                                    background:
                                        "linear-gradient(135deg, hsl(271, 91%, 65%), hsl(271, 91%, 75%))",
                                    color: "hsl(210, 40%, 98%)",
                                    boxShadow:
                                        theme.palette.mode === "dark"
                                            ? "0 14px 40px rgba(124, 58, 237, 0.25)"
                                            : "0 14px 40px rgba(124, 58, 237, 0.20)",
                                    "&:hover": {
                                        opacity: 0.92,
                                    },
                                }}
                            >
                                Back to Home
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Box>

            <Footer />
        </Box>
    );
};

export default ComingSoon;