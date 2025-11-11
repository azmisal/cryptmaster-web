import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface Coin {
  id: string;
  name: string;
  symbol: string;
  price: number;
  color: string;
}

interface TradingChartProps {
  coin: Coin;
}


const getChartData = ()=>{
  
}

// Generate mock price data
const generateMockData = (basePrice: number, days: number = 30) => {
  const data = [];
  let currentPrice = basePrice;
  
  for (let i = days; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    
    // Add some realistic price volatility
    const volatility = (Math.random() - 0.5) * 0.1; // ±5% volatility
    currentPrice = currentPrice * (1 + volatility);
    
    data.push({
      date: date.toLocaleDateString(),
      price: Math.max(currentPrice, 0.01), // Ensure price doesn't go negative
      timestamp: date.getTime()
    });
  }
  
  return data;
};

const TradingChart = ({ coin }: TradingChartProps) => {
  const [chartData, setChartData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
      const mockData = generateMockData(coin.price);
      setChartData(mockData);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [coin.price]);

  const formatPrice = (value: number) => {
    if (value >= 1000) {
      return `$${(value / 1000).toFixed(1)}K`;
    }
    return `$${value.toFixed(2)}`;
  };

  if (isLoading) {
    return (
      <div className="h-64 flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
          <span className="text-muted-foreground">Loading chart data...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
          <XAxis 
            dataKey="date" 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            tickFormatter={formatPrice}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--background))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
            }}
            labelStyle={{ color: "hsl(var(--foreground))" }}
            formatter={(value: number) => [formatPrice(value), coin.symbol]}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke={coin.color}
            strokeWidth={3}
            dot={false}
            activeDot={{ 
              r: 6, 
              fill: coin.color,
              stroke: "hsl(var(--background))",
              strokeWidth: 2
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TradingChart;