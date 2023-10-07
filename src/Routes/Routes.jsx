import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Service from "../Pages/Service/Service";
import Contact from "../Pages/Contact/Contact";
import Blog from "../Pages/Blog/Blog";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: ()=> fetch("myData.json")
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
        }
      ]
    },
  ]);

  export default router;
