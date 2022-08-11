import React, { Fragment, useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import {
  FormControl,
  Input,
  FormHelperText,
  Box,
  button,
  Select,
  MenuItem,
  Grid,
  TextareaAutosize,
} from "@mui/material";
import "../App.css";
import axios from "axios"

const BankerForm = (props) => {
  //  const industries = [
  //     "Agriculture",
  //     "Construction",
  //     "Logistics",
  //     "Marketing",
  //     "Mining",
  //     "Retail",
  //     "Robotics",
  //     "Technology",
  //  ];
  const [industries, setIndustries] = useState([])

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
    props.setRecentDevelopments((prevState) => {
      const newState = [...prevState]
      for (let i = 0; i < prevState.length; i++) {
        if (i != index) {
          const o = prevState[i]
          newState.push({ title: o.title, link: o.link })
        }
      }
      return newState
    });
  };

  const removeEsgInitiatives = (index) => {
    props.setEsgInitiatives((oldstate) => {
      const res = [];
      // Remove element at specified index
      for (let i = 0; i < oldstate.length; i++) {
        if (i != index) {
          res.push(JSON.parse(JSON.stringify(oldstate[i])));
        }
      }
      return res;
    });
  };

  const addEsgInitiatives = () => {
    props.setEsgInitiatives((oldstate) => {
      var res = [];
      for (let i = 0; i < oldstate.length; i++) {
        res.push(JSON.parse(JSON.stringify(oldstate[i])));
      }
      res.push({ title: "", link: "" });
      return res;
    });
  };

  const addRecentDevelopments = () => {
    props.setRecentDevelopments((oldstate) => {
      var res = [];
      for (let i = 0; i < oldstate.length; i++) {
        res.push(JSON.parse(JSON.stringify(oldstate[i])));
      }
      res.push({ title: "", link: "" });
      return res;
    });
  };

  const inputSx = { width: 180 };
  const inputLx = { width: 460 };

  return (
    <div className="container">
      <Fragment>
        <form onSubmit={props.handleSubmit} align="left" className="form1">
          <div
            style={{
              width: "100%",
              background:"white",
            }}>
            <div>
              <div style={{ marginBottom:"20px" }}>
                <FormControl>
                  {props.isCreateNew && <Input onChange={(e) => { props.setName(e.target.value) }} name="name" id="name" placeholder="Company Name" sx={inputLx} />}
                  {!props.isCreateNew && <Input value={props.name} disabled onChange={(e) => { props.setName(e.target.value) }} name="name" id="name" placeholder="Company Name" sx={inputLx} />}
                </FormControl>
              </div>
              <div style={{ marginBottom:"20px" }}>
                <FormControl>
                  <Input name="esgScore" id="esgScore" placeholder="ESG Score" sx={inputSx} />
                </FormControl>
              </div>
              <FormControl>
                <InputLabel htmlFor="targetprice">
                  Target Price
                </InputLabel>
                <Input onChange={(e) => { props.setTargetPrice(e.target.value) }} name="targetprice" id="targetprice" aria-describedby="targetprice-helper" sx={inputSx} />
                <FormHelperText id="targetprice-helper">
                
                </FormHelperText>
              </FormControl>
            </div>
            <div style={{ marginBottom:"20px" }}>
              <FormControl size="large">
                <InputLabel id="recommendation-label">
                  Recommendation
                </InputLabel>
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
            <div style={{ marginBottom:"20px" }}>
              <FormControl>
                <InputLabel htmlFor="marketcap">
                  Market Capitalisation
                </InputLabel>
                <Input onChange={(e) => { props.setMarketcap(e.target.value) }}
                  name="marketcap" id="marketcap" aria-describedby="marketcap-helper" sx={inputSx} />
                <FormHelperText id="marketcap-helper">
                
                </FormHelperText>
              </FormControl>
            </div>
            <div style={{ marginBottom:"20px" }}>
              <FormControl size="large">
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
                  {/* {industries.map(item => (<MenuItem value={item}>re{item}</MenuItem>))} */}
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
            <div style={{ marginBottom:"20px" }}>
              <FormControl>
                <InputLabel htmlFor="bloombergcode">
                  Bloomberg Code
                </InputLabel>
                {props.isCreateNew && <Input onChange={(e) => { props.setBloombergCode(e.target.value) }}
                          name="bloombergcode" id="bloombergcode" aria-describedby="bloombergcode-helper" disabled={!props.isCreateNew} sx={inputSx} />}
                        {!props.isCreateNew && <Input value={props.bloombergCode} onChange={(e) => { props.setBloombergCode(e.target.value) }}
                          name="bloombergcode" id="bloombergcode" aria-describedby="bloombergcode-helper" disabled={!props.isCreateNew} sx={inputSx} />}                     
                <FormHelperText id="bloombergcode-helper">
              
                </FormHelperText>
              </FormControl>
            </div>
          </div >
          <Grid>
            <InputLabel>Company Description</InputLabel>
            <FormControl>
              {props.isCreateNew && <TextareaAutosize onChange={(e) => { props.setDescription(e.target.value) }} name="description" id="description" placeholder="Give a brief description on the company" style={{ 'height': '120px', 'width': '600px' }} />}
              {!props.isCreateNew && <TextareaAutosize value={props.description} onChange={(e) => { props.setDescription(e.target.value) }} name="description" id="description" placeholder="Give a brief description on the company" style={{ 'height': '120px', 'width': '600px' }} />}
            </FormControl>
          </Grid>
          <div style={{ display: "flex", marginTop: "2rem" }}>
            <Grid>
              <h2>Recent Developments</h2>
              {props.recentDevelopments.map((item, index) => (
                <Grid>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginBottom: "20px",
                    }}>
                    <div>
                      <FormControl>
                        <InputLabel htmlFor="bloombergcode">
                          Title
                        </InputLabel>
                        <Input
                          id="bloombergcode"
                          aria-describedby="bloombergcode-helper"
                          defaultValue={item.title}
                          sx={inputLx}
                          label=""
                        />
                      </FormControl>
                    </div>
                    <div>
                      <FormControl>
                        <InputLabel htmlFor="bloombergcode">
                          Resource link
                        </InputLabel>
                        <Input
                          id="bloombergcode"
                          aria-describedby="bloombergcode-helper"
                          defaultValue={item.link}
                          sx={inputLx}
                        />
                      </FormControl>
                    </div>
                    <button
                      className="btn-red"
                      onClick={() => removeRecentDevelopment(index)}>
                      Delete
                    </button>
                  </div>
                </Grid>
              ))}
              <br />
              <button
                className="btn-green"
                onClick={addRecentDevelopments}>
                + New Recent Development
              </button>
              <br />
              <br />
              <InputLabel>Summary of Recent Developments</InputLabel>
              <FormControl>
                <TextareaAutosize
                  id="summaryrecentdevelopments"
                  placeholder="Give a summary of key recent developments and how it impacts the recommendation"
                  style={{ height: "120px", width: "600px" }}
                />
              </FormControl>
              <h2>Key ESG Initiatives</h2>
              {props.esgInitiatives.map((item, index) => (
                <Grid>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginBottom: "20px",
                    }}>
                    <div>
                      <FormControl>
                        <InputLabel htmlFor="bloombergcode">
                          Title
                        </InputLabel>
                        <Input
                          id="bloombergcode"
                          aria-describedby="bloombergcode-helper"
                          defaultValue={item.title}
                          sx={inputLx}
                        />
                      </FormControl>
                    </div>
                    <div>
                      <FormControl>
                        <InputLabel htmlFor="bloombergcode">
                          Resource link
                        </InputLabel>
                        <Input
                          id="bloombergcode"
                          aria-describedby="bloombergcode-helper"
                          defaultValue={item.link}
                          sx={inputLx}
                        />
                      </FormControl>
                    </div>
                    <button
                      className="btn-red"
                      onClick={() => removeEsgInitiatives(index)}>
                      Delete
                    </button>
                  </div>
                </Grid>
              ))}
              <br />
              <button className="btn-green" onClick={addEsgInitiatives}>
                + New ESG Initiatives
              </button>
              <br />
              <br />
              <Grid>
                <InputLabel>Summary of ESG Initiatives</InputLabel>
                <FormControl>
                  <TextareaAutosize
                    id="summaryesginitiatives"
                    placeholder="Give a summary of key ESG initiatives and how it impacts the recommendation"
                    style={{ height: "120px", width: "600px" }}
                  />
                </FormControl>
              </Grid>

              {!props.isCreateNew && (
                <Box textAlign="right">
                  <button
                    className="btn-red"
                    variant="contained"
                    onClick={props.handleDelete}>
                    Delete
                  </button>
                  <button
                    className="btn-green"
                    variant="contained"
                    onClick={props.handleUpdate}>
                    Update
                  </button>
                </Box>
              )}
              <br />
              {props.isCreateNew && (
                <button
                  className="btn-green"
                  variant="contained"
                  onClick={props.handleCreate}>
                  Create
                </button>
              )}
            </Grid>
          </div>
        </form>
      </Fragment>
    </div>
  );
};

export default BankerForm;
