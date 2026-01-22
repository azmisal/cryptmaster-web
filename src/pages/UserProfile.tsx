import { useState, useEffect } from "react";
import {
    Box,
    Container,
    Typography,
    Button,
    TextField,
    Card,
    CardContent,
    Avatar,
    Stack,
    Divider,
    Alert,
} from "@mui/material";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import PersonIcon from "@mui/icons-material/Person";

const UserProfile = () => {
    const { user, updateUser } = useAuth();
    const { toast } = useToast();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        username: "",
    });

    useEffect(() => {
        if (user) {
            setFormData({
                fname: user.fname || "",
                lname: user.lname || "",
                username: user.username || "",
            });
        }
    }, [user]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = async () => {
        try {
            if (!user) return;
            console.log("Updating user with data:", { ...user, ...formData });
            await updateUser({ ...user, ...formData });
            setIsEditing(false);
            toast({
                title: "Profile Updated",
                description: "Your profile information has been updated successfully.",
            });
        } catch (error) {
            console.error("Error updating profile:", error);
            toast({
                title: "Update Failed",
                description: "Failed to update profile. Please try again.",
                variant: "destructive",
            });
        }
    };

    return (
        <Container maxWidth="md" sx={{ py: 8 }}>
            <Card
                sx={{
                    background: "rgba(255, 255, 255, 0.02)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: 4,
                    overflow: "visible",
                }}
            >
                <Box
                    sx={{
                        height: 140,
                        background: "linear-gradient(135deg, hsl(271, 91%, 65%), hsl(271, 91%, 75%))",
                    }}
                />
                <Box
                    sx={{
                        mt: -8,
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Avatar
                        sx={{
                            width: 120,
                            height: 120,
                            border: "4px solid rgba(13, 15, 20, 1)", // Match background
                            bgcolor: "hsl(271, 91%, 75%)",
                            fontSize: "3rem",
                        }}
                    >
                        {user?.username?.charAt(0).toUpperCase() || <PersonIcon fontSize="inherit" />}
                    </Avatar>
                </Box>

                <CardContent sx={{ pt: 2, px: 4, pb: 6 }}>
                    <Box sx={{ textAlign: "center", mb: 4 }}>
                        <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
                            {user?.fname} {user?.lname}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            @{user?.username}
                        </Typography>
                    </Box>

                    <Stack spacing={4} sx={{ maxWidth: 600, mx: "auto" }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                Personal Information
                            </Typography>
                            {!isEditing ? (
                                <Button
                                    variant="outlined"
                                    onClick={() => setIsEditing(true)}
                                    sx={{
                                        borderColor: "hsl(271, 91%, 65%)",
                                        color: "hsl(271, 91%, 65%)",
                                        "&:hover": {
                                            borderColor: "hsl(271, 91%, 75%)",
                                            backgroundColor: "rgba(168, 85, 247, 0.05)",
                                        },
                                    }}
                                >
                                    Edit Profile
                                </Button>
                            ) : (
                                <Stack direction="row" spacing={2}>
                                    <Button
                                        variant="text"
                                        onClick={() => {
                                            setIsEditing(false);
                                            // Reset form data
                                            if (user) {
                                                setFormData({
                                                    fname: user.fname || "",
                                                    lname: user.lname || "",
                                                    username: user.username || "",
                                                });
                                            }
                                        }}
                                        sx={{ color: "text.secondary" }}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        variant="contained"
                                        onClick={handleSave}
                                        sx={{
                                            background: "linear-gradient(135deg, hsl(271, 91%, 65%), hsl(271, 91%, 75%))",
                                        }}
                                    >
                                        Save Changes
                                    </Button>
                                </Stack>
                            )}
                        </Box>

                        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

                        <Stack spacing={3}>
                            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
                                <TextField
                                    label="First Name"
                                    name="fname"
                                    value={formData.fname}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    fullWidth
                                    variant="outlined"
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            "&.Mui-disabled": {
                                                "& > fieldset": {
                                                    borderColor: "rgba(255, 255, 255, 0.1)"
                                                }
                                            }
                                        }
                                    }}
                                />
                                <TextField
                                    label="Last Name"
                                    name="lname"
                                    value={formData.lname}
                                    onChange={handleChange}
                                    disabled={!isEditing}
                                    fullWidth
                                    variant="outlined"
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            "&.Mui-disabled": {
                                                "& > fieldset": {
                                                    borderColor: "rgba(255, 255, 255, 0.1)"
                                                }
                                            }
                                        }
                                    }}
                                />
                            </Box>

                            <TextField
                                label="Username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                disabled={!isEditing}
                                fullWidth
                                variant="outlined"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        "&.Mui-disabled": {
                                            "& > fieldset": {
                                                borderColor: "rgba(255, 255, 255, 0.1)"
                                            }
                                        }
                                    }
                                }}
                            />

                            <TextField
                                label="Email Address"
                                value={user?.email || ""}
                                disabled
                                fullWidth
                                variant="outlined"
                                helperText="Email address cannot be changed"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        "&.Mui-disabled": {
                                            "& > fieldset": {
                                                borderColor: "rgba(255, 255, 255, 0.1)"
                                            }
                                        }
                                    }
                                }}
                            />
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        </Container>
    );
};

export default UserProfile;
