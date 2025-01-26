import image1 from "../Images/image1.png";
import image2 from "../Images/image2.png";
import image3 from "../Images/image3.png";



const EventCompleted = () => {
  const images = [
    image1,
    image2,
    image3,
    image1,
    image2,
    image3,
    image1,
    image2,
    image3,
    image1,
    image2,
    image3,

  
  ];

  return (
    <section className="flex flex-col md:my-16 my-2 items-center">
      <div>
        <h1 className="md:font-pinyon font-rig-solid text-center text-4xl  md:text-6xl">Events Completed</h1>
      </div>
    <div className="relative lg:h-72 md:h-64 h-36 w-full overflow-hidden my-10">
     
      <div className="animate-marquee">
        {images.map((src, index) => (
          <img
            key={`img1-${index}`}
            src={src}
            alt={`Scrolling image ${index + 1}`}
            className="lg:h-72 md:h-64 h-36 object-cover"
          />
        ))}
        
        {images.map((src, index) => (
          <img
            key={`img2-${index}`}
            src={src}
            alt={`Scrolling image ${index + 1}`}
            className="lg:h-72 md:h-64 h-36 object-cover"
          />
        ))}
      </div>

     
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          display: flex;
          gap: 20px; /* No space between images */
        }
      `}</style>
    </div>
    </section>
  );
};

export default EventCompleted;
