import capture1 from "../Images/capture1.png";
import capture2 from "../Images/capture2.png";

const CaptureMemories = () => {
  return (
    <section className="captureMemories my-10">
      <div className="flex h-[500px] rounded-lg md:px-20 px-3 bg-bgSecond  items-center overflow-hidden">
       
        <div className="md:w-[200px] hidden md:block lg:w-[450px] lg:h-[490px] mt-10 -ml-10">
          <img src={capture1} alt="Image 1"  />
        </div>

        
        <div className="text-center lg:w-[550px] w-full mx-auto  text-white">
          <h1 className="text-5xl  mb-5 lg:leading-[60px] leading-[50px] font-pinyon md:font-rig-solid">
            Capture Memories with Style
          </h1>
          <p className="font-baskerville text-lg leading-5">
            Elevate your event with the ultimate photo booth experience! Our
            cutting-edge photobooth combines sleek design and interactive
            technology, captivating guests with vibrant animations and an
            intuitive touch-screen interface. More than just a photobooth, it’s
            a fun and memorable centerpiece for any occasion.
          </p>
          <button className="text-textCol bg-bgPrimary hover:text-textCol hover:bg-bgSecond text-base px-8 rounded-sm py-2.5 border-2 mt-5 font-medium border-transparent hover:border-textCol duration-300">Learn More</button>
        </div>

       
        <div className="md:w-[200px] hidden md:block mt-40 lg:w-[250px] ml-24 -mr-15" >
          <img src={capture2} alt="Image 2" />
        </div>
      </div>
    </section>
  );
};

export default CaptureMemories;
