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
        <img src={explore} alt="explore image" className="w-[456px]" />
        <div className="lg:w-[26rem] w-full mr-10">
            <h2 className="lg:pb-7 py-5 text-2xl">Lorem Ipsum Dolor</h2>
        <p className="text-lg ">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
        </p>
        <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="flex lg:flex-row my-10 flex-col-reverse lg:justify-evenly lg:items-center lg:mt-10">
       
        <div className="lg:w-[26rem] w-full mr-10">
            <h2 className="lg:pb-7 py-5 text-2xl">Lorem Ipsum Dolor</h2>
        <p className="text-lg ">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
        </p>
        <button className="btn">Learn More</button>
        </div>
        <img src={explore} alt="explore image" className="w-[456px]" />
      </div>
      <div className="flex lg:flex-row flex-col lg:justify-evenly lg:mt-10">
        <img src={explore} alt="explore image" className="w-[456px]" />
        <div className="lg:w-[26rem] w-full lg:mr-10">
            <h2 className="lg:pb-7 py-5 text-2xl">Lorem Ipsum Dolor</h2>
        <p className="text-lg ">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
        </p>
        <button className="font-poppins text-white block md:hidden mx-auto  bg-textCol hover:text-textCol2 hover:bg-white  text-base px-8 rounded-sm py-2.5 border-2 mt-5 font-medium border-transparent hover:border-textCol duration-300">Learn More</button>
        </div>
      </div>
      </div>
      
    </section>
  );
};

export default ExploreOurBooths;
