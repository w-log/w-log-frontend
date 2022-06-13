import type { AppProps } from 'next/app';

import '@style/globals.css';

function WLogApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default WLogApp;
