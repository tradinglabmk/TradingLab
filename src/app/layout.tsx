import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Footer } from "./components/Footer/Footer";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import Script from "next/script";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "TradingLab",
  description:
    "Forex - Trading - Education - Signals - Markets - EBook - Business",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <head suppressHydrationWarning>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          id="cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="05799d54-6816-4a2b-8244-b4e52a8e897d"
          data-blockingmode="auto"
          type="text/javascript"
          suppressHydrationWarning
        />
      </head>
      <body className={`${roboto.variable} antialiased`}>
        <Toaster position="top-center" />
        <NavigationBar />
        <div className="pt-[80px]">{children}</div>
        <Footer />

        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];
            t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1954645211940305');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1954645211940305&ev=PageView&noscript=1"
          />
        </noscript>
      </body>
    </html>
  );
}
