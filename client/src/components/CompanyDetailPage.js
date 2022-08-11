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
    {id: 0, title: "Carbon emissions reduced by 7.3% for 1H2022", resource:'somelink', upVote: 17, downVote: 2},
    {id: 1, title: "Workplace diversity increased by 40% for 2022", resource:'somelink', upVote: 38, downVote: 130},
    {id: 2, title: "MOU signed to accelerate switch to electric vehicles by 2030", resource:'somelink', upVote: 204, downVote:43},
   ])

   const upVote = (id) => {
      console.log(esgInitiatives[id])
      setEsgInitiatives(prevState => {
        const newState = [...prevState];
        for (let i = 0; i < newState.length; i++) {
          if (newState[i].id === id) {
            newState[i].upVote++;
          }
        }
        return newState;
      })
   }

   const downVote = (id) => {
    setEsgInitiatives(prevState => {
      const newState = [...prevState];
      for (let i = 0; i < newState.length; i++) {
        if (newState[i].id === id) {
          newState[i].downVote++;
        }
      }
      return newState;
    })
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
            <Grid item >
            <div style={{ position:"relative", left:"-410px"}}>
            { props.isBanker && <Button variant='contained'>
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
                {item.upVote}
                <Button onClick={() => upVote(item.id)}>Upvote</Button>
                {item.downVote}
               <Button onClick={() => downVote(item.id)}>Downvote</Button>
               </Grid>)) }
            />
            
         </Fragment>
      </div>
   );
};

export default CompanyDetailPage;
