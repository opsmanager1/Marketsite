import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import { Navbar } from "../components/Navbar";
import { Gamnerium } from "@thirdweb-dev/chains";
// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={{
        // === Required information for connecting to the network === \\
        chainId: 3746287, // Chain ID of the network
        // Array of RPC URLs to use
        rpc: ["http://109.201.241.47:8545/"],

        // === Information for adding the network to your wallet (how it will appear for first time users) === \\
        // Information about the chain's native currency (i.e. the currency that is used to pay for gas)
        nativeCurrency: {
          decimals: 18,
          name: "Gamnerium",
          symbol: "OPS",
        },
        shortName: "Gamnerium", // Display value shown in the wallet UI
        slug: "Gamnerium", // Display value shown in the wallet UI
        testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
        chain: "Gamnerium", // Name of the network
        name: "Gamnerium zkEVM Testnet", // Name of the network
      }}>
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}
export default MyApp;