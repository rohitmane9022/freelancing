import HomeImage from "../Images/HomeImage.png";
import PackageImage from "../Images/PackageImage.png";
import explorepackage from "../Images/explorepackage.png";
import { useNavigate } from "react-router-dom";

const booths = [
  { id:1,name: "DSLR Booth", price: "$200", image: explorepackage },
  { id:2,name: "Mirror Booth", price: "$250", image: explorepackage },
  { id:3,name: "360 Booths", price: "$300", image: explorepackage },
];

const addons = [
  { id:1,name: "DSLR Booth", price: "$300", image: explorepackage },
  { id:2,name: "Mirror Booth", price: "$350", image: explorepackage },
];


const Packages = () => {
 
  const navigate = useNavigate();

  const handleLearnMore = (id) => {
    navigate(`/packages/${id}`);
  };
  return (
    <section className="mx-auto w-full">
      <div className="relative"> 
        <img
          src={HomeImage}
          className="md:w-[1500px]  my-5 md:h-[400px] h-[350px] flex justify-center overflow-hidden z-0"
          alt="Home Image"
        />
        <p className="absolute inset-0 flex items-center md:text-8xl font-baskerville font- md:font-pinyon justify-center  text-white text-3xl ">
          Our <span className="font-baskerville uppercase md:pl-3 pl-1 md:text-7xl">Packages</span>
        </p>
      </div>
      <div className="flex md:w-[90%] gap-10 mx-auto">
        <img src={PackageImage} alt="" className="hidden md:block md:w-auto w-10 " />
        <div className="flex-col px-7 md:w-auto py-5 rounded-xl lg:text-lg text-white font-baskerville bg-bgSecond">
        <p>Transform your special moments into timeless treasures with FotoRoo’s premium photo booth packages. Enjoy unlimited photos and videos throughout your event, with seamless setup and pack-down handled by our dedicated team. From elegant backdrops to trendy props, we bring everything you need to create stunning, high-quality images that your guests will cherish forever. Our state-of-the-art booths, including DSLR, Mirror, and 360 options, are fully customizable to match your event’s theme, ensuring a truly personalized experience. Serving Sydney, Blue Mountains, and Wollongong, FotoRoo takes pride in delivering a seamless, stress-free service that makes your event unforgettable. See why we’re the trusted choice for weddings, parties, and corporate events.</p>
        <p className="mt-2">*We offer free of charge travel within Sydney. Bookings outside Sydney will incur a travel charge*</p>
        </div>
        
      </div>
      <div className="my-10">
        <h1 className="text-center my-5 text-4xl md:text-6xl font-rig-solid">Explore Our Booths</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {booths.map((booth) => (
          <div
            key={booth.id}
            className="text-center mx-auto flex flex-col items-center justify-center"
          >
            <div className="mx-auto">
              <img
                src={booth.image}
                alt={booth.name}
                className="w-80 h-96 object-cover  rounded-lg overflow-hidden "
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{booth.name}</h3>
              <p className="text-gray-600 mb-4">{booth.price}</p>
              <button
                className="btn block"
                onClick={() => handleLearnMore(booth.id)}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>

      <h2 className="text-4xl md:text-6xl font-pinyon text-center mb-8">Add Ons</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {addons.map((addon) => (
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
        ))}
      </div>
  
      
    </section>
  );
};

export default Packages;
