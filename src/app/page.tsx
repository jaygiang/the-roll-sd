"use client";
import CalendarComponent from "./components/Calendar";
import { ParallaxProvider } from "react-scroll-parallax";
import { ParallaxBanner } from "react-scroll-parallax";

export default function Home() {
  return (
    <main className="main">
      <ParallaxProvider>
        <ParallaxBanner
          layers={[
            { image: "/images/hero-background.jpg", speed: -20 },
            { image: "/images/hero-foreground.png", speed: -10 },
          ]}
          className="aspect-[2/1]"
        >
          <div className="absolute inset-0 left-20 flex items-center">
            <h1 className="hero-title text-9xl text-orange-200 font-light">
              The Roll SD
            </h1>
          </div>
        </ParallaxBanner> 
        <div className="mt-10">
        <div className="calendar-title text-2xl text-center text-yellow-500 font-light px-10">Brazilian Jiu-Jitsu tournaments and gatherings in San Diego</div>
        </div>
        <CalendarComponent />
      </ParallaxProvider>
    </main>
  );
}
