import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
	return (
    	<>
    		<Script
    			strategy="beforeInteractive"
          type="text/javascript"
    			src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=t61ojxw8ra`}
    		></Script>

			<Component {...pageProps} />
    	</>
	);
};

export default MyApp;
//<script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=YOUR_CLIENT_ID"></script>