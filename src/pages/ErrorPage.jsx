import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center bg-white h-screen gap-10 flex flex-col items-center mt-20">
         
          <h1 className="text-9xl font-extrabold">404</h1>
          <h3 className="text-3xl font-semibold">Page not found.</h3>
          
          <Link to = "/" className='btn btn-outline'>Go back to home</Link>
        </div>
    );
};

export default ErrorPage;