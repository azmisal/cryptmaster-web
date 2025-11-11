import { Box, Container, Typography, Card, CardContent, useTheme } from '@mui/material';

const StatsSection = () => {
  const theme = useTheme();
  
  const stats = [
    { value: "10K+", label: "Active Traders", icon: "👥" },
    { value: "Unlimited", label: "Virtual Volume", icon: "💰" },
    { value: "10", label: "Crypto Pairs", icon: "🔗" },
    { value: "99.9%", label: "Uptime", icon: "⚡" }
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, sm: 10, lg: 12 },
        background: theme.palette.mode === 'dark'
          ? 'hsla(218, 23%, 12%, 0.3)'
          : 'hsla(45, 20%, 94%, 0.5)',
        borderTop: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`,
        backdropFilter: 'blur(10px)'
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: { xs: 6, lg: 8 } }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontSize: { xs: '1.5rem', sm: '1.875rem', lg: '2.25rem' },
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, hsl(271, 91%, 65%), hsl(271, 91%, 75%))',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2
            }}
          >
            Trusted by Users
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
              maxWidth: '32rem',
              mx: 'auto'
            }}
          >
            Join our growing community of crypto enthusiasts learning to trade risk-free
          </Typography>
        </Box>
        
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
            gap: { xs: 2, sm: 3, lg: 4 }
          }}
        >
          {stats.map((stat, index) => (
            <Card
              key={index}
              sx={{
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(145deg, hsl(218, 23%, 9%), hsl(218, 23%, 12%))'
                  : 'linear-gradient(145deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4))',
                border: `1px solid ${theme.palette.mode === 'dark' 
                  ? 'hsla(218, 23%, 15%, 0.5)'
                  : 'rgba(255, 255, 255, 0.6)'
                }`,
                backdropFilter: 'blur(20px)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: 'hsla(271, 91%, 65%, 0.3)',
                  transform: 'scale(1.05)',
                  '& .stat-icon': {
                    animation: 'float 2s ease-in-out infinite'
                  }
                },
                '@keyframes float': {
                  '0%, 100%': { transform: 'translateY(0px)' },
                  '50%': { transform: 'translateY(-10px)' }
                }
              }}
            >
              <CardContent sx={{ p: { xs: 2, sm: 3 }, textAlign: 'center' }}>
                <Typography
                  className="stat-icon"
                  variant="h4"
                  component="div"
                  sx={{
                    fontSize: { xs: '1.5rem', sm: '1.875rem' },
                    mb: 1,
                    transition: 'transform 0.3s ease'
                  }}
                >
                  {stat.icon}
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{
                    fontSize: { xs: '1.125rem', sm: '1.25rem', lg: '1.5rem' },
                    fontWeight: 'bold',
                    color: 'hsl(271, 91%, 75%)',
                    mb: 0.5
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: '0.75rem', sm: '0.875rem' },
                    color: theme.palette.text.secondary,
                    fontWeight: 500
                  }}
                >
                  {stat.label}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default StatsSection;