import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";

const MainLayouts = () => {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Service Review</title>
        </Helmet>
        <div className="w-full   backdrop-blur-3xl fixed z-30">
          <Navbar></Navbar>
        </div>

        <section className=" min-h-screen">
          <Outlet></Outlet>
        </section>

        <Footer></Footer>
        <Toaster />
      </div>
    </HelmetProvider>
  );
};

export default MainLayouts;
