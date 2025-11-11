import { Link, useActionData } from "react-router-dom";
import { Box, Container, Typography, IconButton, useTheme } from "@mui/material";
import { Facebook, LinkedIn } from "@mui/icons-material";
import XIcon from '@mui/icons-material/X';
import { useAuth } from "@/contexts/AuthContext";
import logoHorizontal from '../assets/logoHorizontal.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { isLoggedIn } = useAuth();
  const footerLinks = {
    navigation: [
      { name: "About", path: isLoggedIn ? "/about" : "/login" },
      { name: "Learn", path: isLoggedIn ? "/learn" : "/login" },
    ],
    platform: [
      { name: "Graphs", path: isLoggedIn ? "/learn" : "/login" },
      { name: "Trade", path: isLoggedIn ? "/learn" : "/login" },
      { name: "Wallet", path: isLoggedIn ? "/learn" : "/login" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61583415398590&sk=about", label: "Facebook" },
    { icon: XIcon, href: "#", label: "X" },
    { icon: LinkedIn, href: "#", label: "LinkedIn" },
  ];

  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        borderTop: `1px solid ${theme.palette.divider}`,
        bgcolor: theme.palette.background.paper,
        py: 6
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
            gap: 4
          }}
        >
          {/* Brand */}
          <Box sx={{ gridColumn: { xs: 'span 1', md: 'span 2' } }}>
            <Box
              component="img"
              src={logoHorizontal}
              alt="Logo"
              sx={{
                width: "30%",
                height: "auto",
                marginBottom:"20px",
                borderRadius: 2,
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              }}
            />
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.secondary,
                mb: 2,
                maxWidth: '28rem'
              }}
            >
              Learn cryptocurrency trading risk-free with our virtual trading platform.
              Master the markets without losing real money.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  sx={{
                    color: theme.palette.text.secondary,
                    '&:hover': {
                      color: 'hsl(271, 91%, 65%)'
                    }
                  }}
                >
                  <social.icon fontSize="small" />
                </IconButton>
              ))}
            </Box>
          </Box>

          {/* Platform Links */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Platform
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {footerLinks.platform.map((link) => (
                <Box component="li" key={link.path} sx={{ mb: 1 }}>
                  <Link
                    to={link.path}
                    style={{
                      textDecoration: 'none',
                      color: 'hsl(271, 91%, 65%)',
                      fontSize: '0.875rem',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = theme.palette.text.secondary}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(271, 91%, 65%)'}
                  >
                    {link.name}
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Navigation Links */}
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Navigation
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
              {footerLinks.navigation.map((link) => (
                <Box component="li" key={link.path} sx={{ mb: 1 }}>
                  <Link
                    to={link.path}
                    style={{
                      textDecoration: 'none',
                      color: 'hsl(271, 91%, 65%)',
                      fontSize: '0.875rem',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = theme.palette.text.secondary}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'hsl(271, 91%, 65%)'}
                  >
                    {link.name}
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>


        </Box>

        {/* Bottom Bar */}
        <Box
          sx={{
            mt: 6,
            pt: 4,
            borderTop: `1px solid ${theme.palette.divider}`,
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2
          }}
        >
          <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
            © {currentYear} CRYPT-MASTER. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Box
              component="a"
              href="#"
              sx={{
                fontSize: '0.875rem',
                color: theme.palette.text.secondary,
                textDecoration: 'none',
                '&:hover': {
                  color: 'hsl(271, 91%, 65%)'
                }
              }}
            >
              Privacy Policy
            </Box>
            <Box
              component="a"
              href="#"
              sx={{
                fontSize: '0.875rem',
                color: theme.palette.text.secondary,
                textDecoration: 'none',
                '&:hover': {
                  color: 'hsl(271, 91%, 65%)'
                }
              }}
            >
              Terms of Service
            </Box>
            <Box
              component="a"
              href="#"
              sx={{
                fontSize: '0.875rem',
                color: theme.palette.text.secondary,
                textDecoration: 'none',
                '&:hover': {
                  color: 'hsl(271, 91%, 65%)'
                }
              }}
            >
              Contact
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;