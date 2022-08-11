import React from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { Table, TableHead, TableRow } from "@mui/material";

const Home = () => {
   return (
      <section className="landing">
         <div className="landing-inner">
            <div className="dark-overlay">
               <div className="landing-inner">
                  <h1
                     style={{
                        fontSize: "42px",
                        fontWeight: "500",
                        width: "450px",
                     }}>
                     Welcome to Sustainable Investing
                  </h1>
                  <p className="lead">
                     Our Analysts have curated the best invesment strategies to
                     integrate ESG investing to build towards a better future.
                  </p>
                  <Link to="companies" className="btn">
                     View Companies
                  </Link>
               </div>
               <table>Recent Developments</table>
            </div>
         </div>
      </section>
   );
};

export default Home;
