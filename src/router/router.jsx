import { createBrowserRouter } from "react-router-dom";
import Layot from "../layot/Layot";
import Home from "../Pages/Home";




export const router=createBrowserRouter([{
    path:"/",
    element:<Layot></Layot>,
    children:[
        {path:"/",
            element:<Home></Home>
    }
    ]
}])