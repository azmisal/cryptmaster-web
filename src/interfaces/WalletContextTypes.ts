import { IWallet } from "./WalletInterface";

export interface IWalletContextType{
    wallet: IWallet | null,
    walletSetter:(wallet: IWallet) => void;
    clearWallet: () => void;
}
