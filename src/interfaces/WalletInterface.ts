import { IBalanceCoins } from "./CoinInterface";

export interface IWallet{
    user_Id: string,
    wallet_Id:string,
    coins: IBalanceCoins[];
}