"use client";
import CalendarComponent from "./components/Calendar";
import { ParallaxProvider } from "react-scroll-parallax";
import { ParallaxBanner } from "react-scroll-parallax";
import Script from "next/script";

export default function Home() {
  return (
    <main className="main">
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-CJE0H405PY`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-CJE0H405PY', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <ParallaxProvider>
        <header className="header">
          <ParallaxBanner
            layers={[
              { image: "/images/hero-foreground.webp", speed: -20, className:"foregroundImage" },
              { image: "/images/hero-background.webp", speed: -15, className:"backgroundImage"},
            ]}
            className="aspect-[2/1]"
          >
          </ParallaxBanner>
        </header>
        <div className="mt-10">
        </div>
        <CalendarComponent />
        <footer className="bg-black mt-20 mb-5">
          <div className="max-w-7xl mx-auto py-4 px-5 flex justify-center text-gray-600">
            <p className="text-sm text-center">
              © {new Date().getFullYear()} The Roll SD. All rights reserved.
            </p>
          </div>
        </footer>
      </ParallaxProvider>
    </main>
  );
}
