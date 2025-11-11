import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Button, IconButton, Drawer, List, ListItem, Box, useTheme, useMediaQuery } from "@mui/material";
import { Menu, Close } from "@mui/icons-material";
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import { useAuth } from "@/contexts/AuthContext";
import logoHorizontal from '../assets/logoHorizontal.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isLoggedIn, logout } = useAuth()
  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Learn", path: "/learn" },
    { name: "Graphs", path: "/graph" },
    { name: "Trade", path: "/trade" },
    { name: "Wallet", path: "/wallet" },
  ];
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
              <Person2RoundedIcon
                onClick={() => logout()}
                sx={{
                  ml: 2,
                  cursor: 'pointer',
                  color: 'hsl(210, 40%, 98%)',
                  textTransform: 'none',
                  fontWeight: 600,
                  '&:hover': {
                    opacity: 0.9,
                    color: 'hsla(0, 0%, 42%, 1.00)'
                  }
                }}
              />
            </Box>
          )}

          {/* Mobile menu button */}
          {isMobile && (
            <IconButton
              onClick={() => setIsOpen(!isOpen)}
              sx={{ color: theme.palette.text.primary }}
            >
              {isOpen ? <Close /> : <Menu />}
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
          <ListItem sx={{ p: 0, mt: 2 }}>
            <Button
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
              Sign Up
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
