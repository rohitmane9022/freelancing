
import TestimonialCard from "./TestimonialCard";
import testicon from "../Images/testicon.png"



const Testimonials = () => {
  const testimonials = [
    {
      image: testicon,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 4,
    },
    {
      image: testicon,
      name: "Jane Smith",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      rating: 5,
    },
    {
      image: testicon,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 4,
    },
    {
      image: testicon,
      name: "Jane Smith",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      rating: 5,
    },
    {
      image: testicon,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 4,
    },
    {
      image: testicon,
      name: "Jane Smith",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      rating: 5,
    },
    {
      image: testicon,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 4,
    },
    {
      image: testicon,
      name: "Jane Smith",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      rating: 5,
    },
    {
      image: testicon,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 4,
    },
    {
      image: testicon,
      name: "Jane Smith",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      rating: 5,
    },
    {
      image: testicon,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 4,
    },
    {
      image: testicon,
      name: "Jane Smith",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      rating: 5,
    },
    
  ];

 
  

  return (
    <section className="flex flex-col items-center mt-16">
      <h1 className="font-pinyon text-6xl mb-10">Testimonials</h1>
      <div className="relative h-72 w-full overflow-hidden">
        <div className="animate-marquee flex gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          display: flex;
          width: 200%; /* To create space for a seamless loop */
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
