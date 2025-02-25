import Package from "../Images/Package.png";
import packageImage from "../Images/packageImage.png";
import explorepackage from "../Images/explorepackage.png";
import { useNavigate } from "react-router-dom";
import AddOns from "./AddOns";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useState } from "react";

const booths = [
  {
    id: 1,
    name: "DSLR Booth",
    price: "$200",
    description:
      "Perfect for capturing high-quality, professional-grade photos.",
    content: `Experience the best in DSLR technology, ensuring your moments are captured with stunning clarity. This booth is equipped with advanced lenses and lighting to give your photos a studio-quality feel. Ideal for weddings, corporate events, and parties that demand perfection.`,
    image: explorepackage,
  },
  {
    id: 2,
    name: "Mirror Booth",
    price: "$250",
    description: "Interactive and fun, perfect for all types of events.",
    content: `The Mirror Booth combines the latest tech with interactive fun. Your guests can strike a pose, add their signatures, and even use fun animations. A hit for weddings and events, this booth guarantees engagement and laughter.`,
    image: explorepackage,
  },
  {
    id: 3,
    name: "360 Booths",
    price: "$300",
    description: "Capture every angle with our 360-degree video booth.",
    content: `Step into the future with our 360 Booth, which captures dynamic and immersive videos from every angle. Perfect for creating unforgettable content that your guests will love to share on social media.`,
    image: explorepackage,
  },
  {
    id: 4,
    name: "Magazine Booth",
    price: "$300",
    description: "Feel like a cover star with this glamorous booth.",
    content: `Turn your guests into stars with the Magazine Booth. This setup creates stunning, magazine-worthy shots that make every attendee feel like a celebrity. A glamorous addition to any event.`,
    image: explorepackage,
    inclusions: [
      "A Photo Booth Attendant",
      "Trendy Props",
      "LED Lighting",
      "Bollards and Red Carpet",
      "Delivery and Setup",
      "Online Gallery",
    ],
  },
];

const Packages = () => {
  const navigate = useNavigate();

  const [selectedBooth, setSelectedBooth] = useState(null);

  const handleLearnMore = (id) => {
    navigate(`/packages/${id}`);
  };
  return (
    <section className="mx-auto w-full">
      <div className="relative">
        <img
          src={Package}
          className="md:w-[1500px] rounded-lg   my-5 md:h-[400px]  flex justify-center overflow-hidden z-0"
          alt="Home Image"
        />
        <p className="absolute inset-0 flex items-center md:text-8xl font-baskerville font- md:font-pinyon justify-center  text-white text-3xl ">
          Our{" "}
          <span className="font-baskerville uppercase md:pl-3 pl-1 md:text-7xl">
            Packages
          </span>
        </p>
      </div>
      <div className="flex md:w-[90%] gap-10 mx-auto">
        <img
          src={packageImage}
          alt=""
          className="hidden md:block md:w-auto w-10 "
        />
        <div className="flex-col px-7 md:w-auto py-5 rounded-xl lg:text-lg text-white font-baskerville bg-bgSecond">
          <p>
            Capture timeless moments with FotoRoo’s premium photo booth
            packages, including our unique Magazine Booth. Enjoy unlimited
            photos and videos, seamless setup, and customizable booths (DSLR,
            Mirror, 360, and Magazine) tailored to your event theme.
          </p>
          <p className="mt-2">
          Serving Sydney, Blue Mountains, and Wollongong. 
          </p>
          <p className="mt-2">
          Free travel within Sydney; additional charges apply outside.
          </p>
        </div>
      </div>
      <div className="container mx-auto">
        <h1 className="text-center my-14 text-4xl md:text-6xl font-rig-solid">
          Explore Our Packages
        </h1>
        <div className="mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl">
          {booths.map((booth) => (
            <Card
              key={booth.id}
              className="flex flex-col overflow-hidden border-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={booth.image || "/placeholder.svg"}
                  alt={booth.name}
                  className="object-cover h-full w-full transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="flex flex-col items-start">
                <CardTitle className="text-xl font-bold mb-2">
                  {booth.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground italic mb-2">
                  {booth.description}
                </p>
                <p className="text-base font-semibold">{booth.price}</p>
              </CardHeader>
              {/* Ensure CardContent fills the remaining space */}
              <CardContent className="flex-grow flex flex-col justify-between">
                <div className="prose max-w-none text-sm mb-4">
                  {booth.content.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-2">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {booth.inclusions && booth.id === 4 && (
                  <div>
                    <button
                      className="text-blue-600 mt-2"
                      onClick={() =>
                        setSelectedBooth(
                          selectedBooth === booth.id ? null : booth.id
                        )
                      }
                    >
                      {selectedBooth === booth.id
                        ? "Hide Inclusions"
                        : "Show Inclusions"}
                    </button>
                    {selectedBooth === booth.id && (
                      <ul className="list-disc pl-5 mt-2 text-sm">
                        {booth.inclusions.map((inclusion, index) => (
                          <li key={index}>{inclusion}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
                {/* Button is pushed to the bottom */}
                <button
                  className="btn block w-full mt-auto"
                  onClick={() => handleLearnMore(booth.id)}
                >
                  Learn More
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <h2 className="text-4xl md:text-6xl font-pinyon text-center mb-8">
        Add Ons
      </h2>
      <div className="grid ">
        {/* i remove this */}
        {/* {addons.map((addon) => ( 
          <div
            key={addon.id}
            className="text-center mx-auto flex flex-col items-center justify-center"
          >
            <div className="mx-auto">
              <img
                src={addon.image}
                alt={addon.name}
                 className="w-80 h-96 object-cover  rounded-lg overflow-hidden "
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{addon.name}</h3>
              <p className="text-gray-600 mb-4">{addon.price}</p>
              <button
                className="btn"
                onClick={() => handleLearnMore(addon.id)}
              >
                Learn More
              </button>
            </div>
          </div>
        ))} */}

        <AddOns />
      </div>
    </section>
  );
};

export default Packages;
