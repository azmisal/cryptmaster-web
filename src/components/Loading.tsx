import React from "react";
import { Loader2 } from "lucide-react";

const Loading: React.FC = () => {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
            <div className="flex flex-col items-center gap-4 animate-in fade-in duration-300">
                <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                    <Loader2 className="h-12 w-12 animate-spin text-primary relative z-10" />
                </div>
                <p className="text-muted-foreground animate-pulse font-medium">
                    Loading Cryptmaster...
                </p>
            </div>
        </div>
    );
};

export default Loading;
