import Script from 'next/script';
import { Html, Head, Main, NextScript } from 'next/document';

import Config from '@/config';

export default function Document() {
  return (
    <Html lang="uk">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat&family=Comfortaa&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${Config.GOOGLE_ANALYTICS_ID}`}
        ></Script>
        <Script strategy="afterInteractive" id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', '${Config.GOOGLE_ANALYTICS_ID}');
          `}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
