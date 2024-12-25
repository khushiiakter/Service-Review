import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";

const MainLayouts = () => {
  return (
    <div>
      <nav className="md:px-6 bg-base-100 container mx-auto sm:-px-4">
       <Navbar></Navbar>
      </nav>

      <section className=" min-h-screen">
        <Outlet></Outlet>
      </section>

      <Footer></Footer>
      <Toaster />
    </div>
  );
};

export default MainLayouts;
