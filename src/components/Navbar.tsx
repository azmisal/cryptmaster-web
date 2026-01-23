import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, Box, useTheme, useMediaQuery } from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon, } from "@mui/icons-material";
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import { useAuth } from "@/contexts/AuthContext";
import logoHorizontal from '../assets/logoHorizontal.png';
import { Menu, MenuItem, Avatar, Divider, Typography } from "@mui/material";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openProfileMenu = Boolean(anchorEl);
  const { user } = useAuth();
  const { logout } = useAuth()
  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Learn", path: "/learn" },
    { name: "Graphs", path: "/graph" },
    { name: "Trade", path: "/trade" },
    { name: "Wallet", path: "/wallet" },
  ];
  useEffect(() => {
    setAnchorEl(null);
  }, [location.pathname]);

  const profile = { name: "Profile", path: "/profile" };
  const isActive = (path: string) => location.pathname === path;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: theme.palette.mode === 'dark'
            ? 'rgba(15, 17, 25, 0.8)'
            : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${theme.palette.divider}`,
          borderRadius: '0px 0px 25px 25px',
          boxShadow: 'none'
        }}
      >
        <Toolbar sx={{ width: '100%', mx: 'auto', px: { xs: 2, sm: 3, lg: 4 } }}>
          {/* Logo */}
          <Box sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Box
                component="img"
                src={logoHorizontal}
                alt="Logo"
                sx={{
                  width: "200px",
                  height: "auto",
                  borderRadius: 2,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                }}
              />
            </Link>
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              {navLinks.map((link) => (
                <Button
                  key={link.path}
                  component={Link}
                  to={link.path}
                  sx={{
                    px: 2,
                    py: 1,
                    borderRadius: 1,
                    fontSize: '1rem',
                    fontWeight: 500,
                    textTransform: 'none',
                    color: isActive(link.path)
                      ? 'hsl(271, 91%, 65%)'
                      : theme.palette.text.secondary,
                    bgcolor: isActive(link.path)
                      ? 'hsla(271, 91%, 65%, 0.1)'
                      : 'transparent',
                    '&:hover': {
                      color: 'hsl(271, 91%, 65%)',
                      bgcolor: 'hsla(271, 91%, 65%, 0.1)'
                    }
                  }}
                >
                  {link.name}
                </Button>
              ))}
              <IconButton
                onClick={(e) => setAnchorEl(e.currentTarget)}
                sx={{
                  ml: 2,
                  transition: "0.2s",
                  "&:hover": {
                    color: "hsl(271, 91%, 65%)",
                    transform: "scale(1.1)"
                  }
                }}
              >
                <Person2RoundedIcon fontSize="medium" />
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                open={openProfileMenu}
                onClose={() => setAnchorEl(null)}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                transitionDuration={200}

                PaperProps={{
                  elevation: 0,
                  sx: {
                    mt: 1,
                    minWidth: 220,
                    borderRadius: 1,
                    boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
                    backgroundImage:
                      theme.palette.mode === "dark"
                        ? "linear-gradient(180deg, #111827, #020617)"
                        : "linear-gradient(180deg, #ffffff, #f8fafc)"
                  }
                }}
              >
                {/* User Header */}
                <Box sx={{ px: 2, py: 1.5, display: "flex", alignItems: "center", gap: 1.5 }}>
                  <Avatar
                    sx={{
                      bgcolor: "hsl(271, 91%, 65%)",
                      width: 40,
                      height: 40,
                      fontWeight: 600
                    }}
                  >
                    A
                  </Avatar>
                  <Box>
                    <Typography fontWeight={600}>{user?.fname} {user?.lname}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      Virtual Trader
                    </Typography>
                  </Box>
                </Box>

                <Divider />

                <MenuItem
                  component={Link}
                  to="/profile"
                  onClick={() => setAnchorEl(null)}
                  sx={{ py: 1.2 }}
                >
                  Profile
                </MenuItem>

                <MenuItem
                  onClick={async () => {
                    await logout();
                    setAnchorEl(null);
                  }}
                  sx={{
                    py: 1.2,
                    color: "error.main",
                    fontWeight: 500
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>

            </Box>
          )}

          {/* Mobile menu button */}
          {isMobile && (
            <IconButton
              onClick={() => setIsOpen(!isOpen)}
              sx={{ color: theme.palette.text.primary }}
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={isOpen && isMobile}
        onClose={() => setIsOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: 250,
            background: theme.palette.background.paper,
            pt: 8
          }
        }}
      >
        <List sx={{ px: 1 }}>
          {navLinks.map((link) => (
            <ListItem key={link.path} sx={{ p: 0, mb: 1 }}>
              <Button
                component={Link}
                to={link.path}
                onClick={() => setIsOpen(false)}
                fullWidth
                sx={{
                  justifyContent: 'flex-start',
                  px: 2,
                  py: 1.5,
                  borderRadius: 1,
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  textTransform: 'none',
                  color: isActive(link.path)
                    ? 'hsl(271, 91%, 65%)'
                    : theme.palette.text.secondary,
                  bgcolor: isActive(link.path)
                    ? 'hsla(271, 91%, 65%, 0.1)'
                    : 'transparent',
                  '&:hover': {
                    color: 'hsl(271, 91%, 65%)',
                    bgcolor: 'hsla(271, 91%, 65%, 0.1)'
                  }
                }}
              >
                {link.name}
              </Button>
            </ListItem>
          ))}
          <ListItem sx={{ p: 0, mb: 1 }}>
            <Button
              component={Link}
              to={profile.path}
              onClick={() => setIsOpen(false)}
              fullWidth
              sx={{
                justifyContent: 'flex-start',
                px: 2,
                py: 1.5,
                borderRadius: 1,
                fontSize: '0.875rem',
                fontWeight: 500,
                textTransform: 'none',
                color: isActive(profile.path)
                  ? 'hsl(271, 91%, 65%)'
                  : theme.palette.text.secondary,
                bgcolor: isActive(profile.path)
                  ? 'hsla(271, 91%, 65%, 0.1)'
                  : 'transparent',
                '&:hover': {
                  color: 'hsl(271, 91%, 65%)',
                  bgcolor: 'hsla(271, 91%, 65%, 0.1)'
                }
              }}
            >
              {profile.name}
            </Button>
          </ListItem>
          <ListItem sx={{ p: 0, mt: 2 }}>
            <Button
              onClick={() => logout()}
              fullWidth
              variant="contained"
              sx={{
                background: 'linear-gradient(135deg, hsl(271, 91%, 65%), hsl(271, 91%, 75%))',
                color: 'hsl(210, 40%, 98%)',
                textTransform: 'none',
                fontWeight: 600,
                '&:hover': {
                  opacity: 0.9
                }
              }}
            >
              Logout
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
