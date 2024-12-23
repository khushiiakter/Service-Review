import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Services from "../pages/Services";
import AddService from "../pages/AddService";
import MyReviews from "../pages/MyReviews";
import ServiceDetail from "../pages/ServiceDetail";
import AuthLayouts from "../layouts/AuthLayouts";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import MyServices from "../pages/MyServices";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
    //   errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        //   loader: () => fetch('https://assignmet-10-server.vercel.app/top-rated-movies')
        },
        {
          path: "/services",
          element: <Services></Services>,
          loader: () => fetch('http://localhost:5000/services')
        },
        {
          path: "/my-services",
          element: <MyServices></MyServices>,
        
        },
        {
          path: "/add-service",
        
          element:<PrivateRoute><AddService></AddService></PrivateRoute> ,
        },
        {
          path: "/myReviews",
          element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute> ,
         
        },
        
        {
          path: "/service-details/:id",
          element:<PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute> ,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),

             
          
        },
        {
          path: "/aboutUs",
          element: <h1>about us</h1> ,
         
          
        },
        
        {
          path: "/auth",
          element: <AuthLayouts></AuthLayouts>,
          children: [
            {
              path: "/auth/login",
              element: <Login></Login>
            },
            {
              path: "/auth/register",
              element: <Register></Register>,
            },
          ]
        }
        
      ]
    },
  ]);
export default router;