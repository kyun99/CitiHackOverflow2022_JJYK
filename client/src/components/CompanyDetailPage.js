import { Button, Card, Grid, Typography } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DetailImage from "./DetailImage";
<<<<<<< HEAD
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
=======
import DetailText from './DetailText';
import axios from "axios";


const CompanyDetailPage = (props) => {
   const location = useLocation()
   const params = new URLSearchParams(location.search)
   const bloombergCode =  params.get('code');
   const editLink = `/banker/edit?code=${bloombergCode}`
>>>>>>> 0ea8e57240e7e0444234728c760c039f9c7f42e0

  const [companyName, setName] = useState("Yangzijiang Shipbuilding Holdings Ltd")
  const [industry, setIndustry] = useState("Logistics")
  const [profile, setDescription] = useState("Yangzijiang is one of the largest, most efficient, and profitable shipbuilders in China. It has moved up the value chain to produce ultra-large containerships and very large bulk carriers, as well as LNG vessels.")
  const [marketcap, setMarketcap] = useState("1.4B")
  const [recommendation, setRecommendation] = useState("Buy")
  const [targetprice, setTargetPrice] = useState("1.14")

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
    axios.get(`http://127.0.0.1:8000/moneyplant/company/${bloombergCode}`)
      .then(resp => {
        console.log(resp.status)
        console.log(resp.data)
        const data = resp.data

        setDescription(prev => (data.description))
        setIndustry(prev => data.industry)
        setMarketcap(prev => data.market_cap)
        setName(prev => data.name)
        setRecommendation(prev => data.recommendation)
        setTargetPrice(prev => data.target_price)

      })
      .catch(err => {
        console.log(err)
      })
  })

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
<<<<<<< HEAD
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
=======
         <div style={{fontSize:"30px"}}>
          <Grid container>
            <Grid item>
            <h1 className="name">{companyName}</h1> 
            </Grid>
            <Grid item >
            <div style={{ position:"relative", left:"-180%"}}>
            { props.isBanker && <Button variant='secondary'>
              <a href={editLink} >Edit Analysis</a>
              </Button>}
>>>>>>> 0ea8e57240e7e0444234728c760c039f9c7f42e0
            </div>
         </Fragment>
      </div>
   );
};

export default CompanyDetailPage;
