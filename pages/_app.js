import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ahmed Saleh</title>
        <meta name="description" content="Ahmed Saleh's Personal Portfolio" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
