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

const BankerForm = (props) => {
   const industries = [
      "Agriculture",
      "Construction",
      "Logistics",
      "Marketing",
      "Mining",
      "Retail",
      "Robotics",
      "Technology",
   ];

   const removeRecentDevelopment = (index) => {
      props.setRecentDevelopments((oldstate) => {
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
                     display: "flex",
                     flexDirection: "row",
                     justifyContent: "space-between",
                     marginBottom: "20px",
                     background: "white",
                     padding: "1rem",
                  }}>
                  <div>
                     <FormControl>
                        <InputLabel htmlFor="targetprice">
                           Target Price
                        </InputLabel>
                        <Input
                           id="targetprice"
                           aria-describedby="targetprice-helper"
                           sx={inputSx}
                        />
                        <FormHelperText id="targetprice-helper">
                           Target price for recommendation
                        </FormHelperText>
                     </FormControl>
                  </div>
                  <div>
                     <FormControl size="large">
                        <InputLabel id="recommendation-label">
                           Recommendation
                        </InputLabel>
                        <Select
                           labelId="recommendation-label"
                           id="recommendation-select"
                           label="Recommendation"
                           sx={{ width: 180 }}>
                           <MenuItem value={10}>Buy</MenuItem>
                           <MenuItem value={20}>Sell</MenuItem>
                           <MenuItem value={30}>Hold</MenuItem>
                        </Select>
                     </FormControl>
                  </div>
                  <div>
                     <FormControl>
                        <InputLabel htmlFor="marketcap">
                           Market Capitalisation
                        </InputLabel>
                        <Input
                           id="marketcap"
                           aria-describedby="marketcap-helper"
                           sx={inputSx}
                        />
                        <FormHelperText id="marketcap-helper">
                           Market Capitalisation
                        </FormHelperText>
                     </FormControl>
                  </div>
                  <div>
                     <FormControl size="large">
                        <InputLabel id="industry-label">Industry</InputLabel>
                        <Select
                           labelId="industry-label"
                           id="industry-select"
                           label="Industry"
                           sx={{ width: 180 }}>
                           {industries.map((item) => (
                              <MenuItem value={item}>{item}</MenuItem>
                           ))}
                        </Select>
                     </FormControl>
                  </div>
                  <div>
                     <FormControl>
                        <InputLabel htmlFor="bloombergcode">
                           Bloomberg Code
                        </InputLabel>
                        <Input
                           id="bloombergcode"
                           aria-describedby="bloombergcode-helper"
                           sx={inputSx}
                        />
                        <FormHelperText id="bloombergcode-helper">
                           Market Capitalisation
                        </FormHelperText>
                     </FormControl>
                  </div>
               </div>
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
                                       label=""
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
