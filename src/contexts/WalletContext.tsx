import { IWalletContextType } from "@/interfaces/WalletContextTypes";
import { IWallet } from "@/interfaces/WalletInterface";
import React, { createContext, useContext, useState } from "react";


const WalletContext = createContext<IWalletContextType | undefined>(undefined);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [wallet, setWallet] = useState<IWallet | null>(null);

    const walletSetter = (newWallet: IWallet) => {
        setWallet(newWallet);
    }

    const value = React.useMemo(() => ({
        wallet,
        walletSetter
    }), [wallet]);
    return (
        <WalletContext.Provider value={value}>
            {children}
        </WalletContext.Provider>
    );
}


export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};