import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Lightbulb, Users } from "lucide-react";
import { Box, Card, CardContent, Container, Stack, Typography, useTheme } from "@mui/material";

const About = () => {
  const theme = useTheme();
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To democratize cryptocurrency trading education by providing a risk-free platform where anyone can learn without financial consequences."
    },
    {
      icon: Heart,
      title: "Our Passion",
      description: "We're passionate about helping people avoid the mistakes that come with trading inexperience, protecting their financial wellbeing while they learn."
    },
    {
      icon: Lightbulb,
      title: "Our Approach",
      description: "Combining real-time market data with virtual currency to create an authentic learning experience that builds genuine trading skills."
    },
    {
      icon: Users,
      title: "Our Community",
      description: "Building a supportive community of learners who share strategies, celebrate wins, and learn from mistakes together."
    }
  ];

  return (

    <Box sx={{
      minHeight: '100vh'}}>
      <Navbar />

      <Container maxWidth="xl" sx={{  position: 'relative', zIndex: 1}}>

        {/* Header */}
        <Box
          component="section"
          sx={{
            position: 'relative',
            pt: { xs: 16, sm: 15 },
            pb: { xs: 8, sm: 10 },
            overflow: 'hidden'
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: theme.palette.mode === 'dark'
                ? 'linear-gradient(to bottom right, hsl(218, 23%, 7%), hsl(218, 23%, 7%), hsla(271, 91%, 65%, 0.05))'
                : 'linear-gradient(to bottom right, hsl(45, 20%, 94%), hsl(45, 20%, 94%), hsla(271, 91%, 65%, 0.05))'
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '25%',
              right: '25%',
              width: { xs: '12rem', sm: '16rem', lg: '24rem' },
              height: { xs: '12rem', sm: '16rem', lg: '24rem' },
              background: 'hsla(271, 91%, 65%, 0.1)',
              borderRadius: '50%',
              filter: 'blur(48px)'
            }}
          />
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.75rem' },
                fontWeight: 900,
                mb: 3,
                background: 'linear-gradient(135deg, hsl(271, 91%, 65%), hsl(271, 91%, 75%))',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              About CRYPTMASTER
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
                color: theme.palette.text.secondary,
                maxWidth: '48rem',
                mx: 'auto'
              }}
            >
              A platform born from experience, built for education

            </Typography>
          </Container>
        </Box>

        {/* Story Section */}
        <section className="py-20">
          <Box
            sx={{
              mx: { xs: 0, sm: 3, md: 6 }, // Tailwind: mx-24 -> md: 6*8px=48px approx
              px: { xs: 1, sm: 1.5, lg: 2 }, // Tailwind: px-4 sm:px-6 lg:px-8
            }}
          >
            <Card sx={{
              backdropFilter: "blur(20px)",      // backdrop-blur-xl
              padding: "2rem",
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.1)",
              border: "none",                    // dark:border:none
            }}>
              <CardContent className="p-8 sm:p-12">
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,              // font-bold
                    fontSize: { xs: "1.875rem", sm: "2.25rem", md: "3rem" }, // mobile, tablet, desktop
                    mb: 6,                        // margin-bottom: 1.5rem
                    background: "linear-gradient(135deg, hsl(271, 91%, 65%), hsl(271, 91%, 75%))", // same as gradient-text
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  The Story Behind CRYPTMASTER
                </Typography>

                <Stack
                  spacing={3} // Tailwind's space-y-6 ≈ 1.5rem ≈ 24px → spacing={3} (MUI spacing unit = 8px)
                  sx={{
                    fontSize: { xs: '1rem', sm: '1.125rem' }, // text-lg (18px), responsive for mobile & tablet
                    color: 'text.secondary', // MUI's equivalent of muted-foreground
                    lineHeight: 1.7, // leading-relaxed
                  }}
                >
                  <Typography>
                    Hi, I'm{' '}
                    <Typography component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>
                      Azmi Saleem AP
                    </Typography>{' '}
                    (you can call me{' '}
                    <Typography component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>
                      azmisal
                    </Typography>
                    ), a developer with a passion for cryptocurrency and trading. But like many newcomers to the crypto space,
                    I learned some hard lessons the expensive way.
                  </Typography>

                  <Typography>
                    I invested in cryptocurrencies without fully understanding how to read graphs, recognize patterns,
                    or follow trading trends. The result? I lost money. Real money. Not because the market was bad,
                    but because{' '}
                    <Typography component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>
                      I didn't have the knowledge to make informed decisions
                    </Typography>.
                  </Typography>

                  <Typography>
                    That experience was my wake-up call. I realized that there are countless others out there who want
                    to learn cryptocurrency trading but face the same problem:{' '}
                    <Typography component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>
                      how do you learn without risking your hard-earned money?
                    </Typography>
                  </Typography>

                  <Typography>
                    That's why I created CRYPTMASTER. This platform gives you access to{' '}
                    <Typography component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>
                      real-time market data from CoinGecko
                    </Typography>, combined with a virtual trading system that simulates real trading scenarios.
                    You get the authentic experience of trading cryptocurrencies, complete with realistic market dynamics,
                    without any financial risk.
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "1.25rem", // text-xl
                      fontWeight: 600,     // font-semibold
                      pt: 4,               // pt-4
                      color: theme.palette.text.secondary
                    }}
                  >
                    Learn from mistakes without paying for them. Master the markets before you put real money on the line.
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Box>



        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
                What Drives Us
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our core values shape everything we do at CRYPTMASTER
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} sx={{
                  backdropFilter: "blur(20px)", // glass effect
                  padding: "2rem",
                  backgroundColor: theme.palette.background.default,
                  border: "none",
                  transition: "all 0.3s ease", // matches duration-300
                  "&:hover": {
                    transform: "scale(1.05) translateY(-4px)", // scale-105 + -translate-y-1
                  },
                }}>
                  <CardContent className="p-8">
                    <value.icon className="h-12 w-12 mb-4 text-primary" />
                    <h3 className="text-2xl font-semibold mb-3 text-primary">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Features */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card sx={{
              padding: "2rem",
              backgroundColor: theme.palette.background.paper,
              border: "none",
            }}>
              <CardContent className="p-8 sm:p-12">
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: "bold",
                    mb: 6, // margin-bottom
                    fontSize: { xs: "1.875rem", sm: "2.25rem", md: "3rem" }, // mobile, tablet, desktop
                    background: "linear-gradient(90deg, #F472B6, #8B5CF6)", // example gradient
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  How CRYPTMASTER Works
                </Typography>



                <Stack spacing={3}>
                  {[{
                    number: 1,
                    title: "Real-Time Market Data",
                    description: `We integrate with CoinGecko to provide live cryptocurrency prices, market caps, and trading volumes.
You're trading with real market conditions, just with virtual money.`
                  }, {
                    number: 2,
                    title: "Virtual Trading System",
                    description: `Start with virtual currency and make trades just like you would on a real exchange.
Experience the excitement, pressure, and decision-making of real trading.`
                  }, {
                    number: 3,
                    title: "Learning Resources",
                    description: `Access comprehensive guides on chart patterns, technical indicators, and trading strategies.
Learn the skills you need to become a successful trader.`
                  }, {
                    number: 4,
                    title: "Track Your Progress",
                    description: `Monitor your portfolio performance, analyze your trades, and see how your skills improve over time.
Learn from your mistakes without financial consequences.`
                  }].map((item) => (
                    <Stack key={item.number} direction="row" spacing={2} alignItems="flex-start">
                      <Box
                        sx={{
                          minWidth: 32,
                          minHeight: 32,
                          borderRadius: "50%",
                          backgroundColor: "primary.main",
                          opacity: 0.2,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          color: "primary.main",
                          fontWeight: 700,
                        }}
                      >
                        {item.number}
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            mb: 1,
                            color: "text.primary", // replaces text-foreground
                            fontSize: { xs: "1rem", sm: "1.125rem" } // responsive
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          sx={{
                            color: "text.secondary", // replaces text-muted-foreground
                            fontSize: { xs: "0.875rem", sm: "1rem" },
                          }}
                        >
                          {item.description}
                        </Typography>
                      </Box>
                    </Stack>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold gradient-text mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of traders who are mastering cryptocurrency trading risk-free with CRYPTMASTER
            </p>
          </div>
        </section>
      </Container>
      <Footer />
    </Box>
  );
};

export default About;