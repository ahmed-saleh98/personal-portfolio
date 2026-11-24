import '@/styles/globals.css';
import Head from 'next/head';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ahmed Saleh | Front-End Developer</title>
        <meta
          name="description"
          content="Ahmed Saleh, a Front-End Developer with 4+ years of experience building accessible, performant, SEO-friendly web apps with React, Next.js, and Vue.js. Operations Team Leader at Hudl StatsBomb."
        />
        <meta property="og:title" content="Ahmed Saleh | Front-End Developer" />
        <meta
          property="og:description"
          content="Front-End Developer with 4+ years of experience building accessible, performant, SEO-friendly web apps with React, Next.js, and Vue.js."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ahmedsaleh.vercel.app/" />
        <meta
          property="og:image"
          content="https://ahmedsaleh.vercel.app/images/portfolio-image.webp"
        />
        <meta name="twitter:card" content="summary_large_image" />
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
