import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Provider from "./Provider";
import ReduxProvider from "./ReduxProvider";
import Header from "./UI/Header";
import Menu from "./UI/Menu";
import CardHydrator from "./UI/CardHydrator";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "digipay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ss01  antialiased`}
      >
        <ReduxProvider>
          <CardHydrator/>
          <Provider>
            <Header />

            {children}
           
          </Provider>
        </ReduxProvider>
      </body>
    </html>
  );
}
