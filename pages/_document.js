import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <meta name="theme-color" content="#111827" />
        <meta name="color-scheme" content="dark" />
      </Head>
      <body className="bg-gray-900 text-gray-100">
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              document.documentElement.classList.add('dark');
              localStorage.setItem('theme', 'dark');
            })();
          `
        }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 