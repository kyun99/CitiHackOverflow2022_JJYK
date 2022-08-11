import { Button, Grid } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import DetailImage from "./DetailImage";
import DetailText from './DetailText';

const CompanyDetailPage = (props) => {
   const companyName = "Place holder name"
   const location = useLocation()
   const params = new URLSearchParams(location.search)
   const bloombergCode =  params.get('code');
   const profile = props.profile
   const editLink = `/banker/edit?code=${bloombergCode}`

   const [esgInitiatives, setEsgInitiatives] = useState([
    {title: "Carbon emissions reduced by 7.3% for 1H2022", resource:'somelink', upvote: 17, downvote: 2},
    {title: "Workplace diversity increased by 40% for 2022", resource:'somelink', upvote: 38, downvote: 130},
    {title: "MOU signed to accelerate switch to electric vehicles by 2030", resource:'somelink', upvote: 204, downvote:43},
   ])

   const upVote = (id) => {

   }

   const downVote = (id) => {

  }

   

   //Example information borrowed from DBS market insights page (open for viewing)
   return (
      <div>
         <Fragment>
         <div style={{fontSize:"30px"}}>
          <Grid container>
            <Grid item>
            <h1 className="name">{companyName}</h1> 
            </Grid>
            <Grid item textAlign='right'>
            <div style={{ display:"flex" }}>
            {props.isBanker && <Button variant='contained' style={{marginLeft:"auto"}}>
              <a href={editLink} >Edit Analysis</a>
              </Button>}
            </div>
            </Grid>
          </Grid>
         </div>
            <DetailImage 
               title="Quick View"
               img="QuickView.jpg"
            />
            <DetailText 
               title="Profile"
               content={profile}
            />
            <DetailImage 
               title="Previous Close Price"
               img="prevClosePrice.jpg"
            />
            <DetailImage 
               title="Key Statistics"
               img="keyStats.jpg"
            />
            <DetailText 
               title="Our Views"
               content="Insert analyst views here regarding ESG" 
            />
            <DetailText 
               title="Risks"
               content="Worse-than-expected margin performance. If Wilmar fails to secure favourable raw materials at a good price, it may not be able to maintain its positive earnings performance." 
            />
            <DetailText 
               title="Sentiment Analysis"
               content="Insert Sentiment Analysis here" 
            />
            <DetailText 
               title="Key ESG initiatives by Wilmar International"
               content={esgInitiatives.map(item => (
               <Grid>
                <a href={item.resource}>{item.title}</a>
                {item.upvote}
                <Button onClick={() => upVote(item.id)}>Upvote</Button>
                {item.downvote}
               <Button onClick={() => downVote(item.id)}>Downvote</Button>
               </Grid>)) }
            />
            
         </Fragment>
      </div>
   );
};

export default CompanyDetailPage;
