import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import BookNow from "./BookNow";

const Layout = () => (
  <div className="bg-bgPrimary">
  <div className=" px-3 md:px-7 font-poppins w-full">
   <Header/>
    <main className="z-0">
      <Outlet />
    </main>
    </div>
    <BookNow/>
    <Footer/>
  </div>
);

export default Layout;
