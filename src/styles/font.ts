import localFont from 'next/font/local';

export const nanumSquareRound = localFont({
  src: [
    {
      path: '../../public/fonts/NanumSquareRoundEB.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NanumSquareRoundB.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NanumSquareRoundR.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NanumSquareRoundL.woff2',
      weight: '300',
      style: 'normal',
    },
  ],
});
