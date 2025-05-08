import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";   
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Bills from "../pages/Bills/Bills";
import BillsCard from "../pages/BillsCard/BillsCard";
import BillsDetails from "../pages/BillsDetails/BillsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import MyProfile from "../pages/MyProfile/MyProfile";
import ForgetPass from "../pages/ForgetPass/ForgetPass";


export const router = createBrowserRouter([
  {
    path: "/",

    element: <Root></Root>,
    
   children: [
    {
        index: true,
      
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
        path: "/forget",
        element: <ForgetPass></ForgetPass>
      },
      {
        path: "/bills",
        element: (<PrivateRoute><Bills></Bills></PrivateRoute>),
        loader : () => fetch("/data.json")
      },
      {
        path: "/billsdetails/:id",
        element: (<PrivateRoute><BillsDetails></BillsDetails></PrivateRoute>),
        loader : () => fetch("/data.json")
      },{
        path: "/profile",
        element:(<PrivateRoute><MyProfile></MyProfile></PrivateRoute>),
      }
   ]
  }
])
