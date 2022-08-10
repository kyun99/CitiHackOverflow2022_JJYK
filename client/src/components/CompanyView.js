import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Company Name
        </Typography>
        <Typography variant="h5" component="div">
          John's Poultry
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          agriculture
        </Typography>
        <Typography variant="body2">
          Can insert brief summary of company here
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to="/details" size="small">See more details about company here</Button>
      </CardActions>
    </Card>
  );
}
