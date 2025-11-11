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
  useTheme
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

// Mock data for demonstration


export const Wallet: React.FC = () => {

  const { accessToken, user } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();
  const { wallet, walletSetter } = useWallet()

  useEffect(() => {

    const fetchWallet = async () => {
      console.log("UseEffect started working");
      const user_Id = user.user_Id;
      try {
        const apiClient = createApiClient(accessToken);
        const response = await apiClient.post("/wallet", { user_Id });
        const data = await response.data.wallet;
        console.log(data);
        walletSetter(data);
      } catch (err: any) {
        if (err.response?.status === 401) {
          toast({
            title: "Invalid User",
            description: "Please Re-login andd try again",
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

  useEffect(() => {
    const fetchValue = async () => {
      
    }
  })

  const handleTrade = (coinSymbol: string) => {
    if (coinSymbol.toUpperCase() === "USDT") {
      navigate("/trade");
    } else {
      navigate(`/trade?coin=${coinSymbol}`);
    }
  };

  const theme = useTheme();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const formatPercentage = (percentage: number) => {
    return `${percentage > 0 ? '+' : ''}${percentage.toFixed(1)}%`;
  };



  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      <Navbar />

      <Container maxWidth="lg" sx={{ mt: 4, pb: 4, pt: 6 }}>
        {/* User Profile Section */}
        <Card sx={{ mb: 4, overflow: 'visible' }}>
          <CardContent sx={{ p: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
              <Avatar
                sx={{
                  width: 80,
                  height: 80,
                  border: '3px solid',
                  borderColor: 'primary.main',
                }}
              >
                <RxAvatar size={40} /> {/* Icon rendered inside Avatar */}
              </Avatar>


              <Box sx={{ flex: 1, minWidth: 200 }}>
                <Typography variant="h4" component="h1" sx={{ fontWeight: 700, mb: 1 }}>
                  {user.username}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                  <MdEmail style={{ fontSize: 18, color: 'rgb(156, 163, 175)' }} />
                  <Typography variant="body2" color="text.secondary">
                    {user.email}
                  </Typography>
                </Box>

                {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <MdPhone style={{ fontSize: 18, color: 'rgb(156, 163, 175)' }} />
                  <Typography variant="body2" color="text.secondary">
                    {user.}
                  </Typography>
                </Box> */}
              </Box>

              <Paper
                sx={{
                  p: 3,
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, hsl(271, 91%, 65%), hsl(271, 91%, 75%))',
                  color: 'white',
                  borderRadius: 2
                }}
              >
                <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                  Total Portfolio
                </Typography>
                <Typography variant="h4" component="div" sx={{ fontWeight: 900, mt: 1 }}>
                  {wallet && wallet.coins.length > 0 ? formatCurrency(wallet.coins[0].balance) : "$0.00"}
                </Typography>
              </Paper>
            </Box>
          </CardContent>
        </Card>

        {/* Wallet Section */}
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <MdAccountBalanceWallet style={{ fontSize: 32, color: 'hsl(271, 91%, 65%)' }} />
            <Typography variant="h4" component="h2" sx={{ fontWeight: 700 }}>
              My Wallet
            </Typography>
          </Box>

          <TableContainer
            component={Paper}
            sx={{
              borderRadius: 2,
              boxShadow: theme.shadows[2],
              overflow: 'hidden'
            }}
          >
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: 'primary.main' }}>
                  <TableCell sx={{ color: 'primary.contrastText', fontWeight: 600 }}>
                    Asset
                  </TableCell>
                  <TableCell align="center" sx={{ color: 'primary.contrastText', fontWeight: 600 }}>
                    Balance
                  </TableCell>
                  <TableCell align="center" sx={{ color: 'primary.contrastText', fontWeight: 600 }}>
                    Value
                  </TableCell>
                  <TableCell align="center" sx={{ color: 'primary.contrastText', fontWeight: 600 }}>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {wallet && wallet.coins.length > 0 ? (wallet.coins.map((coin, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      '&:hover': {
                        backgroundColor: 'action.hover',
                      },
                      transition: 'background-color 0.2s ease'
                    }}
                  >
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box
                          component="img"
                          src={coin.icon}
                          alt={coin.name}
                          sx={{
                            width: { xs: 48, sm: 56 },
                            height: { xs: 48, sm: 56 },
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: { xs: '1.25rem', sm: '1.5rem' },
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            position: 'relative',
                            '&::after': {
                              content: '""',
                              position: 'absolute',
                              inset: -2,
                              borderRadius: '50%',
                              opacity: 0,
                              transition: 'opacity 0.3s ease',
                            },
                          }}
                        />
                        <Box>
                          <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                            {coin.symbol}
                          </Typography>

                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell align="center">
                      <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                        {coin.balance.toLocaleString()}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {coin.symbol}
                      </Typography>
                    </TableCell>

                    <TableCell align="center">
                      <Typography variant="h6" component="div" sx={{ fontWeight: 700, color: 'primary.main' }}>
                        {formatCurrency(coin.value)}
                      </Typography>
                    </TableCell>

                    <TableCell align="center">
                      <Button
                        variant="contained"
                        startIcon={<MdSwapHoriz />}
                        onClick={() => handleTrade(coin.symbol)}
                        sx={{
                          background: 'linear-gradient(135deg, hsl(271, 91%, 65%), hsl(271, 91%, 75%))',
                          color: 'white',
                          fontWeight: 600,
                          textTransform: 'none',
                          borderRadius: 2,
                          px: 3,
                          '&:hover': {
                            background: 'linear-gradient(135deg, hsl(271, 91%, 60%), hsl(271, 91%, 70%))',
                            transform: 'scale(1.05)',
                          },
                          transition: 'all 0.2s ease'
                        }}
                      >
                        Trade
                      </Button>
                    </TableCell>
                  </TableRow>
                ))) : (<TableRow>
                  <TableCell colSpan={4} align="center">
                    No coins available
                  </TableCell>
                </TableRow>)}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </Box>
  );
};

