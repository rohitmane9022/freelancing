import explore from "../Images/explore.png"



const ExploreOurBooths = () => {
  return (
    <section className="my-10 lg:px-20 ">
      <div>
        <h1 className="text-3xl lg:text-6xl lg:font-pinyon font-rig-solid  md:text-black text-center mb-10">
          Explore our Booths
        </h1>
      </div>
      <div className="font-baskerville">
      <div className="flex lg:flex-row flex-col lg:justify-evenly">
        <img src={explore} alt="explore image" className="md:w-[456px]" />
        <div className="lg:w-[26rem] w-full mr-10">
            <h2 className="lg:pb-7 py-5 text-2xl">Mirror Boot</h2>
        <p className="text-lg ">
        Your Reflection, Redefined! A statement piece, a conversation starter, and a photo booth like no other. 
Snap, sign, and shine with custom overlays and instant prints. Step up, strike a pose, and watch the magic unfold! 

        </p>
        <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="flex lg:flex-row my-10 flex-col-reverse lg:justify-evenly lg:items-center lg:mt-10">
       
        <div className="lg:w-[26rem] w-full mr-10">
            <h2 className="lg:pb-7 py-5 text-2xl">DSLR Booth</h2>
        <p className="text-lg ">Timeless, Frame by Frame! Crisp, clear, and classic. Our DSLR Booth delivers studio-quality snapshots with a touch of fun. Strike a pose, choose your backdrop, and let the pro-grade camera do the rest—because every detail deserves to shine.
        </p>
        <button className="btn">Learn More</button>
        </div>
        <img src={explore} alt="explore image" className="md:w-[456px]" />
      </div>
      <div className="flex lg:flex-row flex-col lg:justify-evenly lg:mt-10">
        <img src={explore} alt="explore image" className="md:w-[456px]" />
        <div className="lg:w-[26rem] w-full lg:mr-10">
            <h2 className="lg:pb-7 py-5 text-2xl">360 Booth</h2>
        <p className="text-lg "> Every Angle, Every Moment! Why take one shot when you can have them all? Step onto the platform, let the camera spin, and capture the magic in motion. Slow-mo, boomerang, or a full cinematic spin—your moment, your way.
        </p>
        <button className="font-poppins text-white block md:hidden mx-auto  bg-textCol hover:text-textCol2 hover:bg-white  text-base px-8 rounded-sm py-2.5 border-2 mt-5 font-medium border-transparent hover:border-textCol duration-300">Learn More</button>
        </div>
      </div>
      </div>
      
    </section>
  );
};

export default ExploreOurBooths;
