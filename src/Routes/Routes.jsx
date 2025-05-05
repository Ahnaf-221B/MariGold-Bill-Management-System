import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";   
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Bills from "../pages/Bills/Bills";
import BillsCard from "../pages/BillsCard/BillsCard";

export const router = createBrowserRouter([
  {
    path: "/",

    element: <Root></Root>,
    
   children: [
    {
        index: true,
        path : "/",
        element  : <Home></Home>
    },
    {
        path: "login",
       element: <Login></Login>
      },
      {
        path : "/register",
       element : <Register></Register>
      },
      {
        path: "/bills",
        element: <Bills></Bills>,
        loader : () => fetch("/data.json")
      }
   ]
  }
])
