import { useState } from 'react';
import { Box, Container, Typography, Card, CardContent, CardHeader, Tabs, Tab, Chip, useTheme } from '@mui/material';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, TrendingUp, Target, Shield, Brain, Lightbulb } from "lucide-react";
import patternHeadShoulders from "@/assets/pattern-head-shoulders.jpg";
import patternTriangles from "@/assets/pattern-triangles.jpg";
import patternCandlesticks from "@/assets/pattern-candlesticks.jpg";
import indicators from "@/assets/indicators.jpg";
import supportResistance from "@/assets/support-resistance.jpg";
import patternFlags from "@/assets/pattern-flags.jpg";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`trading-tabpanel-${index}`}
      aria-labelledby={`trading-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

const Learn = () => {
  const [tabValue, setTabValue] = useState(0);
  const theme = useTheme();

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Navbar />
      
      {/* Hero Section */}
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
            Trading Academy
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
            Your complete roadmap to mastering cryptocurrency trading. Learn chart patterns, 
            technical indicators, strategies, and risk management.
          </Typography>
        </Container>
      </Box>

      {/* Learning Path */}
      <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                '& .MuiTab-root': {
                  fontSize: { xs: '0.75rem', sm: '0.875rem' },
                  minWidth: { xs: 80, sm: 100 },
                  px: { xs: 1, sm: 2 }
                }
              }}
            >
              <Tab label="Basics" />
              <Tab label="Patterns" />
              <Tab label="Indicators" />
              <Tab label="Strategies" />
              <Tab label="Risk" />
              <Tab label="Psychology" />
            </Tabs>
          </Box>

          {/* BASICS TAB */}
          <TabPanel value={tabValue} index={0}>
            <Card
              sx={{
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(145deg, hsl(218, 23%, 9%), hsl(218, 23%, 12%))'
                  : 'linear-gradient(145deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4))',
                backdropFilter: 'blur(20px)',
                border: `1px solid ${theme.palette.mode === 'dark' ? 'hsla(218, 23%, 15%, 0.5)' : 'rgba(255, 255, 255, 0.6)'}`
              }}
            >
              <CardHeader
                title={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <BookOpen size={24} />
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: { xs: '1.25rem', sm: '1.5rem' },
                        background: 'linear-gradient(135deg, hsl(271, 91%, 65%), hsl(271, 91%, 75%))',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 'bold'
                      }}
                    >
                      Getting Started with Crypto Trading
                    </Typography>
                  </Box>
                }
              />
              <CardContent sx={{ '& > *:not(:last-child)': { mb: 4 } }}>
                <Box>
                  <Typography variant="h6" sx={{ color: 'hsl(271, 91%, 75%)', mb: 1.5, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                    What is Cryptocurrency Trading?
                  </Typography>
                  <Typography variant="body1" sx={{ color: theme.palette.text.secondary, lineHeight: 1.6 }}>
                    Cryptocurrency trading involves buying and selling digital assets to profit from price movements. 
                    Unlike traditional stock markets, crypto markets operate 24/7, offering more opportunities but also 
                    requiring constant vigilance and knowledge.
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="h6" sx={{ color: 'hsl(271, 91%, 75%)', mb: 1.5, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                    Understanding Candlestick Charts
                  </Typography>
                  <Box
                    component="img"
                    src={patternCandlesticks}
                    alt="Candlestick patterns"
                    sx={{
                      width: '100%',
                      borderRadius: 2,
                      mb: 2,
                      border: `1px solid ${theme.palette.divider}`
                    }}
                  />
                  <Box sx={{ '& > *:not(:last-child)': { mb: 3 } }}>
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
                        Basic Candlestick Anatomy
                      </Typography>
                      <Box component="ul" sx={{ pl: 3, '& li': { mb: 1, color: theme.palette.text.secondary } }}>
                        <li><strong style={{ color: theme.palette.text.primary }}>Body:</strong> Shows opening and closing prices</li>
                        <li><strong style={{ color: theme.palette.text.primary }}>Wick (Shadow):</strong> Shows high and low prices</li>
                        <li><strong style={{ color: theme.palette.text.primary }}>Green/White:</strong> Price closed higher than it opened (bullish)</li>
                        <li><strong style={{ color: theme.palette.text.primary }}>Red/Black:</strong> Price closed lower than it opened (bearish)</li>
                      </Box>
                    </Box>

                    <Box>
                      <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1.5 }}>
                        Key Candlestick Patterns
                      </Typography>
                      <Box sx={{ display: 'grid', gap: 2 }}>
                        <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                          <Chip label="Bullish" size="small" sx={{ mb: 1, bgcolor: 'rgba(34, 197, 94, 0.2)', color: 'rgb(34, 197, 94)' }} />
                          <Typography variant="body2" fontWeight={600} sx={{ mb: 0.5 }}>Hammer</Typography>
                          <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary }}>
                            Small body with long lower wick. Indicates potential reversal from downtrend.
                          </Typography>
                        </Box>
                        <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                          <Chip label="Bearish" size="small" sx={{ mb: 1, bgcolor: 'rgba(239, 68, 68, 0.2)', color: 'rgb(239, 68, 68)' }} />
                          <Typography variant="body2" fontWeight={600} sx={{ mb: 0.5 }}>Shooting Star</Typography>
                          <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary }}>
                            Small body with long upper wick. Signals potential reversal from uptrend.
                          </Typography>
                        </Box>
                        <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                          <Chip label="Neutral" size="small" sx={{ mb: 1 }} />
                          <Typography variant="body2" fontWeight={600} sx={{ mb: 0.5 }}>Doji</Typography>
                          <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary }}>
                            Opening and closing prices are nearly equal. Indicates market indecision.
                          </Typography>
                        </Box>
                        <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                          <Chip label="Bullish" size="small" sx={{ mb: 1, bgcolor: 'rgba(34, 197, 94, 0.2)', color: 'rgb(34, 197, 94)' }} />
                          <Typography variant="body2" fontWeight={600} sx={{ mb: 0.5 }}>Engulfing Pattern</Typography>
                          <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary }}>
                            Large green candle completely engulfs previous red candle. Strong reversal signal.
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box>
                  <Typography variant="h6" sx={{ color: 'hsl(271, 91%, 75%)', mb: 1.5, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                    Support and Resistance
                  </Typography>
                  <Box
                    component="img"
                    src={supportResistance}
                    alt="Support and resistance levels"
                    sx={{
                      width: '100%',
                      borderRadius: 2,
                      mb: 2,
                      border: `1px solid ${theme.palette.divider}`
                    }}
                  />
                  <Box sx={{ display: 'grid', gap: 2 }}>
                    <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                      <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>Support Levels</Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary }}>
                        Price levels where buying pressure is strong enough to prevent further decline. 
                        Think of it as a "floor" that the price bounces off. When price approaches support, 
                        buyers step in.
                      </Typography>
                    </Box>
                    <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                      <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>Resistance Levels</Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary }}>
                        Price levels where selling pressure is strong enough to prevent further rise. 
                        Think of it as a "ceiling" that price struggles to break through. When price approaches 
                        resistance, sellers emerge.
                      </Typography>
                    </Box>
                    <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                      <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>Role Reversal</Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary }}>
                        When price breaks through resistance, that level often becomes new support. Conversely, 
                        when support breaks, it becomes new resistance. This is a key concept in technical analysis.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </TabPanel>

          {/* PATTERNS TAB */}
          <TabPanel value={tabValue} index={1}>
            <Card
              sx={{
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(145deg, hsl(218, 23%, 9%), hsl(218, 23%, 12%))'
                  : 'linear-gradient(145deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4))',
                backdropFilter: 'blur(20px)',
                border: `1px solid ${theme.palette.mode === 'dark' ? 'hsla(218, 23%, 15%, 0.5)' : 'rgba(255, 255, 255, 0.6)'}`
              }}
            >
              <CardHeader
                title={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <TrendingUp size={24} />
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: { xs: '1.25rem', sm: '1.5rem' },
                        background: 'linear-gradient(135deg, hsl(271, 91%, 65%), hsl(271, 91%, 75%))',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 'bold'
                      }}
                    >
                      Chart Patterns & Technical Analysis
                    </Typography>
                  </Box>
                }
              />
              <CardContent sx={{ '& > *:not(:last-child)': { mb: 4 } }}>
                <Box>
                  <Typography variant="h6" sx={{ color: 'hsl(271, 91%, 75%)', mb: 2, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                    Reversal Patterns
                  </Typography>
                  
                  <Box sx={{ '& > *:not(:last-child)': { mb: 4 } }}>
                    <Box>
                      <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1.5 }}>
                        Head and Shoulders
                      </Typography>
                      <Box
                        component="img"
                        src={patternHeadShoulders}
                        alt="Head and shoulders pattern"
                        sx={{
                          width: '100%',
                          borderRadius: 2,
                          mb: 2,
                          border: `1px solid ${theme.palette.divider}`
                        }}
                      />
                      <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2, '& > *:not(:last-child)': { mb: 1 } }}>
                        <Chip label="Bearish Reversal" size="small" sx={{ bgcolor: 'rgba(239, 68, 68, 0.2)', color: 'rgb(239, 68, 68)' }} />
                        <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                          One of the most reliable reversal patterns. Forms after an uptrend with three peaks:
                        </Typography>
                        <Box component="ul" sx={{ pl: 3, ml: 2, '& li': { mb: 0.5, color: theme.palette.text.secondary, fontSize: '0.875rem' } }}>
                          <li>Left shoulder: First peak</li>
                          <li>Head: Higher peak in the middle</li>
                          <li>Right shoulder: Third peak, similar height to left shoulder</li>
                          <li>Neckline: Support line connecting the lows</li>
                        </Box>
                        <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary }}>
                          <strong style={{ color: theme.palette.text.primary }}>Trading Signal:</strong> Enter short position when price breaks below neckline. 
                          Target is the distance from head to neckline, projected downward from the breakout point.
                        </Typography>
                      </Box>
                    </Box>

                    <Box>
                      <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1.5 }}>
                        Inverse Head and Shoulders
                      </Typography>
                      <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2, '& > *:not(:last-child)': { mb: 1 } }}>
                        <Chip label="Bullish Reversal" size="small" sx={{ bgcolor: 'rgba(34, 197, 94, 0.2)', color: 'rgb(34, 197, 94)' }} />
                        <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                          Mirror image of head and shoulders. Forms at the end of a downtrend, signaling upward reversal.
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary }}>
                          <strong style={{ color: theme.palette.text.primary }}>Trading Signal:</strong> Enter long position when price breaks above neckline.
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box>
                  <Typography variant="h6" sx={{ color: 'hsl(271, 91%, 75%)', mb: 2, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                    Triangle Patterns
                  </Typography>
                  <Box
                    component="img"
                    src={patternTriangles}
                    alt="Triangle patterns"
                    sx={{
                      width: '100%',
                      borderRadius: 2,
                      mb: 2,
                      border: `1px solid ${theme.palette.divider}`
                    }}
                  />
                  
                  <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 2 }}>
                    <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                      <Chip label="Ascending Triangle" size="small" sx={{ mb: 1, bgcolor: 'rgba(34, 197, 94, 0.2)', color: 'rgb(34, 197, 94)' }} />
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary, mb: 1 }}>
                        Flat resistance line with rising support. Bullish pattern indicating accumulation.
                      </Typography>
                      <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                        <strong>Trading:</strong> Buy on breakout above resistance with volume confirmation.
                      </Typography>
                    </Box>

                    <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                      <Chip label="Descending Triangle" size="small" sx={{ mb: 1, bgcolor: 'rgba(239, 68, 68, 0.2)', color: 'rgb(239, 68, 68)' }} />
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary, mb: 1 }}>
                        Flat support line with declining resistance. Bearish pattern indicating distribution.
                      </Typography>
                      <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                        <strong>Trading:</strong> Sell on breakdown below support with volume confirmation.
                      </Typography>
                    </Box>

                    <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                      <Chip label="Symmetrical Triangle" size="small" sx={{ mb: 1 }} />
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary, mb: 1 }}>
                        Converging trendlines. Neutral pattern - breakout direction determines bias.
                      </Typography>
                      <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                        <strong>Trading:</strong> Trade in direction of breakout. Usually continues prior trend.
                      </Typography>
                    </Box>

                    <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                      <Chip label="Wedges" size="small" sx={{ mb: 1, bgcolor: 'hsla(271, 91%, 65%, 0.2)', color: 'hsl(271, 91%, 75%)' }} />
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary, mb: 1 }}>
                        Similar to triangles but both lines slope in same direction. Rising wedge is bearish, falling wedge is bullish.
                      </Typography>
                      <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                        <strong>Trading:</strong> Counter-intuitive - rising wedge breaks down, falling wedge breaks up.
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box>
                  <Typography variant="h6" sx={{ color: 'hsl(271, 91%, 75%)', mb: 2, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                    Continuation Patterns
                  </Typography>
                  <Box
                    component="img"
                    src={patternFlags}
                    alt="Flag patterns"
                    sx={{
                      width: '100%',
                      borderRadius: 2,
                      mb: 2,
                      border: `1px solid ${theme.palette.divider}`
                    }}
                  />
                  
                  <Box sx={{ '& > *:not(:last-child)': { mb: 2 } }}>
                    <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                      <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>Bull Flag / Bear Flag</Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary, mb: 1 }}>
                        Brief consolidation period in a strong trend. Flagpole represents sharp move, flag is consolidation.
                      </Typography>
                      <Box component="ul" sx={{ pl: 3, '& li': { color: theme.palette.text.secondary, fontSize: '0.75rem', mb: 0.5 } }}>
                        <li>Bull flag: Upward flagpole, slight downward drift in flag</li>
                        <li>Bear flag: Downward flagpole, slight upward drift in flag</li>
                        <li>Usually lasts 1-4 weeks</li>
                        <li>Breakout continues trend in direction of flagpole</li>
                      </Box>
                    </Box>

                    <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                      <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>Pennants</Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary }}>
                        Similar to flags but with converging trendlines (mini symmetrical triangle). 
                        Shorter duration than flags (1-3 weeks).
                      </Typography>
                    </Box>

                    <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                      <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>Rectangles</Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary }}>
                        Price moves sideways between parallel support and resistance. Can be continuation or reversal. 
                        Trade breakout direction with volume confirmation.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </TabPanel>

          {/* INDICATORS TAB */}
          <TabPanel value={tabValue} index={2}>
            <Card
              sx={{
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(145deg, hsl(218, 23%, 9%), hsl(218, 23%, 12%))'
                  : 'linear-gradient(145deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4))',
                backdropFilter: 'blur(20px)',
                border: `1px solid ${theme.palette.mode === 'dark' ? 'hsla(218, 23%, 15%, 0.5)' : 'rgba(255, 255, 255, 0.6)'}`
              }}
            >
              <CardHeader
                title={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Target size={24} />
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: { xs: '1.25rem', sm: '1.5rem' },
                        background: 'linear-gradient(135deg, hsl(271, 91%, 65%), hsl(271, 91%, 75%))',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 'bold'
                      }}
                    >
                      Technical Indicators
                    </Typography>
                  </Box>
                }
              />
              <CardContent sx={{ '& > *:not(:last-child)': { mb: 4 } }}>
                <Box>
                  <Box
                    component="img"
                    src={indicators}
                    alt="Technical indicators"
                    sx={{
                      width: '100%',
                      borderRadius: 2,
                      mb: 3,
                      border: `1px solid ${theme.palette.divider}`
                    }}
                  />
                </Box>

                <Box>
                  <Typography variant="h6" sx={{ color: 'hsl(271, 91%, 75%)', mb: 2, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                    Trend Indicators
                  </Typography>
                  
                  <Box sx={{ '& > *:not(:last-child)': { mb: 2 } }}>
                    <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                      <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>Moving Averages (MA)</Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary, mb: 1.5 }}>
                        Average price over specified period. Smooths out price data to identify trend direction.
                      </Typography>
                      <Box sx={{ '& > *:not(:last-child)': { mb: 1 } }}>
                        <Box>
                          <strong style={{ color: theme.palette.text.primary }}>Simple MA (SMA):</strong>
                          <Typography component="span" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary, ml: 0.5 }}>
                            Equal weight to all prices
                          </Typography>
                        </Box>
                        <Box>
                          <strong style={{ color: theme.palette.text.primary }}>Exponential MA (EMA):</strong>
                          <Typography component="span" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary, ml: 0.5 }}>
                            More weight to recent prices, reacts faster
                          </Typography>
                        </Box>
                        <Box sx={{ mt: 1.5, p: 1.5, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.03)' : 'hsla(0, 0%, 0%, 0.02)', borderRadius: 1 }}>
                          <Typography variant="caption" sx={{ color: theme.palette.text.secondary, display: 'block', mb: 0.5 }}>
                            <strong style={{ color: theme.palette.text.primary }}>Popular Periods:</strong>
                          </Typography>
                          <Typography variant="caption" sx={{ color: theme.palette.text.secondary, whiteSpace: 'pre-line' }}>
                            • 50-day MA: Medium-term trend{'\n'}
                            • 200-day MA: Long-term trend{'\n'}
                            • Golden Cross: 50 MA crosses above 200 MA (bullish){'\n'}
                            • Death Cross: 50 MA crosses below 200 MA (bearish)
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                      <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>MACD (Moving Average Convergence Divergence)</Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary, mb: 1.5 }}>
                        Shows relationship between two EMAs. Consists of MACD line, signal line, and histogram.
                      </Typography>
                      <Box component="ul" sx={{ pl: 3, '& li': { color: theme.palette.text.secondary, fontSize: '0.875rem', mb: 0.5 } }}>
                        <li>MACD line crosses above signal line: Bullish signal</li>
                        <li>MACD line crosses below signal line: Bearish signal</li>
                        <li>Histogram shows momentum strength</li>
                        <li>Divergence between MACD and price signals potential reversal</li>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box>
                  <Typography variant="h6" sx={{ color: 'hsl(271, 91%, 75%)', mb: 2, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                    Momentum Indicators
                  </Typography>
                  
                  <Box sx={{ '& > *:not(:last-child)': { mb: 2 } }}>
                    <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                      <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>RSI (Relative Strength Index)</Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary, mb: 1.5 }}>
                        Measures speed and magnitude of price changes. Oscillates between 0-100.
                      </Typography>
                      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 1.5 }}>
                        <Box sx={{ p: 1.5, bgcolor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: 1 }}>
                          <strong style={{ color: 'rgb(239, 68, 68)' }}>Overbought:</strong>
                          <Typography variant="caption" sx={{ display: 'block', color: theme.palette.text.secondary, mt: 0.5 }}>
                            RSI above 70. Potential sell signal.
                          </Typography>
                        </Box>
                        <Box sx={{ p: 1.5, bgcolor: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.2)', borderRadius: 1 }}>
                          <strong style={{ color: 'rgb(34, 197, 94)' }}>Oversold:</strong>
                          <Typography variant="caption" sx={{ display: 'block', color: theme.palette.text.secondary, mt: 0.5 }}>
                            RSI below 30. Potential buy signal.
                          </Typography>
                        </Box>
                      </Box>
                      <Typography variant="caption" sx={{ color: theme.palette.text.secondary, display: 'block', mt: 1.5 }}>
                        <strong style={{ color: theme.palette.text.primary }}>Pro Tip:</strong> In strong trends, RSI can stay overbought/oversold 
                        for extended periods. Use with other indicators.
                      </Typography>
                    </Box>

                    <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                      <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>Stochastic Oscillator</Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary, mb: 1 }}>
                        Compares closing price to price range over period. Two lines: %K (fast) and %D (slow).
                      </Typography>
                      <Box component="ul" sx={{ pl: 3, '& li': { color: theme.palette.text.secondary, fontSize: '0.75rem', mb: 0.5 } }}>
                        <li>Above 80: Overbought</li>
                        <li>Below 20: Oversold</li>
                        <li>%K crossing above %D: Buy signal</li>
                        <li>%K crossing below %D: Sell signal</li>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box>
                  <Typography variant="h6" sx={{ color: 'hsl(271, 91%, 75%)', mb: 2, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                    Volatility Indicators
                  </Typography>
                  
                  <Box sx={{ '& > *:not(:last-child)': { mb: 2 } }}>
                    <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                      <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>Bollinger Bands</Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary, mb: 1.5 }}>
                        Three lines: middle (20-day SMA), upper (+2 std dev), lower (-2 std dev).
                      </Typography>
                      <Box component="ul" sx={{ pl: 3, '& li': { color: theme.palette.text.secondary, fontSize: '0.875rem', mb: 0.5 } }}>
                        <li>Price touching upper band: Overbought, potential reversal</li>
                        <li>Price touching lower band: Oversold, potential reversal</li>
                        <li>Bands squeeze: Low volatility, breakout coming</li>
                        <li>Bands expand: High volatility, strong trend</li>
                        <li>"Walking the bands": Strong trend continues along upper/lower band</li>
                      </Box>
                    </Box>

                    <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                      <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>ATR (Average True Range)</Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary }}>
                        Measures market volatility. Doesn't indicate direction, only volatility level. 
                        Higher ATR = higher volatility. Useful for setting stop-loss levels.
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box>
                  <Typography variant="h6" sx={{ color: 'hsl(271, 91%, 75%)', mb: 2, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                    Volume Indicators
                  </Typography>
                  
                  <Box sx={{ '& > *:not(:last-child)': { mb: 2 } }}>
                    <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                      <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>Volume</Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary, mb: 1 }}>
                        Number of shares/coins traded. Confirms trend strength.
                      </Typography>
                      <Box component="ul" sx={{ pl: 3, '& li': { color: theme.palette.text.secondary, fontSize: '0.75rem', mb: 0.5 } }}>
                        <li>Rising price + rising volume: Strong uptrend</li>
                        <li>Rising price + falling volume: Weakening uptrend</li>
                        <li>Breakout + high volume: Valid breakout</li>
                        <li>Breakout + low volume: False breakout (trap)</li>
                      </Box>
                    </Box>

                    <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                      <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>OBV (On-Balance Volume)</Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary }}>
                        Cumulative volume indicator. Adds volume on up days, subtracts on down days. 
                        Divergence between OBV and price can signal reversal.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </TabPanel>

          {/* STRATEGIES TAB */}
          <TabPanel value={tabValue} index={3}>
            <Card
              sx={{
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(145deg, hsl(218, 23%, 9%), hsl(218, 23%, 12%))'
                  : 'linear-gradient(145deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4))',
                backdropFilter: 'blur(20px)',
                border: `1px solid ${theme.palette.mode === 'dark' ? 'hsla(218, 23%, 15%, 0.5)' : 'rgba(255, 255, 255, 0.6)'}`
              }}
            >
              <CardHeader
                title={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Lightbulb size={24} />
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: { xs: '1.25rem', sm: '1.5rem' },
                        background: 'linear-gradient(135deg, hsl(271, 91%, 65%), hsl(271, 91%, 75%))',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 'bold'
                      }}
                    >
                      Trading Strategies
                    </Typography>
                  </Box>
                }
              />
              <CardContent sx={{ '& > *:not(:last-child)': { mb: 4 } }}>
                <Box>
                  <Typography variant="h6" sx={{ color: 'hsl(271, 91%, 75%)', mb: 2, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                    Day Trading
                  </Typography>
                  <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2, '& > *:not(:last-child)': { mb: 1.5 } }}>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      Opening and closing positions within the same day. No overnight risk.
                    </Typography>
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 2 }}>
                      <Box sx={{ p: 1.5, bgcolor: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.2)', borderRadius: 1 }}>
                        <Typography variant="subtitle2" sx={{ color: 'rgb(34, 197, 94)', mb: 1, fontWeight: 600 }}>Pros</Typography>
                        <Box component="ul" sx={{ pl: 2, m: 0, '& li': { fontSize: '0.75rem', color: theme.palette.text.secondary, mb: 0.5 } }}>
                          <li>• No overnight risk</li>
                          <li>• Quick profits possible</li>
                          <li>• Many opportunities daily</li>
                          <li>• Leverage available</li>
                        </Box>
                      </Box>
                      <Box sx={{ p: 1.5, bgcolor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: 1 }}>
                        <Typography variant="subtitle2" sx={{ color: 'rgb(239, 68, 68)', mb: 1, fontWeight: 600 }}>Cons</Typography>
                        <Box component="ul" sx={{ pl: 2, m: 0, '& li': { fontSize: '0.75rem', color: theme.palette.text.secondary, mb: 0.5 } }}>
                          <li>• Requires full-time attention</li>
                          <li>• High stress</li>
                          <li>• Higher trading fees</li>
                          <li>• Requires quick decisions</li>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ p: 1.5, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.03)' : 'hsla(0, 0%, 0%, 0.02)', borderRadius: 1 }}>
                      <Typography variant="body2" fontWeight={600} sx={{ mb: 0.5 }}>Best Indicators:</Typography>
                      <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                        5/15-minute charts, MACD, RSI, Volume, EMA (9, 20, 50)
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box>
                  <Typography variant="h6" sx={{ color: 'hsl(271, 91%, 75%)', mb: 2, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                    Swing Trading
                  </Typography>
                  <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2, '& > *:not(:last-child)': { mb: 1.5 } }}>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      Holding positions for several days to weeks. Capturing larger price moves.
                    </Typography>
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 2 }}>
                      <Box sx={{ p: 1.5, bgcolor: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.2)', borderRadius: 1 }}>
                        <Typography variant="subtitle2" sx={{ color: 'rgb(34, 197, 94)', mb: 1, fontWeight: 600 }}>Pros</Typography>
                        <Box component="ul" sx={{ pl: 2, m: 0, '& li': { fontSize: '0.75rem', color: theme.palette.text.secondary, mb: 0.5 } }}>
                          <li>• Part-time commitment</li>
                          <li>• Larger profit potential per trade</li>
                          <li>• Less stressful</li>
                          <li>• Lower trading fees</li>
                        </Box>
                      </Box>
                      <Box sx={{ p: 1.5, bgcolor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: 1 }}>
                        <Typography variant="subtitle2" sx={{ color: 'rgb(239, 68, 68)', mb: 1, fontWeight: 600 }}>Cons</Typography>
                        <Box component="ul" sx={{ pl: 2, m: 0, '& li': { fontSize: '0.75rem', color: theme.palette.text.secondary, mb: 0.5 } }}>
                          <li>• Overnight and weekend risk</li>
                          <li>• Requires patience</li>
                          <li>• Gap risk</li>
                          <li>• Fewer trading opportunities</li>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ p: 1.5, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.03)' : 'hsla(0, 0%, 0%, 0.02)', borderRadius: 1 }}>
                      <Typography variant="body2" fontWeight={600} sx={{ mb: 0.5 }}>Best Indicators:</Typography>
                      <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                        Daily/4-hour charts, MACD, RSI, Fibonacci retracements, Support/Resistance, MA (50, 200)
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box>
                  <Typography variant="h6" sx={{ color: 'hsl(271, 91%, 75%)', mb: 2, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                    Position Trading
                  </Typography>
                  <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2, '& > *:not(:last-child)': { mb: 1.5 } }}>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      Long-term holding for weeks to months. Focus on major trends.
                    </Typography>
                    <Box sx={{ p: 1.5, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.03)' : 'hsla(0, 0%, 0%, 0.02)', borderRadius: 1 }}>
                      <Typography variant="body2" fontWeight={600} sx={{ mb: 0.5 }}>Best Indicators:</Typography>
                      <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                        Weekly/Monthly charts, MA (50, 100, 200), Fundamental analysis, Market sentiment
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box>
                  <Typography variant="h6" sx={{ color: 'hsl(271, 91%, 75%)', mb: 2, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                    Scalping
                  </Typography>
                  <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2, '& > *:not(:last-child)': { mb: 1.5 } }}>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                      Very short-term trades (seconds to minutes). Multiple trades daily for small profits.
                    </Typography>
                    <Box sx={{ p: 1.5, bgcolor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: 1 }}>
                      <Typography variant="body2" sx={{ color: 'rgb(239, 68, 68)', mb: 0.5, fontWeight: 600 }}>
                        ⚠️ Not Recommended for Beginners
                      </Typography>
                      <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                        Requires extensive experience, lightning-fast decisions, and can lead to significant losses 
                        due to fees and emotional trading.
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box>
                  <Typography variant="h6" sx={{ color: 'hsl(271, 91%, 75%)', mb: 2, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                    Popular Trading Systems
                  </Typography>
                  
                  <Box sx={{ '& > *:not(:last-child)': { mb: 2 } }}>
                    <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                      <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>Trend Following</Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary, mb: 1 }}>
                        "The trend is your friend." Buy in uptrends, sell in downtrends.
                      </Typography>
                      <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                        <strong>Entry:</strong> Buy when price breaks resistance with volume<br/>
                        <strong>Exit:</strong> Sell when trend shows weakness or reversal signals
                      </Typography>
                    </Box>

                    <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                      <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>Breakout Trading</Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary, mb: 1 }}>
                        Enter when price breaks key support/resistance levels.
                      </Typography>
                      <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                        Look for consolidation periods, then trade the breakout direction with strong volume confirmation.
                      </Typography>
                    </Box>

                    <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                      <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>Range Trading</Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary, mb: 1 }}>
                        Buy at support, sell at resistance in sideways markets.
                      </Typography>
                      <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                        <strong>Best for:</strong> Stable, non-trending markets. Use RSI and Stochastic oscillators.
                      </Typography>
                    </Box>

                    <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                      <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>Reversal Trading</Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary, mb: 1 }}>
                        Identify trend exhaustion and trade the reversal.
                      </Typography>
                      <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                        <strong>Signals:</strong> Divergences, reversal candlestick patterns, extreme RSI readings. 
                        Higher risk but potentially higher reward.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </TabPanel>

          {/* RISK MANAGEMENT TAB */}
          <TabPanel value={tabValue} index={4}>
            <Card
              sx={{
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(145deg, hsl(218, 23%, 9%), hsl(218, 23%, 12%))'
                  : 'linear-gradient(145deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4))',
                backdropFilter: 'blur(20px)',
                border: `1px solid ${theme.palette.mode === 'dark' ? 'hsla(218, 23%, 15%, 0.5)' : 'rgba(255, 255, 255, 0.6)'}`
              }}
            >
              <CardHeader
                title={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Shield size={24} />
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: { xs: '1.25rem', sm: '1.5rem' },
                        background: 'linear-gradient(135deg, hsl(271, 91%, 65%), hsl(271, 91%, 75%))',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 'bold'
                      }}
                    >
                      Risk Management
                    </Typography>
                  </Box>
                }
              />
              <CardContent sx={{ '& > *:not(:last-child)': { mb: 4 } }}>
                <Box sx={{ p: 2, bgcolor: 'rgba(239, 68, 68, 0.1)', border: '2px solid rgba(239, 68, 68, 0.3)', borderRadius: 2 }}>
                  <Typography variant="h6" sx={{ color: 'rgb(239, 68, 68)', mb: 1.5, fontWeight: 'bold' }}>
                    ⚠️ Most Important Section
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                    Risk management is MORE important than finding good trades. Poor risk management destroys 
                    accounts even with a 70% win rate. Master this before trading real money.
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="h6" sx={{ color: 'hsl(271, 91%, 75%)', mb: 2, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                    The 1-2% Rule
                  </Typography>
                  <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 1.5 }}>
                      Never risk more than 1-2% of your total account on a single trade.
                    </Typography>
                    <Box sx={{ p: 1.5, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.03)' : 'hsla(0, 0%, 0%, 0.02)', borderRadius: 1, mb: 1.5 }}>
                      <Typography variant="body2" fontWeight={600} sx={{ mb: 1 }}>Example with $10,000 account:</Typography>
                      <Box component="ul" sx={{ pl: 3, m: 0, '& li': { fontSize: '0.75rem', color: theme.palette.text.secondary, mb: 0.5 } }}>
                        <li>• 1% risk = $100 maximum loss per trade</li>
                        <li>• 2% risk = $200 maximum loss per trade</li>
                        <li>• 10 consecutive losses at 2% = only 18% account drawdown</li>
                        <li>• 10 consecutive losses at 10% = 65% account drawdown (hard to recover)</li>
                      </Box>
                    </Box>
                    <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary }}>
                      <strong style={{ color: theme.palette.text.primary }}>Why it works:</strong> Protects your capital during losing streaks. 
                      Even professional traders have losing streaks. This keeps you in the game.
                    </Typography>
                  </Box>
                </Box>

                <Box>
                  <Typography variant="h6" sx={{ color: 'hsl(271, 91%, 75%)', mb: 2, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                    Stop-Loss Orders
                  </Typography>
                  <Box sx={{ '& > *:not(:last-child)': { mb: 2 } }}>
                    <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                      <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>What is a Stop-Loss?</Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary, mb: 1.5 }}>
                        Automatic order that sells your position when price reaches a predetermined level. 
                        Your emergency exit.
                      </Typography>
                      <Box sx={{ p: 1.5, bgcolor: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.2)', borderRadius: 1 }}>
                        <Typography variant="body2" sx={{ color: 'rgb(34, 197, 94)', mb: 0.5, fontWeight: 600 }}>
                          Golden Rule: ALWAYS use stop-losses
                        </Typography>
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                          Never enter a trade without knowing your exit point. Hope is not a strategy.
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                      <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1.5 }}>Where to Place Stop-Loss</Typography>
                      <Box sx={{ '& > *:not(:last-child)': { mb: 1.5 } }}>
                        <Box>
                          <strong style={{ color: theme.palette.text.primary }}>Below Support (Long positions):</strong>
                          <Typography variant="caption" sx={{ display: 'block', color: theme.palette.text.secondary, mt: 0.5 }}>
                            Place 1-2% below key support level. If support breaks, trade idea is invalidated.
                          </Typography>
                        </Box>
                        <Box>
                          <strong style={{ color: theme.palette.text.primary }}>Above Resistance (Short positions):</strong>
                          <Typography variant="caption" sx={{ display: 'block', color: theme.palette.text.secondary, mt: 0.5 }}>
                            Place 1-2% above key resistance. If resistance breaks, trade idea is invalidated.
                          </Typography>
                        </Box>
                        <Box>
                          <strong style={{ color: theme.palette.text.primary }}>ATR Method:</strong>
                          <Typography variant="caption" sx={{ display: 'block', color: theme.palette.text.secondary, mt: 0.5 }}>
                            Place stop at 2x ATR distance. Accounts for volatility - wider stops for volatile assets.
                          </Typography>
                        </Box>
                        <Box>
                          <strong style={{ color: theme.palette.text.primary }}>Percentage Method:</strong>
                          <Typography variant="caption" sx={{ display: 'block', color: theme.palette.text.secondary, mt: 0.5 }}>
                            Fixed percentage below entry (e.g., 5%). Simple but doesn't account for market structure.
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                      <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>Trailing Stop-Loss</Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary }}>
                        Moves up with price, locking in profits. If price goes up 10%, trailing stop moves up 10%. 
                        Protects profits while letting winners run.
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box>
                  <Typography variant="h6" sx={{ color: 'hsl(271, 91%, 75%)', mb: 2, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                    Position Sizing
                  </Typography>
                  <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                    <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary, mb: 1.5 }}>
                      How much to buy based on your risk tolerance and stop-loss distance.
                    </Typography>
                    <Box sx={{ p: 1.5, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.03)' : 'hsla(0, 0%, 0%, 0.02)', borderRadius: 1, mb: 1.5 }}>
                      <Typography variant="body2" fontWeight={600} sx={{ mb: 1 }}>Formula:</Typography>
                      <Typography variant="caption" sx={{ fontFamily: 'monospace', color: theme.palette.text.secondary, display: 'block', mb: 1 }}>
                        Position Size = (Account Size × Risk %) ÷ (Entry Price - Stop Price)
                      </Typography>
                      <Box sx={{ mt: 1.5, p: 1, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.02)' : 'hsla(0, 0%, 0%, 0.015)', borderRadius: 0.5 }}>
                        <Typography variant="caption" fontWeight={600} sx={{ display: 'block', mb: 1 }}>Example:</Typography>
                        <Box component="ul" sx={{ pl: 2, m: 0, '& li': { fontSize: '0.75rem', color: theme.palette.text.secondary, mb: 0.5 } }}>
                          <li>• Account: $10,000</li>
                          <li>• Risk: 2% ($200)</li>
                          <li>• Entry: $50</li>
                          <li>• Stop-loss: $48 (4% below entry)</li>
                          <li>• Position size: $200 ÷ ($50 - $48) = $200 ÷ $2 = 100 shares</li>
                          <li>• Total investment: $5,000 (50% of account)</li>
                        </Box>
                      </Box>
                    </Box>
                    <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                      This ensures if stop is hit, you only lose your risk amount ($200), regardless of position size.
                    </Typography>
                  </Box>
                </Box>

                <Box>
                  <Typography variant="h6" sx={{ color: 'hsl(271, 91%, 75%)', mb: 2, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                    Risk-Reward Ratio
                  </Typography>
                  <Box sx={{ '& > *:not(:last-child)': { mb: 2 } }}>
                    <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary, mb: 1.5 }}>
                        Ratio of potential profit to potential loss. Aim for minimum 1:2 (risk $1 to make $2).
                      </Typography>
                      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 2 }}>
                        <Box sx={{ p: 1.5, bgcolor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: 1 }}>
                          <Typography variant="body2" sx={{ color: 'rgb(239, 68, 68)', mb: 1, fontWeight: 600 }}>Bad Trade</Typography>
                          <Typography variant="caption" sx={{ color: theme.palette.text.secondary, whiteSpace: 'pre-line' }}>
                            Risk: $100{'\n'}
                            Potential Profit: $80{'\n'}
                            Ratio: 1:0.8{'\n'}
                            Need 56% win rate to break even
                          </Typography>
                        </Box>
                        <Box sx={{ p: 1.5, bgcolor: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.2)', borderRadius: 1 }}>
                          <Typography variant="body2" sx={{ color: 'rgb(34, 197, 94)', mb: 1, fontWeight: 600 }}>Good Trade</Typography>
                          <Typography variant="caption" sx={{ color: theme.palette.text.secondary, whiteSpace: 'pre-line' }}>
                            Risk: $100{'\n'}
                            Potential Profit: $300{'\n'}
                            Ratio: 1:3{'\n'}
                            Need only 25% win rate to break even
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                      <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>Why High R:R Matters</Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary, mb: 1 }}>
                        With 1:3 risk-reward ratio and 40% win rate:
                      </Typography>
                      <Box sx={{ p: 1.5, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.03)' : 'hsla(0, 0%, 0%, 0.02)', borderRadius: 1 }}>
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary, whiteSpace: 'pre-line' }}>
                          • 10 trades, 4 wins, 6 losses{'\n'}
                          • Wins: 4 × $300 = $1,200{'\n'}
                          • Losses: 6 × $100 = -$600{'\n'}
                          • Net profit: $600 (6% return on $10k account)
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box>
                  <Typography variant="h6" sx={{ color: 'hsl(271, 91%, 75%)', mb: 2, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                    Diversification
                  </Typography>
                  <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                    <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary, mb: 1.5 }}>
                      Don't put all eggs in one basket. Spread risk across multiple assets.
                    </Typography>
                    <Box component="ul" sx={{ pl: 3, '& li': { color: theme.palette.text.secondary, fontSize: '0.875rem', mb: 1 } }}>
                      <li>Don't hold more than 5-7 positions simultaneously</li>
                      <li>Don't invest more than 20% in any single crypto</li>
                      <li>Mix large caps (BTC, ETH) with smaller altcoins</li>
                      <li>Consider different sectors (DeFi, Layer 1, NFTs, etc.)</li>
                    </Box>
                  </Box>
                </Box>

                <Box>
                  <Typography variant="h6" sx={{ color: 'hsl(271, 91%, 75%)', mb: 2, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                    Common Risk Management Mistakes
                  </Typography>
                  <Box sx={{ display: 'grid', gap: 1.5 }}>
                    <Box sx={{ p: 2, bgcolor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: 2 }}>
                      <Typography variant="body2" sx={{ color: 'rgb(239, 68, 68)', mb: 0.5, fontWeight: 600 }}>
                        Moving Stop-Loss Further Away
                      </Typography>
                      <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                        When price approaches your stop, moving it further to "give the trade more room" almost always 
                        results in larger losses. Honor your original stop.
                      </Typography>
                    </Box>
                    <Box sx={{ p: 2, bgcolor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: 2 }}>
                      <Typography variant="body2" sx={{ color: 'rgb(239, 68, 68)', mb: 0.5, fontWeight: 600 }}>
                        Revenge Trading
                      </Typography>
                      <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                        After a loss, immediately jumping into another trade to "make it back." Leads to emotional 
                        decisions and usually more losses. Take a break instead.
                      </Typography>
                    </Box>
                    <Box sx={{ p: 2, bgcolor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: 2 }}>
                      <Typography variant="body2" sx={{ color: 'rgb(239, 68, 68)', mb: 0.5, fontWeight: 600 }}>
                        Risking Too Much on "Sure Things"
                      </Typography>
                      <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                        There are no sure things in trading. Even 90% probability setups fail 10% of the time. 
                        Stick to 1-2% rule always.
                      </Typography>
                    </Box>
                    <Box sx={{ p: 2, bgcolor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: 2 }}>
                      <Typography variant="body2" sx={{ color: 'rgb(239, 68, 68)', mb: 0.5, fontWeight: 600 }}>
                        Not Taking Profits
                      </Typography>
                      <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                        Greed causes traders to hold winners too long. Set profit targets before entering. 
                        Consider taking partial profits at key levels.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </TabPanel>

          {/* PSYCHOLOGY TAB */}
          <TabPanel value={tabValue} index={5}>
            <Card
              sx={{
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(145deg, hsl(218, 23%, 9%), hsl(218, 23%, 12%))'
                  : 'linear-gradient(145deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4))',
                backdropFilter: 'blur(20px)',
                border: `1px solid ${theme.palette.mode === 'dark' ? 'hsla(218, 23%, 15%, 0.5)' : 'rgba(255, 255, 255, 0.6)'}`
              }}
            >
              <CardHeader
                title={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Brain size={24} />
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: { xs: '1.25rem', sm: '1.5rem' },
                        background: 'linear-gradient(135deg, hsl(271, 91%, 65%), hsl(271, 91%, 75%))',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: 'bold'
                      }}
                    >
                      Trading Psychology
                    </Typography>
                  </Box>
                }
              />
              <CardContent sx={{ '& > *:not(:last-child)': { mb: 4 } }}>
                <Box sx={{ p: 2, bgcolor: 'hsla(271, 91%, 65%, 0.1)', border: '2px solid hsla(271, 91%, 65%, 0.3)', borderRadius: 2 }}>
                  <Typography variant="h6" sx={{ color: 'hsl(271, 91%, 75%)', mb: 1.5, fontWeight: 'bold' }}>
                    Psychology is 80% of Trading Success
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                    You can have the best strategy in the world, but without emotional control and discipline, 
                    you'll still lose money. Mastering your mind is harder than mastering charts.
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="h6" sx={{ color: 'hsl(271, 91%, 75%)', mb: 2, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                    The Fear and Greed Cycle
                  </Typography>
                  <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2, '& > *:not(:last-child)': { mb: 1.5 } }}>
                    <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary, mb: 1.5 }}>
                      Markets are driven by two primary emotions: fear and greed. Understanding this cycle 
                      helps you trade against the herd.
                    </Typography>
                    <Box sx={{ display: 'grid', gap: 1 }}>
                      <Box sx={{ p: 1.5, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.03)' : 'hsla(0, 0%, 0%, 0.02)', borderRadius: 1 }}>
                        <Typography variant="body2" fontWeight={600} sx={{ mb: 0.5 }}>1. Optimism → Excitement (Greed)</Typography>
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                          Prices rising, everyone's making money, FOMO kicks in. This is when retail traders enter.
                        </Typography>
                      </Box>
                      <Box sx={{ p: 1.5, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.03)' : 'hsla(0, 0%, 0%, 0.02)', borderRadius: 1 }}>
                        <Typography variant="body2" fontWeight={600} sx={{ mb: 0.5 }}>2. Euphoria (Peak Greed)</Typography>
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                          "This time is different!" Everyone's a genius. Smart money starts selling.
                        </Typography>
                      </Box>
                      <Box sx={{ p: 1.5, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.03)' : 'hsla(0, 0%, 0%, 0.02)', borderRadius: 1 }}>
                        <Typography variant="body2" fontWeight={600} sx={{ mb: 0.5 }}>3. Anxiety → Denial (Fear Begins)</Typography>
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                          Small dips appear. "It's just a correction, buy the dip!" Denial phase.
                        </Typography>
                      </Box>
                      <Box sx={{ p: 1.5, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.03)' : 'hsla(0, 0%, 0%, 0.02)', borderRadius: 1 }}>
                        <Typography variant="body2" fontWeight={600} sx={{ mb: 0.5 }}>4. Panic → Capitulation (Peak Fear)</Typography>
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                          Everyone sells at once. "Crypto is dead!" Smart money starts buying.
                        </Typography>
                      </Box>
                      <Box sx={{ p: 1.5, bgcolor: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.2)', borderRadius: 1 }}>
                        <Typography variant="body2" sx={{ color: 'rgb(34, 197, 94)', mb: 0.5, fontWeight: 600 }}>Your Edge</Typography>
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                          Be fearful when others are greedy, and greedy when others are fearful. 
                          - Warren Buffett
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box>
                  <Typography variant="h6" sx={{ color: 'hsl(271, 91%, 75%)', mb: 2, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                    Common Psychological Pitfalls
                  </Typography>
                  <Box sx={{ '& > *:not(:last-child)': { mb: 2 } }}>
                    <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                      <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>FOMO (Fear of Missing Out)</Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary, mb: 1 }}>
                        Jumping into trades because "everyone else is making money."
                      </Typography>
                      <Box sx={{ p: 1.5, bgcolor: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.2)', borderRadius: 1 }}>
                        <Typography variant="caption" sx={{ color: 'rgb(34, 197, 94)', fontWeight: 600, display: 'block', mb: 0.5 }}>
                          Solution:
                        </Typography>
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                          Wait for your setup. There will ALWAYS be another opportunity. 
                          Missing a trade is better than forcing a bad trade.
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                      <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>Overtrading</Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary, mb: 1 }}>
                        Trading too frequently out of boredom or trying to "make it back."
                      </Typography>
                      <Box sx={{ p: 1.5, bgcolor: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.2)', borderRadius: 1 }}>
                        <Typography variant="caption" sx={{ color: 'rgb(34, 197, 94)', fontWeight: 600, display: 'block', mb: 0.5 }}>
                          Solution:
                        </Typography>
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                          Quality over quantity. Set minimum criteria for trades. If setup doesn't exist, don't trade. 
                          Being flat (no position) is a position.
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                      <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>Confirmation Bias</Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary, mb: 1 }}>
                        Only seeing information that confirms your existing belief about a trade.
                      </Typography>
                      <Box sx={{ p: 1.5, bgcolor: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.2)', borderRadius: 1 }}>
                        <Typography variant="caption" sx={{ color: 'rgb(34, 197, 94)', fontWeight: 600, display: 'block', mb: 0.5 }}>
                          Solution:
                        </Typography>
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                          Actively seek opposing viewpoints. Ask "What if I'm wrong?" Play devil's advocate 
                          with your own trades.
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                      <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>Loss Aversion</Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary, mb: 1 }}>
                        Holding losing positions hoping they'll "come back," but cutting winners too early.
                      </Typography>
                      <Box sx={{ p: 1.5, bgcolor: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.2)', borderRadius: 1 }}>
                        <Typography variant="caption" sx={{ color: 'rgb(34, 197, 94)', fontWeight: 600, display: 'block', mb: 0.5 }}>
                          Solution:
                        </Typography>
                        <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                          "Cut losers short, let winners run." Use stop-losses religiously. 
                          Small losses are part of the game; protect winners.
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box>
                  <Typography variant="h6" sx={{ color: 'hsl(271, 91%, 75%)', mb: 2, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                    Building Mental Discipline
                  </Typography>
                  <Box sx={{ '& > *:not(:last-child)': { mb: 2 } }}>
                    <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                      <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1.5 }}>Create a Trading Plan</Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary, mb: 1 }}>
                        Written rules you follow every time. No exceptions.
                      </Typography>
                      <Box component="ul" sx={{ pl: 3, ml: 2, '& li': { color: theme.palette.text.secondary, fontSize: '0.75rem', mb: 0.5 } }}>
                        <li>Entry criteria (what makes a valid setup)</li>
                        <li>Position sizing rules</li>
                        <li>Stop-loss placement</li>
                        <li>Profit targets</li>
                        <li>Maximum daily loss limit</li>
                        <li>Maximum number of trades per day</li>
                        <li>What to do after big wins/losses</li>
                      </Box>
                    </Box>

                    <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                      <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1.5 }}>Keep a Trading Journal</Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary, mb: 1 }}>
                        Record every trade with:
                      </Typography>
                      <Box component="ul" sx={{ pl: 3, ml: 2, '& li': { color: theme.palette.text.secondary, fontSize: '0.75rem', mb: 0.5 } }}>
                        <li>Entry and exit prices</li>
                        <li>Why you entered (setup, indicators)</li>
                        <li>Your emotional state before/during trade</li>
                        <li>What went right/wrong</li>
                        <li>Lessons learned</li>
                      </Box>
                      <Typography variant="caption" sx={{ color: theme.palette.text.secondary, display: 'block', mt: 1 }}>
                        Review weekly to identify patterns in your behavior.
                      </Typography>
                    </Box>

                    <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                      <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1.5 }}>The 24-Hour Rule</Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary }}>
                        After a big win or loss, don't trade for 24 hours. Emotions are heightened, 
                        decisions will be poor. Take a break, analyze what happened, then return with fresh mind.
                      </Typography>
                    </Box>

                    <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                      <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1.5 }}>Accept Losses as Business Expenses</Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary }}>
                        Losses are inevitable and necessary. They're the cost of doing business as a trader. 
                        Even the best traders lose 40-50% of trades. Focus on overall profitability, 
                        not individual trades.
                      </Typography>
                    </Box>

                    <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2 }}>
                      <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1.5 }}>Meditate and Exercise</Typography>
                      <Typography variant="body2" sx={{ fontSize: '0.875rem', color: theme.palette.text.secondary }}>
                        Physical and mental health directly impact trading performance. Clear mind = better decisions. 
                        Take breaks, exercise regularly, get proper sleep.
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box>
                  <Typography variant="h6" sx={{ color: 'hsl(271, 91%, 75%)', mb: 2, fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                    The Reality Check
                  </Typography>
                  <Box sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'hsla(0, 0%, 100%, 0.05)' : 'hsla(0, 0%, 0%, 0.03)', borderRadius: 2, '& > *:not(:last-child)': { mb: 1.5 } }}>
                    <Box sx={{ p: 1.5, bgcolor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: 1 }}>
                      <Typography variant="subtitle2" sx={{ color: 'rgb(239, 68, 68)', mb: 1, fontWeight: 600 }}>
                        95% of Traders Lose Money
                      </Typography>
                      <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                        Not because markets are rigged or strategies don't work. Because they can't control 
                        their emotions, follow their plan, or maintain discipline.
                      </Typography>
                    </Box>

                    <Box sx={{ p: 1.5, bgcolor: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.2)', borderRadius: 1 }}>
                      <Typography variant="subtitle2" sx={{ color: 'rgb(34, 197, 94)', mb: 1, fontWeight: 600 }}>
                        The 5% Who Succeed
                      </Typography>
                      <Typography variant="caption" sx={{ color: theme.palette.text.secondary, display: 'block', mb: 1 }}>
                        They're not smarter. They simply:
                      </Typography>
                      <Box component="ul" sx={{ pl: 2, m: 0, '& li': { fontSize: '0.75rem', color: theme.palette.text.secondary, mb: 0.5 } }}>
                        <li>Follow their trading plan without exception</li>
                        <li>Accept losses quickly</li>
                        <li>Don't trade out of emotion</li>
                        <li>Continuously learn and adapt</li>
                        <li>Treat trading as a business, not gambling</li>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </TabPanel>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 15 },
          background: theme.palette.mode === 'dark'
            ? 'linear-gradient(to bottom right, hsla(271, 91%, 65%, 0.1), transparent, hsla(271, 81%, 56%, 0.1))'
            : 'linear-gradient(to bottom right, hsla(271, 91%, 65%, 0.1), transparent, hsla(271, 81%, 56%, 0.1))'
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, hsl(271, 91%, 65%), hsl(271, 91%, 75%))',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 3
            }}
          >
            Ready to Practice?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
              color: theme.palette.text.secondary
            }}
          >
            Apply what you've learned with risk-free virtual trading on CRYPTMASTER
          </Typography>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default Learn;
