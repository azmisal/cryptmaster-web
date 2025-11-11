export interface IBalanceCoins {
    name: string,
    symbol: string,
    value: number,
    balance: number,
    icon: string,
}

export interface ITradeCoin{
    id: string;
    name: string;
    symbol: string
    icon: string;
    price: number;
    change24h: number;
    marketCap: number;
    color: string;
}