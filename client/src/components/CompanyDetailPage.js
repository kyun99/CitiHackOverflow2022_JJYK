import { Button, Grid } from "@mui/material";
import React, { Fragment } from "react";
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
               content="Initiatives list here" 
            />
         </Fragment>
      </div>
   );
};

export default CompanyDetailPage;
