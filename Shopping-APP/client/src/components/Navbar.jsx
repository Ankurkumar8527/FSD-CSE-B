import React from "react";
import { Link } from "react-router-dom";
const navbar = ()=>{
    return 
    (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/cart'>View cart</Link>
            <Link to='/cart'>View order</Link>
             
        </div>
    )
}
export default Navbar;