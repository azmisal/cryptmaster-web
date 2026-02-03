import { Box, Container, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import heroBackground from "@/assets/crypto-hero-bg.jpg";
import FloatingLogos from './FloatingLogo';
interface HeroSectionProps {
  onGetStarted?: () => void;
  onSignIn?: () => void;
}

const HeroSection = ({ onGetStarted, onSignIn }: HeroSectionProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  // Floating particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
    size: 2 + Math.random() * 10
  }));




  const handleStart = () => (onGetStarted ? onGetStarted() : console.log("Get started clicked"));
  const handleSignIn = () => (onSignIn ? onSignIn() : console.log("Sign in clicked"));

  return (
    <Container
      maxWidth={false}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: theme.palette.background.pale,
        position: 'relative',
        overflow: 'hidden',
        p: 0,
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: theme.palette.mode === 'dark' ? 0.2 : 0.1,
          zIndex: 1
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: theme.palette.mode === 'dark'
            ? 'linear-gradient(to bottom right, hsla(218, 23%, 7%, 0.8), hsla(218, 23%, 7%, 0.6), hsla(218, 23%, 7%, 0.8))'
            : theme.palette.background.pale,
          zIndex: 2
        }
      }}
    >


      {/* Floating particles */}
      {particles.map(p => (
        <Box
          key={p.id}
          sx={{
            position: 'absolute',
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: 'hsla(271, 91%, 65%, 0.6)',
            borderRadius: '50%',
            zIndex: 3,
            animation: `float 4s ease-in-out ${p.delay}s infinite alternate, glow 3s ease-in-out infinite`,
            '@keyframes float': {
              '0%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-20px) translateX(10px)' },
              '100%': { transform: 'translateY(0px) translateX(-10px)' }
            },
            '@keyframes glow': {
              '0%, 100%': { opacity: 0.4 },
              '50%': { opacity: 0.8 }
            }
          }}
        />
      ))}
      {/* floatingComponents */}
      <FloatingLogos/>
      <Box
        sx={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '1400px',
          mx: 'auto',
          px: { xs: 2, sm: 3, lg: 4 }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            py: { xs: 6, lg: 0 }
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: { xs: 'center', lg: 'center' },
              textAlign: { xs: 'center', lg: 'center' },
              gap: { xs: 3, sm: 4, lg: 5 }
            }}
          >
            {/* --- your original text styles kept exactly the same --- */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: 500,
                color: 'hsla(271, 100%, 55%, 1.00)',
                letterSpacing: '0.05em',
                fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
                animation: 'fadeIn 0.6s ease-out forwards',
                '@keyframes fadeIn': {
                  '0%': { opacity: 0, transform: 'translateY(20px)' },
                  '100%': { opacity: 1, transform: 'translateY(0)' }
                }
              }}
            >
              Welcome to...
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontFamily: '"Chakra Petch", sans-serif',
                fontWeight: 900,
                color: 'transparent',
                background: `linear-gradient(90deg, hsl(242, 59%, 48%), hsl(35, 100%, 49%), hsl(242, 59%, 48%)) 0 0 / 400% 100%`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'move-bg 8s infinite linear, fadeIn 0.6s ease-out 0.15s forwards',
                fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem', lg: '4.5rem', xl: '5rem' },
                '@keyframes move-bg': { to: { backgroundPosition: '400% 0' } },
              }}
            >
              CRYPTMASTER
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 400,
                color: 'hsla(271, 100%, 55%, 1.00)',
                letterSpacing: '0.05em',
                fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
                animation: 'fadeIn 0.6s ease-out 0.3s forwards',
                opacity: 0
              }}
            >
              Virtual Cryptocurrency Trading Platform...
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                lineHeight: 1.6,
                fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
                fontWeight: 300,
                maxWidth: { xs: '100%', lg: '32rem' },
                animation: 'fadeIn 0.6s ease-out 0.5s forwards',
                opacity: 0
              }}
            >
              Here you can learn trading on cryptocurrencies and have a gaming experience with it
              and have no loss because it's completely virtual and you don't have to invest any money.
            </Typography>

            <Box>
              <Button
                variant="contained"
                size="large"
                onClick={handleStart}
                sx={{
                  fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
                  fontWeight: 600,
                  px: { xs: 3, sm: 3 },
                  py: { xs: 1.5, sm: 1.5 },
                  borderRadius: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  background: 'linear-gradient(135deg, hsl(271, 91%, 65%), hsl(271, 91%, 75%))',
                  color: 'hsl(210, 40%, 98%)',
                  animation: 'fadeIn 0.6s ease-out 0.7s forwards',
                  opacity: 0,
                  mr: 3,
                  '&:hover': {
                    transform: 'translateY(-2px) scale(1.05)',
                    boxShadow: '0 10px 30px -10px hsla(271, 91%, 65%, 0.4)',
                    opacity: .5
                  }
                }}
              >
                GET STARTED
              </Button>

              <Button
                variant="contained"
                size="large"
                onClick={handleSignIn}
                sx={{
                  fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
                  fontWeight: 600,
                  px: { xs: 3, sm: 3 },
                  py: { xs: 1.5, sm: 1.5 },
                  borderRadius: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  background: 'linear-gradient(135deg, hsla(271, 91%, 45%, 1), hsla(271, 96%, 43%, 1))',
                  color: 'hsl(210, 40%, 98%)',
                  boxShadow: '0 10px 30px -10px hsla(271, 91%, 65%, 0.4)',
                  animation: 'fadeIn 0.6s ease-out 0.7s forwards',
                  opacity: 0,
                  '&:hover': {
                    transform: 'translateY(-2px) scale(1.05)',
                    boxShadow: '0 0 40px hsla(271, 91%, 65%, 0.3)',
                    background: 'linear-gradient(135deg, hsla(271, 91%, 60%, 0.71), hsla(271, 91%, 70%, 0.62))'
                  }
                }}
              >
                SIGN IN
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Decorative blurred orbs */}
      <Box
        sx={{
          position: 'absolute',
          top: '25%',
          right: '25%',
          width: { xs: '8rem', sm: '12rem', lg: '16rem' },
          height: { xs: '8rem', sm: '12rem', lg: '16rem' },
          background: 'hsla(271, 91%, 65%, 0.1)',
          borderRadius: '50%',
          filter: 'blur(48px)',
          animation: 'pulse 2s ease-in-out infinite',
          zIndex: 3,
          '@keyframes pulse': {
            '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
            '50%': { opacity: 1, transform: 'scale(1.1)' }
          }
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '25%',
          left: '25%',
          width: { xs: '6rem', sm: '9rem', lg: '12rem' },
          height: { xs: '6rem', sm: '9rem', lg: '12rem' },
          background: 'hsla(271, 81%, 56%, 0.1)',
          borderRadius: '50%',
          filter: 'blur(32px)',
          animation: 'pulse 2s ease-in-out infinite 1s',
          zIndex: 3
        }}
      />
    </Container>
  );
};

export default HeroSection;
