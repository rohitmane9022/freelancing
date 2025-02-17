import { useParams } from "react-router"
import HomeImage from "../../Images/HomeImage.png";
import packagedetail1 from "../../Images/packagedetail1.png";
import packagedetail2 from "../../Images/packagedetail2.png";
import packagedetail3 from "../../Images/packagedetail3.png";
import { useEffect } from "react";


const items = [
    {
      id: 1,
      name: "DSLR",
      price: "$200",
      details: [
        {
          title: "Photo Booth Attendant",
          paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          imageURL: packagedetail1
        },
        {
          title: "Unlimited 2x Photo Strips",
          paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          imageURL: packagedetail2
        },
        {
          title: "Another Example Title",
          paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          imageURL: packagedetail3
        }
      ]
    },
    {
      id: 2,
      name: "Mirror",
      price: "$250",
      details: [
        {
          title: "Photo Booth Attendant",
          paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          imageURL: packagedetail1
        },
        {
          title: "Unlimited 2x Photo Strips",
          paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          imageURL: packagedetail2
        },
        {
          title: "Another Example Title",
          paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          imageURL: packagedetail3
        }
      ]
    },
    {
      id: 3,
      name: "360 Booth",
      price: "$300",
      details: [
        {
          title: "Photo Booth Attendant",
          paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          imageURL: packagedetail1
        },
        {
          title: "Unlimited 2x Photo Strips",
          paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          imageURL: packagedetail2
        },
        {
          title: "Another Example Title",
          paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          imageURL: packagedetail3
        }
      ]
    },
    {
      id: 4,
      name: "Magazine Booth",
      price: "$300",
      details: [
        {
          title: "Photo Booth Attendant",
          paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          imageURL: packagedetail1
        },
        {
          title: "Unlimited 2x Photo Strips",
          paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          imageURL: packagedetail2
        },
        {
          title: "Another Example Title",
          paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          imageURL: packagedetail3
        }
      ]
    }
  ];

 


const PackageDetails = () => {
    const {id}= useParams()
    console.log(id)
  const filterValue= items.filter(item=> item.id===Number(id))
  console.log(filterValue)

 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="PackageDetails">
            {filterValue.map((packItem=>(
                <div key={packItem.id}>
                    <div className="relative"> 
                    <img
                      src={HomeImage}
                      className="md:w-[1500px]  my-5 md:h-[400px] h-[350px] flex justify-center overflow-hidden z-0"
                      alt="Home Image"
                    />
                    <p className="absolute inset-0 flex items-center md:text-8xl font-baskerville tracking-tighter justify-center  text-white text-3xl ">
                      {packItem.name} <span className="font-pinyon md:pl-3 pl-1 md:text-8xl mt-4 tracking-tight">Booth</span>
                    </p>
                  </div>
                  <div>
                  {packItem.details.map(((item,index)=>(
                    < >
                    <div key={item.paragraph} className={`flex flex-col justify-center sm:px-24 md:flex-row ${
                        index % 2 === 0 ? "md:flex-row-reverse md:items-center flex-col-reverse" : "md:flex-row md:items-center flex-col-reverse" 
                      }`}>
                        <div className="md:w-2/5 mx-auto text-center md:text-start my-9 md:my-0">
                        <h2 className="text-xl my-4 md:text-4xl font-rig-solid">{item.title}</h2>
                        <p className="font-courgette font-medium md:text-lg leading-5 text-textCol md:w-4/5">{item.paragraph}</p>
                        </div>
                        <div className="md:w-2/4 ">
                        <img src={item.imageURL} alt={item.title} className="w-full object-cover" /></div>
                    </div>
                    </>
                  )))}
                  </div>
                </div>
            )))}
    </section>
  )
}

export default PackageDetails