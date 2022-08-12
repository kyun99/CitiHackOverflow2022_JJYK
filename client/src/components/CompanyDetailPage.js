import { Button, Card, Grid, Typography } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DetailImage from "./DetailImage";
import axios from "axios";

import DetailText from "./DetailText";
import prevClosePrice from "../images/prevClosePrice.jpg";
import QuickView from "../images/QuickView.jpg";
import keyStats from "../images/keyStats.jpg";

const CompanyDetailPage = (props) => {
   const location = useLocation();
   const params = new URLSearchParams(location.search);
   const bloombergCode = params.get("code");
   const editLink = `/banker/edit?code=${bloombergCode}`;

   const [companyName, setName] = useState(
      "Yangzijiang Shipbuilding Holdings Ltd"
   );
   const [industry, setIndustry] = useState("Logistics");
   const [profile, setDescription] = useState(
      "Yangzijiang is one of the largest, most efficient, and profitable shipbuilders in China. It has moved up the value chain to produce ultra-large containerships and very large bulk carriers, as well as LNG vessels."
   );
   const [marketcap, setMarketcap] = useState("1.4B");
   const [recommendation, setRecommendation] = useState("Buy");
   const [targetprice, setTargetPrice] = useState("1.14");
   const [esgScore, setEsgScore] = useState("2.5");

   const [esgInitiatives, setEsgInitiatives] = useState([
      {
         id: 0,
         title: "Carbon emissions reduced by 7.3% for 1H2022",
         resource: "somelink",
         upVote: 17,
         downVote: 2,
      },
      {
         id: 1,
         title: "Workplace diversity increased by 40% for 2022",
         resource: "somelink",
         upVote: 38,
         downVote: 130,
      },
      {
         id: 2,
         title: "MOU signed to accelerate switch to electric vehicles by 2030",
         resource: "somelink",
         upVote: 204,
         downVote: 43,
      },
   ]);

   useEffect(() => {
      axios
         .get(`http://127.0.0.1:8000/moneyplant/company/${bloombergCode}`)
         .then((resp) => {
            console.log(resp.status);
            console.log(resp.data);
            const data = resp.data;

            setDescription((prev) => data.description);
            setIndustry((prev) => data.industry);
            setMarketcap((prev) => data.market_cap);
            setName((prev) => data.name);
            setRecommendation((prev) => data.recommendation);
            setTargetPrice((prev) => data.target_price);
         })
         .catch((err) => {
            console.log(err);
         });
   });

   const upVote = (id) => {
      setEsgInitiatives((prevState) => {
         const newState = [...prevState];
         for (let i = 0; i < newState.length; i++) {
            if (newState[i].id === id) {
               newState[i].upVote++;
            }
         }
         return newState;
      });
   };

   const downVote = (id) => {
      setEsgInitiatives((prevState) => {
         const newState = [...prevState];
         for (let i = 0; i < newState.length; i++) {
            if (newState[i].id === id) {
               newState[i].downVote++;
            }
         }
         return newState;
      });
   };

   //Example information borrowed from DBS market insights page (open for viewing)
   return (
      <div className="container">
         <Fragment>
            <div style={{ fontSize: "30px" }}>
               <Grid container>
                  <Grid item>
                     <h1 className="name">{companyName}</h1>
                  </Grid>
                  <Grid item>
                     <div style={{ margin: "2.5rem", float: "right" }}>
                        <Grid item>
                           {props.isBanker && (
                              <button className="btn-green" variant="secondary">
                                 <a href={editLink}>Edit Analysis</a>
                              </button>
                           )}
                        </Grid>
                     </div>
                  </Grid>
               </Grid>
            </div>
            <div className="companyDetails">
               <div>
                  <h2>Quick View</h2>
                  <img width={500} src={QuickView} />
               </div>
               <div>
                  <h2>Profile</h2>
                  <span>{profile}</span>
               </div>
               <div>
                  <h2>
                     Recommendation:{" "}
                     <i style={{ color: "green" }}>{recommendation}</i>
                  </h2>
               </div>
               <div>
               <div>
                  <h2>
                     Target Price:{" "}
                     <i style={{ color: "green" }}>{targetprice}</i>
                  </h2>
               </div>
               <div>
                  <h2>Previous Close Price</h2>
                  <img width={500} src={prevClosePrice} />
               </div>
               <div>
                  <h2>Key Statistics</h2>
                  <img width={500} src={keyStats} />
               </div>
               <div>
                  <h2>
                     ESG Score:{" "}
                     <span>{esgScore}</span>
                  </h2>
               </div>
               <div>
                  <h2>
                     {industry}{" "}ESG Score:{" "}
                     <span>{esgScore}</span>
                  </h2>
               </div>
               <br/>
                  <h2>Key ESG Initiatives</h2>
                  <div>
                     {esgInitiatives.map((item) => (
                        <div
                           style={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "space-between",
                              alignItems: "center",
                           }}>
                           <div>
                              <a
                                 style={{ fontSize: "20px", fontWeight: "500" }}
                                 href={item.resource}>
                                 {item.title}
                              </a>
                           </div>
                           <div style={{ alignSelf: "right" }}>
                              <span
                                 style={{
                                    marginRight: "20px",
                                    color: "green",
                                 }}>
                                 {item.upVote}
                              </span>
                              <button
                                 className="btn-green"
                                 style={{ marginRight: "20px" }}
                                 onClick={() => upVote(item.id)}>
                                 {" "}
                                 Upvote
                              </button>
                              <span
                                 style={{ marginRight: "20px", color: "red" }}>
                                 {item.downVote}
                              </span>
                              <button
                                 className="btn-red"
                                 onClick={() => downVote(item.id)}>
                                 Downvote
                              </button>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </Fragment>
      </div>
   );
};

export default CompanyDetailPage;
