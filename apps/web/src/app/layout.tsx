import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'B2B 도매 자사몰',
  description: '도매용 자사몰 프론트엔드',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
