import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";

const Navbar = () => {
   return (
      <nav className="navbar">
         <Link
            to="/"
            style={{
               alignItems: "center",
               justifyContent: "center",
               display: "inline-flex",
            }}>
            <img src={logo} width="50" />
            <span style={{ fontSize: "30px", marginLeft: "10px" }}>
               MoneyPlant
            </span>
         </Link>
         <Fragment>
            <ul className="navbar-list">
               <li>
                  <Link to="companies">
                     <span>Companies</span>
                  </Link>
               </li>
               <li>
                  <Link to="/about">
                     <span>About</span>
                  </Link>
               </li>
            </ul>
         </Fragment>
      </nav>
   );
};

export default Navbar;
