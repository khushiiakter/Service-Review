import logo2 from "../assets/logo2.png"
const Footer = () => {
  return (
    <footer className="  bg-black text-neutral-content py-10 max-w-full">
      <div className="footer mx-auto px-5 container  grid grid-cols-1 md:grid-cols-4 gap-10">
        <nav className="flex flex-col items-center">
        <img src={logo2} className="w-16 text-center" alt="" />
          <a className="  gap-1 md:text-2xl font-bold">
            Service Review</a>
        </nav>
        <nav>
          <h6 className="footer-title">Explore</h6>
          <a className="link link-hover">All Services</a>
          <a className="link link-hover">Top Rated Services</a>
          <a className="link link-hover">Category</a>
          <a className="link link-hover">Recently Reviewed</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
      <div className="mt-8 text-center">
        
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Service Review System. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
