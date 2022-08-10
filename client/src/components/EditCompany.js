import React, { Fragment, useEffect, useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import { FormControl, Input, FormHelperText, Box, Button, Select, MenuItem, Grid, TextareaAutosize } from '@mui/material';




const targetPrice = 1.0
const recommendation = "Buy"
const marketCap = "1.4B"
const bloombergCode = "YZJSGD_SP_Equity"
const profile = "Yangzijiang is one of the largest, most efficient, and profitable shipbuilders in China. It has moved up the value chain to produce ultra-large containerships and very large bulk carriers, as well as LNG vessels."


const EditCompany = () => {
  const [recentDevelopments, setRecentDevelopments] = useState([
    { title: "Yangzijiang Shipbuilding Holdings Ltd: A good set of 1H22 results", link: "https://www.dbs.com.sg/private-banking/aics/templatedata/article/recentdevelopment/data/en/DBSV/082022/YZJSGD_SP_08082022.xml" },
    { title: "Yangzijiang Shipbuilding: Trading at unwarranted deep discount to peers", link: "https://www.dbs.com.sg/private-banking/aics/templatedata/article/recentdevelopment/data/en/DBSV/082022/YZJSGD_SP_08042022.xml" }
  ])

  const [esgInitiatives, setEsgInitiatives] = useState([
    { title: "Yangzijiang Shipbuilding Holdings reduces carbon emissions in 1H22", link: "https://www.dbs.com.sg/private-banking/aics/templatedata/article/recentdevelopment/data/en/DBSV/082022/YZJSGD_SP_08082022.xml" },
    { title: "Yangzijiang Shipbuilding Increase resiliance of supply chain", link: "https://www.dbs.com.sg/private-banking/aics/templatedata/article/recentdevelopment/data/en/DBSV/082022/YZJSGD_SP_08042022.xml" }
  ])

  const removeRecentDevelopment = (index) => {
    setRecentDevelopments((oldstate) => {
      const res = []
      // Remove element at specified index
      for (let i = 0; i < oldstate.length; i++) {
        if (i != index) {
          res.push(JSON.parse(JSON.stringify(oldstate[i])))
        }
      }
      return res
    })
  }

  const removeEsgInitiatives = (index) => {
    setEsgInitiatives((oldstate) => {
      const res = []
      // Remove element at specified index
      for (let i = 0; i < oldstate.length; i++) {
        if (i != index) {
          res.push(JSON.parse(JSON.stringify(oldstate[i])))
        }
      }
      return res
    })
  }

  const addEsgInitiatives = () => {
    setRecentDevelopments((oldstate) => {
      var res = []
      for (let i = 0; i < oldstate.length; i++) {
        res.push(JSON.parse(JSON.stringify(oldstate[i])))
      }
      res.push({ title: "", link: "" })
      console.log(res)
      return res
    })
  }

  const addRecentDevelopments = () => {
    setRecentDevelopments((oldstate) => {
      var res = []
      for (let i = 0; i < oldstate.length; i++) {
        res.push(JSON.parse(JSON.stringify(oldstate[i])))
      }
      res.push({ title: "", link: "" })
      console.log(res)
      return res
    })
  }

  const handleSubmit = () => {

  }
  const inputSx = { width: 200 }


  useEffect(() => {
    setRecentDevelopments(old => ([
      { title: "Yangzijiang Shipbuilding Holdings Ltd: A good set of 1H22 results", link: "https://www.dbs.com.sg/private-banking/aics/templatedata/article/recentdevelopment/data/en/DBSV/082022/YZJSGD_SP_08082022.xml" },
      { title: "Yangzijiang Shipbuilding: Trading at unwarranted deep discount to peers", link: "https://www.dbs.com.sg/private-banking/aics/templatedata/article/recentdevelopment/data/en/DBSV/082022/YZJSGD_SP_08042022.xml" }
    ]))
  }, [])


  return <Fragment>
    <h2>Edit Company Details</h2>
    <form onSubmit={handleSubmit} align='left' className="form1">
      <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginBottom:'20px'}}>
      <div>
      <FormControl>
        <InputLabel htmlFor="targetprice">Target Price</InputLabel>
        <Input id="targetprice" aria-describedby="targetprice-helper" sx={inputSx} />
        <FormHelperText id="targetprice-helper">Target price for recommendation</FormHelperText>
      </FormControl>
      </div>
      <div>
      <FormControl size='large'>
        <InputLabel id="recommendation-label">Recommendation</InputLabel>
        <Select
          labelId="recommendation-label"
          id="recommendation-select"
          label="Recommendation"
          sx={inputSx}
        >
          <MenuItem value={10}>Buy</MenuItem>
          <MenuItem value={20}>Sell</MenuItem>
          <MenuItem value={30}>Hold</MenuItem>
        </Select>
      </FormControl>
      </div>
      <div>
      <FormControl>
        <InputLabel htmlFor="marketcap">Market Capitalisation</InputLabel>
        <Input id="marketcap" aria-describedby="marketcap-helper" sx={inputSx} />
        <FormHelperText id="marketcap-helper">Market Capitalisation</FormHelperText>
      </FormControl>
      </div>
      <div>
      <FormControl>
        <InputLabel htmlFor="bloombergcode">Bloomberg Code</InputLabel>
        <Input id="bloombergcode" aria-describedby="bloombergcode-helper" sx={inputSx} />
        <FormHelperText id="bloombergcode-helper">Market Capitalisation</FormHelperText>
      </FormControl>
      </div>
      </div>
      <Grid>
        <h2>Recent Developments</h2>
        {recentDevelopments.map((item, index) => (
          <Grid>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginBottom:'20px'}}>
              <div>
              <FormControl>
                <InputLabel htmlFor="bloombergcode">Title</InputLabel>
                <Input id="bloombergcode" aria-describedby="bloombergcode-helper" defaultValue={item.title} sx={inputSx} label="" />
              </FormControl>
              </div>
              <div>
              <FormControl>
                <InputLabel htmlFor="bloombergcode">Resource link</InputLabel>
                <Input id="bloombergcode" aria-describedby="bloombergcode-helper" defaultValue={item.link} sx={inputSx} label="" />
              </FormControl>
              </div>
              <Button onClick={() => removeRecentDevelopment(index)}>Delete</Button>
            </div>
          </Grid>
        ))}
        <Grid>
          <Button onClick={addRecentDevelopments}>+ New Recent Development</Button>
        </Grid>
        <FormControl>
              {/* <InputLabel htmlFor="summaryrecentdevelopments"></InputLabel> */}
              <TextareaAutosize id="summaryrecentdevelopments" placeholder="Summary Of Recent Developments" style={{'height':'80px', 'width':'400px'}}/>
        </FormControl>
        <h2>Key ESG Initiatives</h2>
        {esgInitiatives.map((item, index) => (
          <Grid>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginBottom:'20px'}}>
              <div>
              <FormControl>
                <InputLabel htmlFor="bloombergcode">Title</InputLabel>
                <Input id="bloombergcode" aria-describedby="bloombergcode-helper" defaultValue={item.title} sx={inputSx} />
              </FormControl>
              </div>
              <div>
              <FormControl>
                <InputLabel htmlFor="bloombergcode">Resource link</InputLabel>
                <Input id="bloombergcode" aria-describedby="bloombergcode-helper" defaultValue={item.link} sx={inputSx} />
              </FormControl>
              </div>
              <Button onClick={() => removeEsgInitiatives(index)}>Delete</Button>
            </div>
          </Grid>
        ))}
        <Grid>
          <Button onClick={addEsgInitiatives}>+ New ESG Initiatives</Button>
        </Grid>
        <Grid>
        <FormControl>
              {/* <InputLabel htmlFor="summaryrecentdevelopments"></InputLabel> */}
              <TextareaAutosize id="summaryesginitiatives" placeholder="Summary Of ESG Initiatives" style={{'height':'80px', 'width':'400px'}}/>
        </FormControl>
        </Grid>
        <Button>Update</Button>
      </Grid>
    </form>
  </Fragment>
};

export default EditCompany;
