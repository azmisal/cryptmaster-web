import { createApiClient } from "./AuthApi";
import { IWallet } from "@/interfaces/WalletInterface";

export const updateWallet = (accessToken: string, wallet: IWallet) => {
    try {
        const apiClient = createApiClient(accessToken);
        const response = apiClient.post('/update-wallet',wallet)
        return response;
    }
    catch (err) {
        console.log("Error in updating wallet please try again", err)
        throw new Error("Error Updating wallet"+err);
    }

}