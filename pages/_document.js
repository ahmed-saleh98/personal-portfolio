import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="text-[--main-color] dark:bg-black dark:text-white transition-all duration-300">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
