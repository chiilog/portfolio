import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chiaki Okamoto - WordPress Frontend Developer Portfolio",
  description:
    "WordPressの開発を専門とするフロントエンド開発者 Chiaki Okamoto (chiilog) のポートフォリオサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={quicksand.className}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S77PZVG822"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S77PZVG822');
          `}
        </Script>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
