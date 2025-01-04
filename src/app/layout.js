import { Nunito, Inter } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito', // Set as a CSS variable
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: "Good Furs",
  description: "Developed by @ipiyushchaudhary",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
