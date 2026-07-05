import { IWalletContextType } from "@/interfaces/WalletContextTypes";
import { IWallet } from "@/interfaces/WalletInterface";
import React, { createContext, useCallback, useContext, useState } from "react";


const WalletContext = createContext<IWalletContextType | undefined>(undefined);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [wallet, setWallet] = useState<IWallet | null>(null);

    const walletSetter = useCallback((newWallet: IWallet) => {
        setWallet(newWallet);
    }, []);

    const clearWallet = useCallback(() => {
        setWallet(null);
    }, []);

    const value = React.useMemo(() => ({
        wallet,
        walletSetter,
        clearWallet
    }), [wallet, walletSetter, clearWallet]);
    return (
        <WalletContext.Provider value={value}>
            {children}
        </WalletContext.Provider>
    );
}


export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet must be used within WalletProvider");
  }
  return context;
};
