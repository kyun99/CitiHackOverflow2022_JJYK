import { Button, Card, Grid, Typography } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DetailImage from "./DetailImage";
import DetailText from "./DetailText";
import prevClosePrice from "../images/prevClosePrice.jpg";
import QuickView from "../images/QuickView.jpg";
import keyStats from "../images/keyStats.jpg";

const CompanyDetailPage = (props) => {
   const companyName = "Place holder name";
   const location = useLocation();
   const params = new URLSearchParams(location.search);
   const bloombergCode = params.get("code");
   const profile = props.profile;
   const editLink = `/banker/edit?code=${bloombergCode}`;

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
                     <div style={{ position: "relative", left: "-375px" }}>
                        {props.isBanker && (
                           <Button variant="secondary">
                              <a href={editLink}>Edit Analysis</a>
                           </Button>
                        )}
                     </div>
                  </Grid>
               </Grid>
               ``
            </div>
            <div className="companyDetails">
               <div>
                  <h2>Quick View</h2>
               </div>
               <div>
                  <h2>Profile</h2>
                  <span>{profile}</span>
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
                  <h2>Our Views</h2>
               </div>
               <div>
                  <h2>Risks</h2>
               </div>
               <div>
                  <h2>Sentiment Analysis</h2>
               </div>
               <div>
                  <h2>Key ESG Initiatives</h2>
                  <div>
                     {esgInitiatives.map((item) => (
                        <div>
                           <a href={item.resource}>{item.title}</a>
                           {item.upVote}
                           <Button onClick={() => upVote(item.id)}>
                              Upvote
                           </Button>
                           {item.downVote}
                           <Button onClick={() => downVote(item.id)}>
                              Downvote
                           </Button>
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
