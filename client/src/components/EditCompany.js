import React, { Fragment, useEffect, useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import { FormControl, Input, FormHelperText, Button, Select, MenuItem, Grid } from '@mui/material';




const targetPrice = 1.0
const recommendation = "Buy"
const marketCap = "1.4B"
const bloombergCode = "YZJSGD_SP_Equity"
const profile = "Yangzijiang is one of the largest, most efficient, and profitable shipbuilders in China. It has moved up the value chain to produce ultra-large containerships and very large bulk carriers, as well as LNG vessels."


const EditCompany = () => {
  const removeRecentDevelopment = (index) => {
    // var temp = recentDevelopments.splice(index,1)
    // var temp = recentDevelopments
    // setRecentDevelopments(temp)
  }
  
  const handleSubmit = () => {
  
  }
  const inputSx = { width: 300 }

  // const [setRecentDevelopments, recentDevelopments] = useState([])

  // useEffect(() => {
  //   setRecentDevelopments([
  //     {title: "Yangzijiang Shipbuilding Holdings Ltd: A good set of 1H22 results", link:"https://www.dbs.com.sg/private-banking/aics/templatedata/article/recentdevelopment/data/en/DBSV/082022/YZJSGD_SP_08082022.xml"},
  //     {title: "Yangzijiang Shipbuilding: Trading at unwarranted deep discount to peers", link:"https://www.dbs.com.sg/private-banking/aics/templatedata/article/recentdevelopment/data/en/DBSV/082022/YZJSGD_SP_08042022.xml"}
  // ])},[])
  
  
  return <Fragment>
    <h2>Edit Company Details</h2>
    <form onSubmit={handleSubmit} align='center'>
      <FormControl>
        <InputLabel htmlFor="targetprice">Target Price</InputLabel>
        <Input id="targetprice" aria-describedby="targetprice-helper" sx={inputSx} />
        <FormHelperText id="targetprice-helper">Target price for recommendation</FormHelperText>
      </FormControl>
      <FormControl size='large'>
        <InputLabel id="recommendation-label">Recommendation</InputLabel>
        <Select
          labelId="recommendation-label"
          id="recommendation-select"
          label="Recommendation"
          sx={inputSx}
        // onChange={handleChange}
        >
          <MenuItem value={10}>Buy</MenuItem>
          <MenuItem value={20}>Sell</MenuItem>
          <MenuItem value={30}>Hold</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="marketcap">Market Capitalisation</InputLabel>
        <Input id="marketcap" aria-describedby="marketcap-helper" sx={inputSx} />
        <FormHelperText id="marketcap-helper">Market Capitalisation</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="bloombergcode">Bloomberg Code</InputLabel>
        <Input id="bloombergcode" aria-describedby="bloombergcode-helper" sx={inputSx} />
        <FormHelperText id="bloombergcode-helper">Market Capitalisation</FormHelperText>
      </FormControl>
      <Grid>
        <h2>Recent Developments</h2>
          {/* {recentDevelopments.map((index, item) => <Button>Test</Button>)} */}
          <Button>TEst</Button>
          <Button>sfe</Button>
        <h2>Key ESG Initiatives</h2>
        <Grid>
          <FormControl>
            <InputLabel htmlFor="resourcetitle">Resource Title</InputLabel>
            <Input id="resourcetitle" sx={inputSx} />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="resourcelink">Resource Link</InputLabel>
            <Input id="resourcelink" sx={inputSx} />
          </FormControl>
        </Grid>
        <Button>Update</Button>
      </Grid>
    </form>
  </Fragment>
};

export default EditCompany;
