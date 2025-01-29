import { NavLink } from "react-router"
import youtube from "../Images/youtube.png"
import Pinterst from "../Images/Pinterst.png"
import linkedin from "../Images/linkedin.png"
import instagram from "../Images/instagram.png"


const Footer = () => {
  return (
    <footer className="bg-textCol">
        <h1 className="lg:text-[180px] pl-3 pr-10 md:text-9xl text-5xl pt-5 font-rig-solid text-white lg:text-center md:text-center tracking-widest">FOTOROO</h1>
        <div className="flex justify-between lg:px-64 md:px-36 pl-5 flex-col md:flex-row text-white text-lg font-baskerville">
            <div className="py-5 md:py-0">
                <p>johndoe@gmail.com</p>
                <p>+12 345677889</p>
                <p>Address, Address, 123456</p>
            </div>
            <div className=" flex flex-col uppercase py-5 md:py-0">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/packages">Packages</NavLink>
                <NavLink to="/backdrop">Backdrop</NavLink>
                
                <NavLink to="/aboutus">About US</NavLink>
            </div>
            <div>
                <h2>FOLLOW ALONG</h2>
                <div className="flex gap-3 md:mt-4 py-5 md:py-0">
                <img src={Pinterst} className="size-8" alt="Pinterst icon" />
                <img src={linkedin} className="size-8" alt="linkedin icon" />
                <img src={instagram} className="size-8" alt="instagram icon" />
                <img src={youtube} className="size-8" alt="youtube icon" />
                </div>
            </div>

        </div>
        <p className="text-white text-lg font-baskerville text-center py-5">All Rights Reserved By @Fotoroo</p>
    </footer>
  )
}

export default Footer