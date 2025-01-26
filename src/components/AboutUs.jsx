import packageImage from "../Images/packageImage.png";

const AboutUs = () => {
  return (
    <section>
      <h1 className="text-textCol md:text-8xl text-5xl text-center font-pinyon my-10">
        About <span className="font-baskerville">US</span>
      </h1>
      <div className="flex md:flex-row flex-col-reverse  gap-4 mx-auto">
        <div className="flex-col px-7 md:w-full text-bgSecond rounded-xl lg:text-lg  ">
          <h2 className="text-[25px] leading-8">
            AT FOTOROO, WE BELIEVE EVERY EVENT DESERVES A TOUCH OF MAGIC AND
            MEMORIES THAT LAST A LIFETIME.
          </h2>
          <p className="md:mt-7 my-3">
            With our passion for creating unforgettable experiences, we’re here
            to ensure your celebration stands out. Whether it’s a wedding,
            birthday, corporate event, or any special occasion, our photo booths
            are designed to bring joy, laughter, and unique keepsakes for you
            and your guests. We proudly serve Sydney, Blacktown, and surrounding
            areas, offering modern photo booth technology, personalized
            overlays, and a wide range of backdrops to complement your theme.
            Our team is dedicated to making the process seamless and
            stress-free, so you can focus on enjoying your big day. Reach out to
            us today to start planning your picture-perfect event. We can’t wait
            to be a part of your special moments!
          </p>
        </div>
        
        <img
          src={packageImage}
          alt=""
          className="md:w-full h-96 "
        />
     
      </div>
    </section>
  );
};

export default AboutUs;
