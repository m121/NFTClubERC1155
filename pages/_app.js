import '../styles/globals.css'
import Head from 'next/head'
// Import thirdweb provider and Rinkeby ChainId
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
// This is the chainId your dApp will work on.
const activeChainId = ChainId.Rinkeby;


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <html lang="en" />
        <meta charset="utf-8" />
        <title>CyberPunk Dog Club</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#000000" />
        <link rel="shortcut icon" href="favicon.ico" />
        

        <meta name="title" content="CyberPunk Dog Club" />
        <meta
          name="description"
          content="CyberPunk Dog Club"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Mateo perez" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://web.com" />
        <meta property="og:title" content="CyberPunk Dog Club" />
        <meta
          property="og:description"
          content="CyberPunk Dog Club"
        />
        <meta property="og:image" content="https://web.com/thumb.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://web.com" />
        <meta property="twitter:title" content="CyberPunk Dog Club" />
        <meta
          property="twitter:description"
          content="CyberPunk Dog Club"
        />
        <meta
          property="twitter:image"
          content="https://web.com/thumb.png"
        />

      
      </Head>
<div>
<ThirdwebProvider desiredChainId={activeChainId} >
      <Component {...pageProps} />
      </ThirdwebProvider>
</div>
    </div>);
}

export default MyApp