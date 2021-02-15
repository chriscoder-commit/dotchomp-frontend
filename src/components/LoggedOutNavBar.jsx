import React from "react";
import { Nav, NavLink } from "../styles/NavBar";


// this is for users who are logged out. you need to sign in to view protected routes 
export function LoggedOutNavBar() {
return (
<Nav>
    <NavLink to="/sign-in">Login</NavLink>
    <NavLink to="/sign-up">Sign Up</NavLink>
</Nav>
);
}