import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';

declare global {
  interface Window {
    TradingView: any;
  }
}

let tvScriptLoadingPromise: Promise<void> | undefined;

export default function Chart(): JSX.Element {
  const onLoadScriptRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement('script');
        script.id = 'tradingview-widget-loading-script';
        script.src = 'https://s3.tradingview.com/tv.js';
        script.type = 'text/javascript';
        script.onload = () => resolve();
        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(() => {
      if (onLoadScriptRef.current) onLoadScriptRef.current();
    });

    return () => {
      onLoadScriptRef.current = null;
    };

    function createWidget() {
      if (document.getElementById('technical-analysis-chart-demo') && 'TradingView' in window) {
        new window.TradingView.widget({
          container_id: 'technical-analysis-chart-demo',
          width: '100%',
          height: '95vh',
          autosize: true,
          symbol: 'BTCUSD',
          interval: 'D',
          timezone: 'exchange',
          theme: 'dark',
          style: '1',
          toolbar_bg: 'hsl(var(--background))',
          withdateranges: true,
          hide_side_toolbar: false,
          allow_symbol_change: true,
          save_image: false,
          studies: [
            'ROC@tv-basicstudies',
            'StochasticRSI@tv-basicstudies',
            'MASimple@tv-basicstudies',
          ],
          show_popup_button: true,
          popup_width: '1000',
          popup_height: '650',
          locale: 'en',
        });
      }
    }
  }, []);

  return (
    <div className="h-screen flex flex-col ">
      <Navbar />

      <div
        id="technical-analysis-chart-demo"
        className="flex-1 w-full min-h-[85vh] pt-16"
      />


    </div>
  );
}