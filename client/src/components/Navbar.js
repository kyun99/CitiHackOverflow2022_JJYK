import { Button } from "@mui/material";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.png";

const Navbar = (props) => {

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
        <ul className="navbar-list">
          <li>
            {props.isBanker && <Link to='/companies' variant='contained' onClick={() => (props.setIsBanker(false))}>Banker View</Link>}
            {!props.isBanker && <Link to='/companies' variant='contained' onClick={() => (props.setIsBanker(true))}>Client View</Link>}
          </li>
        </ul>
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
