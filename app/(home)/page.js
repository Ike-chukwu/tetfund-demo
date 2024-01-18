import HeroSection from "../components/home/HeroSection/HeroSection";
import Mission from "../components/home/Mission/Mission";
import Vision from "../components/home/Vision/Vision";
import Events from "../components/home/Events/Events";
import Partners from "../components/home/Partners/Partners";
import LatestPosts from "../components/home/LatestPosts/LatestPosts";
import VideoSection from "../components/home/VideoSection/VideoSection";
import Testimonials from "../components/home/Testimonials/Testimonials";

export default function Home() {
  return (
      <div >
        <HeroSection />
        <Mission />
        <Vision />
        <Events />
        <Partners />
        <LatestPosts />
        <VideoSection />
        <Testimonials />
    </div>
  );
}
