import { Box, Container, Typography, Card, CardContent, useTheme } from '@mui/material';

const FeaturesSection = () => {
  const theme = useTheme();
  
  const features = [
    {
      icon: "🎯",
      title: "Risk-Free Learning",
      description: "Practice trading with virtual money and no financial risk"
    },
    {
      icon: "📊",
      title: "Real-Time Data",
      description: "Access live cryptocurrency market data and charts"
    },
    {
      icon: "🏆",
      title: "Competitive Gaming",
      description: "Compete with other traders and climb leaderboards"
    },
    {
      icon: "📚",
      title: "Educational Resources",
      description: "Learn trading strategies and market analysis techniques"
    },
    {
      icon: "💻",
      title: "Professional Tools",
      description: "Use advanced trading tools and technical indicators"
    },
    {
      icon: "🌍",
      title: "Global Community",
      description: "Connect with traders worldwide and share strategies"
    }
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, sm: 10, lg: 12 },
        background: theme.palette.background.paper,

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
            Why Choose CRYPTMASTER?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
              maxWidth: '48rem',
              mx: 'auto'
            }}
          >
            Experience the perfect blend of education, gaming, and professional trading tools 
            in a completely risk-free environment
          </Typography>
        </Box>
        
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
            gap: { xs: 3, lg: 4 }
          }}
        >
          {features.map((feature, index) => (
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
                height: '100%',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderColor: 'hsla(271, 91%, 65%, 0.3)',
                  transform: 'scale(1.05)',
                  boxShadow: theme.palette.mode === 'dark'
                    ? '0 20px 60px rgba(0, 0, 0, 0.4), 0 0 30px hsla(271, 91%, 65%, 0.2)'
                    : '0 20px 60px rgba(0, 0, 0, 0.15), 0 0 30px hsla(271, 91%, 65%, 0.15)',
                  '& .feature-icon': {
                    transform: 'scale(1.1)',
                    animation: 'float 2s ease-in-out infinite'
                  }
                },
                '@keyframes float': {
                  '0%, 100%': { transform: 'translateY(0px) scale(1.1)' },
                  '50%': { transform: 'translateY(-10px) scale(1.1)' }
                }
              }}
            >
              <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                <Typography
                  className="feature-icon"
                  variant="h3"
                  component="div"
                  sx={{
                    fontSize: { xs: '2rem', sm: '2.5rem' },
                    mb: 2,
                    transition: 'transform 0.3s ease'
                  }}
                >
                  {feature.icon}
                </Typography>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontSize: { xs: '1rem', sm: '1.125rem' },
                    color: 'hsl(271, 91%, 75%)',
                    mb: 2,
                    fontWeight: 600
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text.secondary,
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                    lineHeight: 1.6
                  }}
                >
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturesSection;