import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Sydney from "../Images/Sydney.png";
import BluuMountains from "../Images/BluuMountains.png";
import Wollongong from "../Images/Wollongong.png";

const ScrollHeading = ({ children }) => {
  const { scrollY } = useScroll();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

 
  const x = useTransform(
    scrollY,
    [windowWidth * 0.5, windowWidth * 1.5], 
    [0, -windowWidth * 0.8]
  );

  return (
    <motion.h1
      style={{ x }}
      className="font-pinyon text-4xl text-textCol lg:text-6xl"
    >
      {children}
    </motion.h1>
  );
};

const OurService = () => {
  const destinations = [
    { name: "Sydney", image: Sydney },
    { name: "Wollongong", image: Wollongong },
    { name: "Blue Mountains", image: BluuMountains },
  ];

  return (
    <section className="ourservice flex flex-col my-10 items-center w-full">
   
      <ScrollHeading>Our Servicing Areas</ScrollHeading>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:px-24 w-full mt-10">
        {destinations.map((destination) => (
          <div
            className="text-center p-5 bg-white shadow-md rounded-lg"
            key={destination.name}
          >
            <div className="overflow-hidden rounded-md">
              <img
                src={destination.image}
                alt={`${destination.name} Image`}
                className="hover:scale-110 transition-transform duration-300 w-full h-[200px] object-cover"
              />
            </div>
            <p className="my-5 text-xl uppercase font-baskerville font-extralight">
              {destination.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurService;  