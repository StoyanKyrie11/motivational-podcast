import Navbar from "@/components/Navbar";
import { Montserrat_Alternates } from "next/font/google";
import './globals.css';
import Providers from './providers';

export const mont = Montserrat_Alternates({
  subsets: ['cyrillic'],
  weight: ['400', '700'],
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
      <body className={mont.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
