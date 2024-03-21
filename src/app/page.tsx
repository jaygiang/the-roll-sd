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
              { image: "/images/hero-background.webp", speed: -20 },
              { image: "/images/hero-foreground.webp", speed: -10 },
            ]}
            className="aspect-[2/1]"
          >
            <div className="absolute inset-0 left-20 flex items-center">
              <h1 className="hero-title text-9xl text-orange-200 font-light">
                The Roll SD
              </h1>
            </div>
          </ParallaxBanner>
        </header>
        <div className="mt-10">
          <h2 className="calendar-title text-2xl text-center text-yellow-500 font-light px-10">
            Brazilian Jiu-Jitsu tournaments and gatherings in San Diego
          </h2>
        </div>
        <CalendarComponent />
      </ParallaxProvider>
    </main>
  );
}
