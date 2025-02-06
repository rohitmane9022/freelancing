import  Medium1 from "../Images/Medium1.png";
import packageImage from "../Images/packageImage.png";
import explore1 from "../Images/exploreImages/explore1.png";
import explore2 from "../Images/exploreImages/explore2.png";
import explore3 from "../Images/exploreImages/explore3.png";
import Golden from "../Images/backdrops/Golden.png";
import Golden4 from "../Images/backdrops/Golden4.png";
import Golden5 from "../Images/backdrops/Golden5.png";
import Rose from "../Images/backdrops/Rose.png";
import Silver from "../Images/backdrops/Silver.png";
import Symphony from "../Images/backdrops/Symphony.png";
import { useNavigate } from "react-router";

const Backdrop = () => {
  const navigate = useNavigate();
  const Backdrops = [
    { id: 1, name: "Mirror Booth", price: "8x8ft", image: explore1 },
    { id: 2, name: "Mirror Booth", price: "8x8ft", image: explore2 },
    { id: 3, name: "Mirror Booths", price: "8x8ft", image: explore3 },
    { id: 4, name: "Mirror Booths", price: "8x8ft", image: Golden },
    { id: 5, name: "Mirror Booths", price: "8x8ft", image: Golden4 },
    { id: 6, name: "Mirror Booths", price: "8x8ft", image: Golden5 },
    { id: 7, name: "Mirror Booths", price: "8x8ft", image: Rose },
    { id: 8, name: "Mirror Booths", price: "8x8ft", image: Silver },
    { id: 9, name: "Mirror Booths", price: "8x8ft", image: Symphony },
  ];
  return (
    <section className="mx-auto w-full">
      <div className="relative">
        <img
          src={Medium1}
          className="md:w-[1500px] rounded-lg  hover:scale-110 transition-transform duration-300  my-5 md:h-[400px] h-[350px] flex justify-center  z-0"
          alt="Home Image"
        />
        <p className="absolute inset-0 flex items-center md:text-8xl font-baskerville font- md:font-pinyon justify-center  text-white text-3xl ">
          Our{" "}
          <span className="font-baskerville uppercase md:pl-3 pl-1 md:text-7xl">
            Backdrop
          </span>
        </p>
      </div>
      <div className=" hidden md:flex md:w-[90%] gap-10 mx-auto">
        <img
          src={packageImage}
          alt=""
          className="hidden md:block md:w-auto w-10 "
        />
        <div className="flex-col px-7 md:w-auto py-5 rounded-xl lg:text-lg text-white font-baskerville bg-bgSecond">
          <p>
            At FotoRoo, we offer a stunning range of backdrops to elevate your
            photo booth experience. From elegant designs to vibrant themes, our
            backdrops are carefully curated to complement any event style.
            Whether you &apos;re planning a wedding, party, or corporate event, our
            versatile options ensure the perfect setting for unforgettable
            photos. Let us help you create a picture-perfect backdrop for your
            special moments!
          </p>
          
        </div>
      </div>

      <div className="my-10">
        <h1 className="text-center my-5 text-4xl md:text-6xl font-pinyon">
          Explore Our Booths
        </h1>
        <div className="grid px-2 md:px-0 grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {Backdrops.map((booth) => (
            <div
              key={booth.id}
              className="text-center mx-auto flex flex-col items-center justify-center"
            >
              <div className="mx-auto">
                <img
                  src={booth.image}
                  alt={booth.name}
                  className="w-auto md:h-96 object-cover hover:scale-110 transition-transform duration-300  rounded-lg overflow-hidden "
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{booth.name}</h3>
                <p className="text-gray-600 mb-4">{booth.price}</p>
                <button
                  className="btn block"
                  onClick={() => navigate("/enquire")}
                >
                  Enquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Backdrop;
