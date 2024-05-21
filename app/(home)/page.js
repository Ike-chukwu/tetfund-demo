"use client";
import HeroSection from "../components/home/HeroSection/HeroSection";
import Mission from "../components/home/Mission/Mission";
import Vision from "../components/home/Vision/Vision";
import Events from "../components/home/Events/Events";
import Partners from "../components/home/Partners/Partners";
import LatestPosts from "../components/home/LatestPosts/LatestPosts";
import VideoSection from "../components/home/VideoSection/VideoSection";
import Testimonials from "../components/home/Testimonials/Testimonials";
import { ReactLenis, useLenis } from "libs/lenis";
import { useEffect } from "react";
export * from "lenis/react";
import gsap from "gsap";
export default function Home() {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });

  return (
    <ReactLenis  ref={lenisRef} autoRaf={false}>
      <div>
        <HeroSection />
        <Mission />
        <Vision />
        <Events />
        <Partners />
        <LatestPosts />
        <VideoSection />
        <Testimonials />
      </div>
    </ReactLenis>
  );
}
