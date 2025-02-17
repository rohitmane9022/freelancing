import Ourbomb from "../Images/OurBomb.png";


const OurBomb = () => {
  return (
    <section className="flex lg:justify-between md:gap-20 lg:flex-row flex-col lg:items-center lg:px-24 w-full my-10">
      <div className="text-center md:text-start" >
        <h1 className="md:text-[55px] md:uppercase font-pinyon text-5xl md:font-rig-solid">Our Bomb Fotoroo</h1>
        <p className="border-b border-black md:w-[640px] my-4"/>
        <div className="text-textCol lg:text-xl text-base font-p  laywrite font-medium">
          
          <p className="my-4 ">
            At FotoRoo, we turn your celebrations into unforgettable
            masterpieces. Every moment is a story, and we’re here to help you
            capture and share it for a lifetime
          </p>
          <p className="my-4">With a passionate team of professionals and all-inclusive packages, we promise a seamless, stress-free experience tailored just for you.</p>
          <p className="my-4">From elegant mirror booths to versatile <span className="font-semibold">DSLR</span>  booths and the immersive 360 booths, FotoRoo brings state-of-the-art technology to your event, delivering high-definition imagery and an array of interactive features that wow your guests.</p>
          
        </div>
        {/* <button className="text-bgPrimary bg-textCol hover:text-textCol hover:bg-bgPrimary text-base px-8 rounded-sm py-2 border-4 font-medium border-transparent hover:border-textCol duration-300">Learn More</button> */}
      </div>
      <div className="lg:w-[1900px] mx-auto mt-10 md:my-0">
        <img src={Ourbomb} alt="Bomb Image" />
      </div>
    </section>
  );
};

export default OurBomb;
