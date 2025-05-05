import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";   
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
export const router = createBrowserRouter([
  {
    path: "/",

    element: <Root></Root>,
    
   children: [
    {
        index: true,
        path : "/",
        element  : <Home></Home>
    }
   ]
  }
])
