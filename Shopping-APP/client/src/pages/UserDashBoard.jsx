import React from "react";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";
const UserDashBoard = ()=>{
    return 
    (
        <div>
            <h1>User DashBoard</h1>
            <Navbar/>
            <Outlet/>
        </div>
    )
}
export default UserDashBoard;