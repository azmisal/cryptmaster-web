import { createApiClient } from "@/api/AuthApi";
import { ITradeCoin } from "@/interfaces/CoinInterface";


export const getCoins = async (accessToken: string): Promise<ITradeCoin[]> => {
  try {
    const apiClient = createApiClient(accessToken);
    const getCoinResponse = await apiClient.get('/coins');
    const coinData = getCoinResponse.data.coinsReponse;
    return coinData;
  }
  catch (err) {
    console.log("Error Fetching Coins", err);
    throw new Error("Error Fetching Coins" + err);
  }

} 