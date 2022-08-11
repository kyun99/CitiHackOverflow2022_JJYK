import { Button, Grid } from "@mui/material";
import React, { Fragment } from "react";
import DetailImage from "./DetailImage";
import DetailText from './DetailText';

const CompanyDetailPage = (props) => {
   const CompanyName = "Wilmar International"
   const bloombergCode = "REALCODE"
   const editLink = `/banker/edit?code=${bloombergCode}`

   //Example information borrowed from DBS market insights page (open for viewing)
   return (
      <div>
         <Fragment>
         <div style={{fontSize:"30px"}}>
          <Grid container>
            <Grid item>
            <h1 className="name">{CompanyName}</h1> 
            </Grid>
            <Grid item textAlign='right'>
            <div style={{ display:"flex" }}>
            { props.isBanker && <Button variant='contained' style={{marginLeft:"auto"}}>
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
               content="Wilmar International (Wilmar) is an integrated agribusiness company. It is involved in oil palm cultivation, edible oil refining, oilseed crushing, consumer pack edible oil processing and merchandising, specialty fats, oleochemicals and biodiesel manufacturing, and grain processing and merchandising. Wilmar also manufactures and distributes fertilisers and owns a fleet of vessels." 
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
