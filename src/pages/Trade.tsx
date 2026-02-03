import { useState, useMemo, useEffect } from 'react';
import {
  Container,
  Typography,
  TextField,
  Card,
  CardContent,
  Box,
  Chip,
  InputAdornment,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Search as SearchIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon
} from '@mui/icons-material';
import Navbar from '@/components/Navbar';
import TradeModal from '@/components/TradeModal';
import { getCoins } from '@/api/GetCoinsDetails';
import { formatCurrency, formatMarketCap } from '@/utils/Common';
import { ITradeCoin } from '@/interfaces/CoinInterface';
import { useToast } from "@/hooks/use-toast"; // keep if you want
import { useNavigate, useLocation } from "react-router-dom";
import { tokenStore } from '@/stores/tokenstore';


const Trade = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCoin, setSelectedCoin] = useState<typeof cryptoData[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [focused, setFocused] = useState(false)
  const [cryptoData, setCryptoData] = useState<ITradeCoin[] | any | null >(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    const accessToken = tokenStore().getToken();

    const fetchCoins = async () => {
      try {
        const coins = await getCoins(accessToken);
        setCryptoData(coins);

        // 🔍 Check if ?coin=XYZ is present in the URL
        const params = new URLSearchParams(location.search);
        const coinSymbol = params.get("coin");

        if (coinSymbol) {
          const targetCoin = coins.find(
            (c: any) => c.symbol.toLowerCase() === coinSymbol.toLowerCase()
          );

          if (targetCoin) {
            // ✅ Use your existing modal open function
            handleCoinClick(targetCoin);
          }
        }
      } catch (error) {
        console.error("Error fetching coins:", error);
        toast({
          title: "Error fetching coins",
          description: "Something went wrong.",
          variant: "destructive",
        });
      }
    };

    if (accessToken) fetchCoins();
  }, [location.search]);




  const filteredCoins = useMemo(() => {
    return (cryptoData || []).filter(coin =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [cryptoData, searchTerm]);



  const handleCoinClick = (coin: typeof cryptoData[0]) => {
    setSelectedCoin(coin);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate("/trade", { replace: true });
  };
  return (
    <Box sx={{
      minHeight: '100vh'
    }}>
      {isModalOpen ? <></> : <Navbar />}

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
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
              Trade Cryptocurrencies
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
              Discover and trade your favorite digital assets in our premium virtual environment


            </Typography>
          </Container>
        </Box>

        {/* Search Bar */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 6,
            width: "100%",
          }}
        >
          <TextField
            variant="outlined"
            placeholder={
              focused
                ? "Search cryptocurrencies by name or symbol..."
                : "Search here"
            }
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "primary.main", fontSize: "1.4rem" }} />
                </InputAdornment>
              ),
              sx: {
                height: { xs: 48, sm: 54 },
                fontSize: { xs: "14px" },
                width: { xs: "90vw", sm: "70vw", md: "50vw", lg: "40vw" }, // default half width
                transition: "all 0.3s ease-in-out", // smooth animation
                borderRadius: 4,
                background:
                  theme.palette.mode === "dark"
                    ? "linear-gradient(145deg, rgba(0, 0, 0, 0.05), rgba(255,255,255,0.02))"
                    : "linear-gradient(170deg, #f9f9f9f1, hsla(271, 91%, 75%, 0.08));",
                boxShadow:
                  theme.palette.mode === "dark"
                    ? "0 0 4px hsla(271, 91%, 75%, 0.26)"
                    : "0 0 2px hsla(0, 0%, 0%, 0.21)",

                "& fieldset": { border: "none" },
                "&:hover fieldset": { border: "none" },
                "&.Mui-focused": {
                  width: { md: "70vw" },
                  boxShadow:
                    theme.palette.mode === "dark"
                      ? "0 0 6px hsla(271, 94%, 63%, 0.37)"
                      : "0 0 5px hsla(0, 0%, 0%, 0.21)"// expand on focus
                },
                "& input::placeholder": {
                  fontSize: { xs: "13px", sm: "16px" }, // 14px on xs, 16px otherwise
                },
              },
            }}
          />
        </Box>



        {/* Coins Grid */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
            xl: 'repeat(4, 1fr)'
          },
          gap: { xs: 2, sm: 3, lg: 4 }
        }}>
          {filteredCoins.map((coin) => (
            <Card
              key={coin.id}
              sx={{
                cursor: 'pointer',
                height: '100%',
                borderRadius: 3,
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(145deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.08))'
                  : 'linear-gradient(145deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.7))',
                backdropFilter: 'blur(20px)',
                border: `1px solid ${theme.palette.mode === 'dark'
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'rgba(255, 255, 255, 0.8)'
                  }`,
                boxShadow: theme.palette.mode === 'dark'
                  ? '0 4px 20px rgba(0, 0, 0, 0.3)'
                  : '0 4px 20px rgba(0, 0, 0, 0.08)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: `linear-gradient(90deg, ${coin.color}, ${coin.color}80)`,
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                },
                '&:hover': {
                  transform: 'translateY(-8px) scale(1.02)',
                  borderColor: `${coin.color}60`,
                  boxShadow: theme.palette.mode === 'dark'
                    ? `0 20px 60px rgba(0, 0, 0, 0.4), 0 0 30px ${coin.color}20`
                    : `0 20px 60px rgba(0, 0, 0, 0.15), 0 0 30px ${coin.color}15`,
                  '&::before': {
                    opacity: 1,
                  },
                  '& .coin-symbol': {
                    color: coin.color,
                  },
                  '& .coin-icon': {
                    transform: 'scale(1.1) rotate(5deg)',
                    boxShadow: `0 0 20px ${coin.color}40`,
                  }
                }
              }}
              onClick={() => handleCoinClick(coin)}
            >
              <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
                {/* Coin Header */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      component="img"
                      src={coin.icon}
                      alt={coin.name}
                      sx={{
                        width: { xs: 48, sm: 56 },
                        height: { xs: 48, sm: 56 },
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${coin.color}, ${coin.color}DD)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: { xs: '1.25rem', sm: '1.5rem' },
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        boxShadow: `0 4px 15px ${coin.color}30`,
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          inset: -2,
                          borderRadius: '50%',
                          background: `conic-gradient(from 0deg, ${coin.color}40, transparent, ${coin.color}40)`,
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
                        },
                      }}
                    />

                    <Box>
                      <Typography
                        className="coin-symbol"
                        variant="h6"
                        sx={{
                          fontWeight: 'bold',
                          transition: 'color 0.3s ease',
                          fontSize: { xs: '1rem', sm: '1.125rem' }
                        }}
                      >
                        {coin.symbol}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          fontSize: { xs: '0.75rem', sm: '0.875rem' }
                        }}
                      >
                        {coin.name}
                      </Typography>
                    </Box>
                  </Box>

                  <Chip
                    icon={coin.change24h >= 0 ?
                      <TrendingUpIcon sx={{ fontSize: '1rem !important' }} /> :
                      <TrendingDownIcon sx={{ fontSize: '1rem !important' }} />
                    }
                    label={`${coin.change24h >= 0 ? '+' : ''}${coin.change24h.toFixed(1)}%`}
                    size="small"
                    sx={{
                      background: coin.change24h >= 0
                        ? 'linear-gradient(135deg, hsl(142, 76%, 36%), hsl(142, 76%, 42%))'
                        : 'linear-gradient(135deg, hsl(0, 84%, 60%), hsl(0, 84%, 66%))',
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '0.75rem',
                      borderRadius: 2,
                      border: 'none',
                      boxShadow: coin.change24h >= 0
                        ? '0 2px 8px rgba(34, 197, 94, 0.3)'
                        : '0 2px 8px rgba(239, 68, 68, 0.3)',
                      '& .MuiChip-icon': {
                        color: 'white'
                      }
                    }}
                  />
                </Box>

                {/* Price */}
                <Box sx={{ mb: 2 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 'bold',
                      color: 'primary.main',
                      fontSize: { xs: '1.25rem', sm: '1.5rem' }
                    }}
                  >
                    {formatCurrency(coin.price)}
                  </Typography>
                </Box>

                {/* Market Cap */}
                <Typography
                  variant="body2"
                  sx={{
                    color: 'text.secondary',
                    fontSize: { xs: '0.75rem', sm: '0.875rem' }
                  }}
                >
                  <Box component="span" sx={{ fontWeight: 500 }}>Market Cap: </Box>
                  {formatMarketCap(coin.marketCap)}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* No results */}
        {filteredCoins.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 6 }}>
            <Typography variant="h1" sx={{ fontSize: '4rem', mb: 2 }}>
              🔍
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
              No cryptocurrencies found
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              Try adjusting your search terms or browse all available coins
            </Typography>
          </Box>
        )}
      </Container>

      {/* Trade Modal */}
      <TradeModal
        coin={selectedCoin}
        isOpen={isModalOpen}
        onClose={() => handleCloseModal()}
      />
    </Box>
  );
};

export default Trade;