import React, { Fragment, useEffect, useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import { FormControl, Input, FormHelperText, Box, Button, Select, MenuItem, Grid, TextareaAutosize } from '@mui/material';
import axios from 'axios';



const targetPrice = 1.0
const recommendation = "Buy"
const marketCap = "1.4B"
const bloombergCode = "YZJSGD_SP_Equity"
const profile = "Yangzijiang is one of the largest, most efficient, and profitable shipbuilders in China. It has moved up the value chain to produce ultra-large containerships and very large bulk carriers, as well as LNG vessels."

const BankerForm = (props) => {
  const [industries, setIndustries] = useState([])
  // const industries = ['Agriculture', 'Construction', 'Logistics', 'Marketing','Mining', 'Retail', 'Robotics', 'Technology', ]

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/moneyplant/industry/')
    .then(resp => {
      console.log(resp.status)
      setIndustries(oldarr => (resp.data))
    })
    .catch(err => {
      console.log(err)
    })
  },[]);

  const removeRecentDevelopment = (index) => {
    props.setRecentDevelopments((oldstate) => {
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
    props.setEsgInitiatives((oldstate) => {
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
    props.setEsgInitiatives((oldstate) => {
      var res = []
      for (let i = 0; i < oldstate.length; i++) {
        res.push(JSON.parse(JSON.stringify(oldstate[i])))
      }
      res.push({ title: "", link: "" })
      return res
    })
  }

  const addRecentDevelopments = () => {
    props.setRecentDevelopments((oldstate) => {
      var res = []
      for (let i = 0; i < oldstate.length; i++) {
        res.push(JSON.parse(JSON.stringify(oldstate[i])))
      }
      res.push({ title: "", link: "" })
      return res
    })
  }


  const inputSx = { width: 180 }
  const inputLx = { width: 460 }

  return( 
    <Fragment>
  <form onSubmit={props.handleSubmit} align='left' className="form1">
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '20px' }}>
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
              sx={{ width: 180 }}
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
          <FormControl size='large'>
            <InputLabel id="industry-label">Industry</InputLabel>
            <Select
              labelId="industry-label"
              id="industry-select"
              label="Industry"
              sx={{ width: 180 }}
            >
              {/* {industries.map(item => (<MenuItem value={item}>{item}</MenuItem>))} */}
              {industries.map(item => (<MenuItem value={item.name}>{item.name}</MenuItem>))}
            </Select>
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
        {props.recentDevelopments.map((item, index) => (
          <Grid>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div>
                <FormControl>
                  <InputLabel htmlFor="bloombergcode">Title</InputLabel>
                  <Input id="bloombergcode" aria-describedby="bloombergcode-helper" defaultValue={item.title} sx={inputLx} label="" />
                </FormControl>
              </div>
              <div>
                <FormControl>
                  <InputLabel htmlFor="bloombergcode">Resource link</InputLabel>
                  <Input id="bloombergcode" aria-describedby="bloombergcode-helper" defaultValue={item.link} sx={inputLx} label="" />
                </FormControl>
              </div>
              <Button onClick={() => removeRecentDevelopment(index)}>Delete</Button>
            </div>
          </Grid>
        ))}
        <br/>
        <Box textAlign='left'>
          <Button onClick={addRecentDevelopments}>+ New Recent Development</Button>
        </Box>
        <br/>
        <br/>
        <InputLabel>Summary of Recent Developments</InputLabel>
        <FormControl>
          <TextareaAutosize id="summaryrecentdevelopments" placeholder="Give a summary of key recent developments and how it impacts the recommendation" style={{ 'height': '120px', 'width': '600px' }} />
        </FormControl>
        <h2>Key ESG Initiatives</h2>
        {props.esgInitiatives.map((item, index) => (
          <Grid>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div>
                <FormControl>
                  <InputLabel htmlFor="bloombergcode">Title</InputLabel>
                  <Input id="bloombergcode" aria-describedby="bloombergcode-helper" defaultValue={item.title} sx={inputLx} />
                </FormControl>
              </div>
              <div>
                <FormControl>
                  <InputLabel htmlFor="bloombergcode">Resource link</InputLabel>
                  <Input id="bloombergcode" aria-describedby="bloombergcode-helper" defaultValue={item.link} sx={inputLx} />
                </FormControl>
              </div>
              <Button onClick={() => removeEsgInitiatives(index)}>Delete</Button>
            </div>
          </Grid>
        ))}
        <br/>
        <Box textAlign='left'>
        <Button onClick={addEsgInitiatives}>+ New ESG Initiatives</Button>  
        </Box>
        <br/>
        <br/>
        <Grid>
          <InputLabel>Summary of ESG Initiatives</InputLabel>
          <FormControl>
            <TextareaAutosize id="summaryesginitiatives" placeholder="Give a summary of key ESG initiatives and how it impacts the recommendation" style={{ 'height': '120px', 'width': '600px' }} />
          </FormControl>
        </Grid>
        
        {!props.isCreateNew && (
        <Box textAlign='left'>
        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '20px' }}>
          <div>
          <Button variant='contained' onClick={props.handleDelete}>Delete</Button>
          </div>
          <div>
          &nbsp;&nbsp;&nbsp;
          <Button variant='contained'onClick={props.handleUpdate}>Update</Button>
          </div>
        </div>
        </Box>)}
        {props.isCreateNew && (
          <Box textAlign='right'>
          <Button variant='contained' onClick={props.handleCreate}>Create</Button>
          </Box>)}        
      </Grid>
    </form>
    </Fragment>)
}

export default BankerForm;
