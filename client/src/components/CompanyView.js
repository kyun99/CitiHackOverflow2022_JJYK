import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const bull = (
   <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
      •
   </Box>
);

export default function BasicCard(props) {
   return (
      <section className="container">
         <Card sx={{ minWidth: 275, p: 3 }}>
            <CardContent>
               <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom>
                  Company Name
               </Typography>
               <Typography variant="h5" component="div">
                  {props.companyname}
               </Typography>
               <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {props.industry}
               </Typography>
               <Typography variant="body2">
                  {props.summary}
                  <br />
               </Typography>
            </CardContent>
            <CardActions>
               <Button component={Link} to={props.linkTo} size="small">
                  See more details about {props.companyname} here
               </Button>
            </CardActions>
         </Card>
      </section>
   );
}
