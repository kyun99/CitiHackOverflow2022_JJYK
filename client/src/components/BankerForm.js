import React, { Fragment, useEffect, useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import { FormControl, Input, FormHelperText, Box, Button, Select, MenuItem, Grid, TextareaAutosize } from '@mui/material';
import axios from 'axios';


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
  }, []);

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
    props.setEsgInitiatives((prevState) => {
      const newState = []
      // Remove element at specified index
      for (let i = 0; i < prevState.length; i++) {
        if (i != index) {
          const o = prevState[i]
          newState.push({ title: o.title, link: o.link })
        }
      }
      return newState
    })
  }

  const addEsgInitiatives = () => {
    props.setEsgInitiatives((prevState) => {
      return [...prevState, { title: '', link: '' }]
    })
  }

  const addRecentDevelopments = () => {
    props.setRecentDevelopments((prevState) => {
      return [...prevState, { title: '', link: '' }]
    })
  }

  const handleEsgTitleChange = (e, index) => {
    props.setEsgInitiatives(prevState => {
      const newState = [...prevState];
      for (let i = 0; i < newState.length; i++) {
        if (i === index) {
          newState[i].title = e.target.value
        }
      }
      return newState;
    })
  }

  const handleEsgLinkChange = (e, index) => {
    props.setEsgInitiatives(prevState => {
      const newState = [...prevState];
      for (let i = 0; i < newState.length; i++) {
        if (i === index) {
          newState[i].link = e.target.value
        }
      }
      return newState;
    })
  }

  const inputSx = { width: 180 }
  const inputLx = { width: 460 }

  return (
    <Fragment>
      <form align='left' className="form1">
        <br />
        <Grid>
          <FormControl>
            {props.isCreateNew && <Input onChange={(e) => { props.setName(e.target.value) }} name="name" id="name" placeholder="Company Name" sx={inputLx} />}
            {!props.isCreateNew && <Input value={props.name} disabled onChange={(e) => { props.setName(e.target.value) }} name="name" id="name" placeholder="Company Name" sx={inputLx} />}
          </FormControl>
        </Grid>
        <br />
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div>
            <FormControl>
              <InputLabel htmlFor="targetprice">Target Price</InputLabel>
              <Input onChange={(e) => { props.setTargetPrice(e.target.value) }} name="targetprice" id="targetprice" aria-describedby="targetprice-helper" sx={inputSx} />
              <FormHelperText id="targetprice-helper">Target price for recommendation</FormHelperText>
            </FormControl>
          </div>
          <div>
            <FormControl size='large'>
              <InputLabel id="recommendation-label">Recommendation</InputLabel>
              <Select
                onChange={(e) => { props.setRecommendation(e.target.value) }}
                name="recommendation"
                labelId="recommendation-label"
                id="recommendation-select"
                label="Recommendation"
                sx={{ width: 180 }}
              >
                <MenuItem value={"Buy"}>Buy</MenuItem>
                <MenuItem value={"Sell"}>Sell</MenuItem>
                <MenuItem value={"Hold"}>Hold</MenuItem>
              </Select>

            </FormControl>
          </div>
          <div>
            <FormControl>
              <InputLabel htmlFor="marketcap">Market Capitalisation</InputLabel>
              <Input onChange={(e) => { props.setMarketcap(e.target.value) }}
                name="marketcap" id="marketcap" aria-describedby="marketcap-helper" sx={inputSx} />
              <FormHelperText id="marketcap-helper">Market Capitalisation</FormHelperText>
            </FormControl>
          </div>
          <div>
            <FormControl size='large'>
              <InputLabel id="industry-label">Industry</InputLabel>
              {!props.isCreateNew && <Select
                value={props.industry}
                onChange={(e) => { props.setIndustry(e.target.value) }}
                name="industry"
                disabled={!props.isCreateNew}
                labelId="industry-label"
                id="industry-select"
                label="Industry"
                sx={{ width: 180 }}
              >
                {/* {industries.map(item => (<MenuItem value={item}>{item}</MenuItem>))} */}
                {industries.map(item => (<MenuItem value={item.name}>{item.name}</MenuItem>))}
              </Select>}
              {props.isCreateNew && <Select
                onChange={(e) => { props.setIndustry(e.target.value) }}
                name="industry"
                disabled={!props.isCreateNew}
                labelId="industry-label"
                id="industry-select"
                label="Industry"
                sx={{ width: 180 }}
              >
                {/* {industries.map(item => (<MenuItem value={item}>{item}</MenuItem>))} */}
                {industries.map(item => (<MenuItem value={item.name}>{item.name}</MenuItem>))}
              </Select>}
            </FormControl>
          </div>
          <div>
            <FormControl>
              <InputLabel htmlFor="bloombergcode">Bloomberg Code</InputLabel>
              {props.isCreateNew && <Input onChange={(e) => { props.setBloombergCode(e.target.value) }}
                name="bloombergcode" id="bloombergcode" aria-describedby="bloombergcode-helper" disabled={!props.isCreateNew} sx={inputSx} />}
              {!props.isCreateNew && <Input value={props.bloombergCode} onChange={(e) => { props.setBloombergCode(e.target.value) }}
                name="bloombergcode" id="bloombergcode" aria-describedby="bloombergcode-helper" disabled={!props.isCreateNew} sx={inputSx} />}
              <FormHelperText id="bloombergcode-helper">Market Capitalisation</FormHelperText>
            </FormControl>
          </div>
        </div>
        <Grid>
          <InputLabel>Company Description</InputLabel>
          <FormControl>
            {props.isCreateNew && <TextareaAutosize onChange={(e) => { props.setDescription(e.target.value) }} name="description" id="description" placeholder="Give a brief description on the company" style={{ 'height': '120px', 'width': '600px' }} />}
            {!props.isCreateNew && <TextareaAutosize value={props.description} onChange={(e) => { props.setDescription(e.target.value) }} name="description" id="description" placeholder="Give a brief description on the company" style={{ 'height': '120px', 'width': '600px' }} />}
          </FormControl>
        </Grid>
        <Grid>
          <h2>Recent Developments</h2>
          {props.recentDevelopments.map((item, index) => (
            <Grid key={`recent${index}`}>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div>
                  <FormControl>
                    <InputLabel htmlFor={`recentTitle${index}`}>Title</InputLabel>
                    <Input id={`recentTitle${index}`} aria-describedby="bloombergcode-helper" defaultValue={item.title} sx={inputLx} label="" />
                  </FormControl>
                </div>
                <div>
                  <FormControl>
                    <InputLabel htmlFor={`recentLink${index}`}>Resource link</InputLabel>
                    <Input id={`recentLink${index}`} aria-describedby="bloombergcode-helper" defaultValue={item.link} sx={inputLx} label="" />
                  </FormControl>
                </div>
                <Button onClick={() => removeRecentDevelopment(index)}>Delete</Button>
              </div>
            </Grid>
          ))}
          <br />
          <Box textAlign='left'>
            <Button onClick={addRecentDevelopments}>+ New Recent Development</Button>
          </Box>
          <br />
          <br />
          <InputLabel>Summary of Recent Developments</InputLabel>
          <FormControl>
            <TextareaAutosize id="summaryrecentdevelopments" placeholder="Give a summary of key recent developments and how it impacts the recommendation" style={{ 'height': '120px', 'width': '600px' }} />
          </FormControl>
          <h2>Key ESG Initiatives</h2>
          {props.esgInitiatives.map((item, index) => (
            <Grid key={`esg${index}`}>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div>
                  <FormControl>
                    <InputLabel htmlFor={`esgTitle${index}`}>Title</InputLabel>
                    <Input key={`esgTitle${index}`} onChange={(e) => handleEsgTitleChange(e, index)} name={`esgTitle${index}`} id={`esgTitle${index}`} aria-describedby="bloombergcode-helper" defaultValue={item.title} sx={inputLx} />
                  </FormControl>
                </div>
                <div>
                  <FormControl>
                    <InputLabel htmlFor={`esgLink${index}`}>Resource link</InputLabel>
                    <Input key={`esgLink${index}`} onChange={(e) => handleEsgLinkChange(e, index)} name={`esgLink${index}`} id={`esgLink${index}`} aria-describedby="bloombergcode-helper" defaultValue={item.link} sx={inputLx} />
                  </FormControl>
                </div>
                <Button onClick={() => removeEsgInitiatives(index)}>Delete</Button>
              </div>
            </Grid>
          ))}
          <br />
          <Box textAlign='left'>
            <Button onClick={addEsgInitiatives}>+ New ESG Initiatives</Button>
          </Box>
          <br />
          <br />
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
                  <Button variant='contained' onClick={props.handleUpdate}>Update</Button>
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
