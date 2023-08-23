import LoadingSkeleton from "@components/LoadingSkeleton";
import { Montserrat_Alternates } from "next/font/google";
import { Suspense } from "react";
import Providers from './providers';

import './globals.css';

export const montserrat = Montserrat_Alternates({
  subsets: [ 'cyrillic' ],
  weight: [ '400', '700' ],
  display: 'swap',
  variable: '--font-opensans'
});

export const metadata = {
  title: "Motivational Podcast",
  description: "This is my personal podcast website",
  keywords:
    "motivational podcast, inspirational podcast, podcast motivation, podcast inspiration, motivating podcast, inspiring podcast",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ montserrat.className }>
        <Suspense fallback={ <LoadingSkeleton /> }>
          <Providers>
            { children }
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
