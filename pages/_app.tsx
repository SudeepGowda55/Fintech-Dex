import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, ConnectKitButton, getDefaultConfig} from "connectkit";
import { useEffect, useState } from "react";

const config = createConfig(
  getDefaultConfig({
    alchemyId: "rrVgolM4nvMB2LKUvN3D5TDOHFUvt82E",
    walletConnectProjectId: "d34a101b0137dba5a615d1c6b5eb6f6b",

    appName: "Fintech-Agent",
    appDescription: "Fintech Agent",
  })
);

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <WagmiConfig config={config}>
        <ConnectKitProvider>
          <ConnectKitButton />
          {mounted && <Component {...pageProps} />}
        </ConnectKitProvider>
      </WagmiConfig>
    </div>
  );
}
