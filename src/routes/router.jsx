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
        //   loader: () => fetch('https://assignmet-10-server.vercel.app/movies')
        },
        {
          path: "/add-service",
        //   element: <PrivateRoute><AddService></AddService></PrivateRoute>,
          element:<PrivateRoute><AddService></AddService></PrivateRoute> ,
        },
        {
          path: "/myReviews",
          element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute> ,
         
        },
        // {
        //   path: "",
        //   element: <PrivateRoute><UpdateMovie></UpdateMovie></PrivateRoute>,
        //   loader:  ({ params }) =>  fetch(`/movies/${params.id}`).then(res => res.json()),
                  
        // },
        {
          path: "/service-details",
          element:<PrivateRoute><ServiceDetail></ServiceDetail></PrivateRoute> ,
         
        //   element: <PrivateRoute><MovieDetails></MovieDetails></PrivateRoute>,
        //   loader: ({params}) =>
        //      fetch(`https://assignmet-10-server.vercel.app/movies/${params.id}`),
            
          
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