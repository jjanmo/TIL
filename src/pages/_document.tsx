import { Html, Head, Main, NextScript } from 'next/document';
import { nanumSquareRound } from '@/styles/font';

export default function Document() {
  return (
    <Html lang="en" style={nanumSquareRound.style}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
