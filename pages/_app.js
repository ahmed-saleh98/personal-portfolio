import '@/styles/globals.css';
import Head from 'next/head';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ahmed Saleh</title>
        <meta name="description" content="Ahmed Saleh's Personal Portfolio" />
      </Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-FJ4Y1Z3VQ6"
      ></Script>
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FJ4Y1Z3VQ6', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
