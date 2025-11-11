import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Tabs,
  Tab,
  Button,
  TextField,
  Chip,
  useTheme,
  IconButton,
} from "@mui/material";
import { TrendingUp, TrendingDown, Wallet, AttachMoney, Close } from "@mui/icons-material";
import TradingChart from "@/components/TradingChart";
import { useToast } from "@/hooks/use-toast"; // keep if you want
import { formatCurrency } from "@/utils/Common";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useWallet } from "@/contexts/WalletContext";
import { updateWallet } from "@/api/UpdateWallet";
import { IBalanceCoins } from "@/interfaces/CoinInterface";

interface Coin {
  id: string;
  name: string;
  symbol: string;
  icon: string;
  price: number;
  change24h: number;
  color: string;
}

interface TradeModalProps {
  coin: Coin | null;
  isOpen: boolean;
  onClose: () => void;
}

const TradeModal = ({ coin, isOpen, onClose }: TradeModalProps) => {
  const [buyAmount, setBuyAmount] = useState("");
  const [sellAmount, setSellAmount] = useState("");
  const [tab, setTab] = useState(0);
  const theme = useTheme();
  const { toast } = useToast();
  const { accessToken } = useAuth();
  const { wallet } = useWallet();
  const navigate = useNavigate();


  const handleBuy = async () => {
    const amount = parseFloat(buyAmount);
    const usdtBalance = wallet.coins[0]?.balance || 0;
    const asset = amount / coin.price;
    const coinIndex = wallet.coins.findIndex(item => item.name === coin.name);
    if (usdtBalance < amount) {
      toast({
        title: "Insufficient Balance",
        description: `You only have ${usdtBalance} USDT available.`,
        variant: "destructive",
      });
      return;
    }

    const updatedWallet = { ...wallet, coins: [...wallet.coins] };

    if (coinIndex >= 0) {
      updatedWallet.coins[coinIndex].balance += asset;
    } else {
      const newCoin: IBalanceCoins = {
        name: coin.name,
        symbol: coin.symbol,
        value: coin.price,
        balance: asset,
        icon: coin.icon
      };
      updatedWallet.coins.push(newCoin);
    }

    updatedWallet.coins[0].balance -= amount;

    setBuyAmount("");
    const res = await updateWallet(accessToken, updatedWallet);
    if (res.status === 200) {
      console.log("await done");
      navigate('/wallet');
    }
  };




  const handleSell = async () => {
    const amount = parseFloat(sellAmount);
    const coinIndex = wallet.coins.findIndex(item => item.name === coin.name);
    console.log("coin Index : ", coinIndex);
    console.log("wallet coin : ", wallet.coins[coinIndex]);

    const asset = amount * coin.price;

    if (coinIndex === -1) {
      toast({
        title: "Insufficient Balance",
        description: "You don't have the coin asset with you",
        variant: "destructive"
      })
      return;
    }
    const coinBalance = wallet.coins[coinIndex].balance;
    if (coinBalance < amount) {
      toast({
        title: "Insufficient Balance",
        description: `You only have ${coinBalance} ${coin.name} available.`,
        variant: "destructive",
      });
      return;
    }
    const updatedWallet = { ...wallet, coins: [...wallet.coins] };

    if (updatedWallet.coins[coinIndex].balance === amount) {
      updatedWallet.coins.splice(coinIndex, 1);
      console.log("Updated Coin : ", updatedWallet.coins[coinIndex]);
    }
    else {
      updatedWallet.coins[coinIndex].balance -= amount;
    }
    updatedWallet.coins[0].balance += asset;
    const res = await updateWallet(accessToken, updatedWallet);
    if (res.status === 200) {
      console.log("await done");
      navigate('/wallet');
    }


  }

  if (!coin) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} sx={{ maxWidth: { sm: "100%" }, width: '100%', }} fullWidth >
      <DialogTitle
        sx={{
          backgroundColor: theme.palette.background.default,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left side content */}
        <Box display="flex" alignItems="center" gap={2}>
          <Box
            component="img"
            src={coin.icon}
            alt={coin.name}
            sx={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
          </Box>
          <Box>
            <Typography
              variant="h6"
              sx={{
                background: "linear-gradient(to right, #6d28d9, #9333ea)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "bold",
              }}
            >
              Trade {coin.name}
            </Typography>
            <Box display="flex" alignItems="center" gap={1}>
              <Typography variant="body2" color="text.secondary">
                {coin.symbol}
              </Typography>
              <Chip
                label={`${coin.change24h >= 0 ? "+" : ""}${coin.change24h.toFixed(1)}%`}
                icon={
                  coin.change24h >= 0 ? (
                    <TrendingUp fontSize="small" />
                  ) : (
                    <TrendingDown fontSize="small" />
                  )
                }
                sx={{
                  bgcolor: coin.change24h >= 0 ? "success.main" : "error.main",
                  color: "#fff",
                  height: 24,
                }}
              />
            </Box>
          </Box>
        </Box>

        {/* Right side close button */}
        <IconButton
          aria-label="close"
          onClick={onClose} // <-- pass your close handler here
          sx={{
            color: "text.secondary",
          }}
        >
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={{
        backgroundColor: theme.palette.background.default,

      }}>
        <Box display="grid" gridTemplateColumns={{ xs: "1fr", lg: "2fr 1fr" }} gap={3}>
          {/* Chart */}
          <Card>
            <CardHeader
              title="Price Chart"
              action={
                <Typography variant="h6" color="primary" fontWeight="bold">
                  {formatCurrency(coin.price)}
                </Typography>
              }
            />
            <CardContent>
              <TradingChart coin={coin} />
            </CardContent>
          </Card>

          {/* Side Panel */}
          <Box display="flex" flexDirection="column" gap={3}>
            {/* Wallet Balance */}
            <Card>
              <CardHeader title="Wallet Balance" />
              <CardContent>
                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Typography color="text.secondary">USD Balance:</Typography>
                  <Typography fontWeight="bold" color="primary">
                    {formatCurrency(100)}
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Typography color="text.secondary">{coin.symbol} Balance:</Typography>
                  <Typography fontWeight="bold">
                    {100} {coin.symbol}
                  </Typography>
                </Box>
              </CardContent>
            </Card>

            {/* Trade Tabs */}
            <Card>
              <CardContent>
                <Tabs
                  value={tab}
                  onChange={(_, v) => setTab(v)}
                  sx={{ mb: 2, borderBottom: 1, borderColor: "divider" }}
                >
                  <Tab
                    label="Buy"
                    sx={{
                      "&.Mui-selected": {
                        bgcolor: "green.600",
                        color: "hsl(142, 76%, 36%);",
                      },
                    }}
                  />
                  <Tab
                    label="Sell"
                    sx={{
                      "&.Mui-selected": {
                        bgcolor: "red.600",
                        color: "hsl(0, 84%, 60%);",
                      },
                    }}
                  />
                </Tabs>

                {/* Buy Tab */}
                {tab === 0 && (
                  <Box>
                    <Typography variant="body2" gutterBottom>
                      Amount (USDT)
                    </Typography>
                    <TextField
                      type="number"
                      value={buyAmount}
                      onChange={(e) => setBuyAmount(e.target.value)}
                      placeholder="0.00"
                      fullWidth
                      sx={{
                        mb: 2,
                        overflow: "hidden"
                      }}
                    />

                    {buyAmount && (
                      <Box p={1.5} bgcolor="action.hover" borderRadius={2} mb={2}>
                        <Typography variant="body2" display="flex" justifyContent="space-between">
                          <span>Equivalent {coin.symbol}:</span>
                          <span style={{ fontWeight: "bold", color: theme.palette.primary.main }}>
                            {parseFloat(buyAmount) / coin.price}
                          </span>
                        </Typography>
                      </Box>
                    )}

                    <Button
                      fullWidth
                      variant="contained"
                      color="success"
                      disabled={!buyAmount || parseFloat(buyAmount) <= 0}
                      onClick={handleBuy}
                      startIcon={<AttachMoney />}
                    >
                      Buy
                    </Button>
                  </Box>
                )}

                {/* Sell Tab */}
                {/* Sell Tab */}
                {tab === 1 && (
                  <Box>
                    <Typography variant="body2" gutterBottom>
                      Amount ({coin.symbol})
                    </Typography>

                    {/* "All In" Checkbox */}
                    <Box display="flex" alignItems="center" mb={1}>
                      <input
                        type="checkbox"
                        id="allIn"
                        checked={sellAmount === (wallet.coins.find(item => item.name === coin.name)?.balance || 0).toString()}
                        onChange={(e) => {
                          if (e.target.checked) {
                            const fullBalance = wallet.coins.find(item => item.name === coin.name)?.balance || 0;
                            setSellAmount(fullBalance.toString());
                          } else {
                            setSellAmount("");
                          }
                        }}
                        style={{ marginRight: "8px" }}
                      />
                      <label htmlFor="allIn" style={{ cursor: "pointer" }}>All In</label>
                    </Box>

                    <TextField
                      type="number"
                      value={sellAmount}
                      onChange={(e) => setSellAmount(e.target.value)}
                      placeholder="0.00"
                      fullWidth
                      sx={{
                        mb: 2,
                        overflow: "hidden"
                      }}
                    />

                    {sellAmount && (
                      <Box p={1.5} bgcolor="action.hover" borderRadius={2} mb={2}>
                        <Typography variant="body2" display="flex" justifyContent="space-between">
                          <span>Total USDT:</span>
                          <span style={{ fontWeight: "bold", color: theme.palette.primary.main }}>
                            {formatCurrency(parseFloat(sellAmount) * coin.price)}
                          </span>
                        </Typography>
                      </Box>
                    )}

                    <Button
                      fullWidth
                      variant="contained"
                      color="error"
                      disabled={!sellAmount || parseFloat(sellAmount) <= 0}
                      onClick={handleSell}
                      startIcon={<TrendingDown />}
                    >
                      Sell
                    </Button>
                  </Box>
                )}

              </CardContent>
            </Card>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default TradeModal;
