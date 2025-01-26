import HomeImage from "../Images/HomeImage.png";
import packageImage from "../Images/packageImage.png";
import explore1 from "../Images/exploreImages/explore1.png"
import explore2 from "../Images/exploreImages/explore2.png"
import explore3 from "../Images/exploreImages/explore3.png"
import explore4 from "../Images/exploreImages/explore4.png"
import explore5 from "../Images/exploreImages/explore5.png"
import explore6 from "../Images/exploreImages/explore6.png"
import explore7 from "../Images/exploreImages/explore7.png"
import explore8 from "../Images/exploreImages/explore8.png"
import explore9 from "../Images/exploreImages/explore9.png"

const Backdrop = () => {
    const Backdrops = [
      { id:1,name: "Mirror Booth", price: "$200", image: explore1 },
      { id:2,name: "Mirror Booth", price: "$250", image: explore2 },
      { id:3,name: "Mirror Booths", price: "$300", image: explore3 },
      { id:4,name: "Mirror Booths", price: "$300", image: explore4 },
      { id:5,name: "Mirror Booths", price: "$300", image: explore5 },
      { id:6,name: "Mirror Booths", price: "$300", image: explore6 },
      { id:7,name: "Mirror Booths", price: "$300", image: explore7 },
      { id:8,name: "Mirror Booths", price: "$300", image: explore8 },
      { id:9,name: "Mirror Booths", price: "$300", image: explore9 },

    ];
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
              <div className=" hidden md:flex md:w-[90%] gap-10 mx-auto">
                <img src={packageImage} alt="" className="hidden md:block md:w-auto w-10 " />
                <div className="flex-col px-7 md:w-auto py-5 rounded-xl lg:text-lg text-white font-baskerville bg-bgSecond">
                <p>Transform your special moments into timeless treasures with FotoRoo’s premium photo booth packages. Enjoy unlimited photos and videos throughout your event, with seamless setup and pack-down handled by our dedicated team. From elegant backdrops to trendy props, we bring everything you need to create stunning, high-quality images that your guests will cherish forever. Our state-of-the-art booths, including DSLR, Mirror, and 360 options, are fully customizable to match your event’s theme, ensuring a truly personalized experience. Serving Sydney, Blue Mountains, and Wollongong, FotoRoo takes pride in delivering a seamless, stress-free service that makes your event unforgettable. See why we’re the trusted choice for weddings, parties, and corporate events.</p>
                <p className="mt-2">*We offer free of charge travel within Sydney. Bookings outside Sydney will incur a travel charge*</p>
                </div>
                
              </div>

              <div className="my-10">
        <h1 className="text-center my-5 text-4xl md:text-6xl font-pinyon">Explore Our Booths</h1>
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
                className="w-auto md:h-96 object-cover  rounded-lg overflow-hidden "
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{booth.name}</h3>
              <p className="text-gray-600 mb-4">{booth.price}</p>
              <button
                className="btn block"
            
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>

    </section>
  )
}

export default Backdrop