import React, { useEffect, useState } from 'react';
import { RxAvatar } from "react-icons/rx";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Chip,
  Paper,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
  useMediaQuery,
  Divider
} from '@mui/material';
import {
  MdTrendingUp,
  MdTrendingDown,
  MdAccountBalanceWallet,
  MdPerson,
  MdEmail,
  MdPhone,
  MdSwapHoriz
} from 'react-icons/md';
import Navbar from '@/components/Navbar';
import { useAuth } from '@/contexts/AuthContext';
import { createApiClient } from '@/api/AuthApi';
import { useUser } from '@/contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast"; // keep if you want
import { useWallet } from '@/contexts/WalletContext';
import { tokenStore } from '@/stores/tokenstore';

// Mock data for demonstration


export const Wallet: React.FC = () => {

  const { user } = useUser();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();
  const { wallet, walletSetter } = useWallet();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const accessToken = tokenStore().getToken();

    const fetchWallet = async () => {
      const user_Id = user.user_Id;
      try {
        const apiClient = createApiClient(accessToken);
        const response = await apiClient.post("/wallet", { user_Id });
        const data = await response.data.wallet;
        walletSetter(data);
      } catch (err: any) {
        if (err.response?.status === 401) {
          toast({
            title: "Invalid User",
            description: "Please Re-login and try again",
            variant: "destructive",
          });
          navigate('/login');
        } else {
          setError(err.message);
        }
      }
    };

    if (accessToken) {
      fetchWallet();
    }
  }, []);

  const handleTrade = (coinSymbol: string) => {
    if (coinSymbol.toUpperCase() === "USDT") {
      navigate("/trade");
    } else {
      navigate(`/trade?coin=${coinSymbol}`);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  // Glassmorphism card style
  const glassCardStyle = {
    background: theme.palette.mode === 'dark'
      ? 'rgba(17, 25, 40, 0.75)'
      : 'rgba(255, 255, 255, 0.75)',
    backdropFilter: 'blur(16px) saturate(180%)',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.125)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default', pb: 10 }}>
      <Navbar />

      <Container maxWidth="lg" sx={{ mt: { xs: 10, md: 12 }, px: { xs: 2, md: 3 } }}>
        {/* User Profile Section */}
        <Box sx={{ ...glassCardStyle, p: { xs: 3, md: 4 }, mb: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 3 }}>
          <Avatar
            sx={{
              width: { xs: 80, md: 100 },
              height: { xs: 80, md: 100 },
              border: '3px solid',
              borderColor: 'primary.main',
              bgcolor: 'background.paper'
            }}
          >
            <RxAvatar size={50} color={theme.palette.text.primary} />
          </Avatar>

          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h4" component="h1" sx={{ fontWeight: 700, mb: 0.5, bgclip: "text", background: "linear-gradient(90deg, #9F7AEA 0%, #ED64A6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {user.username}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' }, gap: 1, mb: 1, color: 'text.secondary' }}>
              <MdEmail />
              <Typography variant="body1">{user.email}</Typography>
            </Box>
          </Box>

          <Paper
            elevation={0}
            sx={{
              p: 3,
              textAlign: 'center',
              background: 'linear-gradient(135deg, hsl(271, 91%, 65%), hsl(271, 91%, 75%))',
              color: 'white',
              borderRadius: 4,
              width: { xs: '100%', md: 'auto' },
              minWidth: 200,
              boxShadow: '0 10px 20px -10px rgba(159, 122, 234, 0.5)'
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 600, opacity: 0.9 }}>
              Total Portfolio
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 800, mt: 0.5 }}>
              {wallet && wallet.coins.length > 0 ? formatCurrency(wallet.coins[0].balance) : "$0.00"}
            </Typography>
          </Paper>
        </Box>

        {/* Wallet Section Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
          <MdAccountBalanceWallet style={{ fontSize: 28, color: 'hsl(271, 91%, 65%)' }} />
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            My Assets
          </Typography>
        </Box>

        {/* Responsive Asset List */}
        {isMobile ? (
          // Mobile Card View
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {wallet && wallet.coins.length > 0 ? (wallet.coins.map((coin, index) => (
              <Box
                key={index}
                sx={{
                  ...glassCardStyle,
                  p: 2.5,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  transition: 'transform 0.2s',
                  '&:active': { transform: 'scale(0.98)' }
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar src={coin.icon} alt={coin.name} sx={{ width: 48, height: 48 }} />
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>{coin.symbol}</Typography>
                      <Typography variant="body2" color="text.secondary">{coin.name}</Typography>
                    </Box>
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>{formatCurrency(coin.value)}</Typography>
                </Box>

                <Divider sx={{ borderStyle: 'dashed' }} />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Typography variant="caption" color="text.secondary">Balance</Typography>
                    <Typography variant="body1" fontWeight={600}>{coin.balance.toLocaleString()}</Typography>
                  </Box>
                  <Button
                    variant="contained"
                    onClick={() => handleTrade(coin.symbol)}
                    size="small"
                    sx={{
                      borderRadius: 2,
                      textTransform: 'none',
                      background: 'linear-gradient(135deg, hsl(271, 91%, 65%), hsl(271, 91%, 75%))',
                      fontWeight: 600,
                      px: 3
                    }}
                  >
                    Trade
                  </Button>
                </Box>
              </Box>
            ))) : (
              <Box sx={{ ...glassCardStyle, p: 4, textAlign: 'center' }}>
                <Typography color="text.secondary">No assets found</Typography>
              </Box>
            )}
          </Box>
        ) : (
          // Desktop Table View
          <TableContainer component={Paper} elevation={0} sx={{ ...glassCardStyle, overflow: 'hidden' }}>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)' }}>
                  <TableCell sx={{ fontWeight: 600, py: 2.5 }}>Asset</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 600 }}>Balance</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 600 }}>Value</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 600 }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {wallet && wallet.coins.length > 0 ? (wallet.coins.map((coin, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      '&:hover': { backgroundColor: theme.palette.action.hover },
                      transition: 'background-color 0.2s'
                    }}
                  >
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar src={coin.icon} sx={{ width: 44, height: 44 }} />
                        <Box>
                          <Typography variant="subtitle1" fontWeight={700}>{coin.symbol}</Typography>
                          <Typography variant="caption" color="text.secondary">{coin.name || coin.symbol}</Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="body1" fontWeight={500}>{coin.balance.toLocaleString()}</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="body1" fontWeight={600} color="primary.main">{formatCurrency(coin.value)}</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        variant="outlined"
                        onClick={() => handleTrade(coin.symbol)}
                        sx={{
                          borderRadius: 2,
                          textTransform: 'none',
                          fontWeight: 600,
                          borderColor: 'primary.main',
                          color: 'primary.main',
                          '&:hover': {
                            borderColor: 'primary.main',
                            bgcolor: 'primary.lighter'
                          }
                        }}
                      >
                        Trade
                      </Button>
                    </TableCell>
                  </TableRow>
                ))) : (
                  <TableRow>
                    <TableCell colSpan={4} align="center" sx={{ py: 4, color: 'text.secondary' }}>
                      No coins available
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>
    </Box>
  );
};

