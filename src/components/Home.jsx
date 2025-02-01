import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import HomeImage from "../Images/HomeImage.png";
import CaptureMemories from "./CaptureMemories";
import CustomPrints from "./CustomPrints";
import EventCompleted from "./EventCompleted";
import ExploreOurBooths from "./ExploreOurBooths";
import Faq from "./Faq";
import OurBomb from "./OurBomb";
import OurService from "./OurService";
import Testimonials from "./Testimonials";

const Home = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      controls.start({ y: -scrollY * 0.5 }); // Adjust scroll speed here
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <section className="flex flex-col">
      <div className="home flex flex-col items-center">
        <div className="flex flex-col items-center text-textCol">
          <motion.h1
            className="font-pinyon lg:text-[135px] text-7xl mt-1"
            animate={controls}
            initial={{ y: 0 }}
          >
            Welcome To
          </motion.h1>
          <br />
          <motion.p
            className="font-baskerville lg:text-[80px] text-5xl font-extralight -mt-10 ml-10"
            animate={controls}
            initial={{ y: 0 }}
          >
            FOTORO
          </motion.p>
        </div>
        <div className="my-10 flex justify-center">
          <img src={HomeImage} className="md:w-[1500px]" alt="Home Image" />
        </div>
      </div>
      <OurService />
      <OurBomb />
      <EventCompleted />
      <CaptureMemories />
      <ExploreOurBooths />
      <CustomPrints />
      <Testimonials />
      {/* <BookNow/> */}
      <Faq />
    </section>
  );
};

export default Home;