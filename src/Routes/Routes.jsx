import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Service from "../Pages/Service/Service";
import Contact from "../Pages/Contact/Contact";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import HomeData from './../Pages/Home/HomeData';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/homeData",
        element: <HomeData></HomeData>,
        loader: () => fetch("myData.json")
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/service",
        element: <Service></Service>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
      {
        path: "/serviceDetail/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader:()=> fetch('myData.json')
      }
    ]
  },
]);

export default router;
