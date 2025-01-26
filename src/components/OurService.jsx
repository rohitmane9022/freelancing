import Sydney from "../Images/Sydney.png";
import BluuMountains from "../Images/BluuMountains.png";
import Wollongong from "../Images/Wollongong.png";

const OurService = () => {
  const destinations = [
    {
      name: "Sydney",
      image: Sydney,
    },
    {
      name: "Wollongong",
      image: Wollongong,
    },
    {
      name: "Blue Mountains",
      image: BluuMountains,
    },
  ];

  return (
    <section className="ourservice flex flex-col my-10 items-center w-full">
      <div>
        <h1 className="font-pinyon text-4xl text-textCol lg:text-6xl">Our Servicing Areas</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:px-24 w-full mt-10">
        {destinations.map((destination) => (
          <div
            className="text-center p-5 bg-white shadow-md rounded-lg"
            key={destination.name}
          >
            <div className="overflow-hidden rounded-md">
              <img
                src={destination.image}
                alt="destination Image"
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
