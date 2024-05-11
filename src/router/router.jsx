import { createBrowserRouter } from "react-router-dom";
import Layot from "../layot/Layot";
import Home from "../Pages/Home";
import Alamin from "../Pages/Alamin";
import Alal from "../Pages/Alal";




export const router=createBrowserRouter([{
    path:"/",
    element:<Layot></Layot>,
    children:[
        {path:"/",
            element:<Home></Home>
    },
    {
        path:"/alamineyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
        element:<Alamin></Alamin>
    },
    {
        path:"/alaleyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
        element:<Alal></Alal>
    }
    ]
}])