import { IWallet } from "./WalletInterface";

export interface IWalletContextType{
    wallet: IWallet,
    walletSetter:(wallet: IWallet) => void;
}