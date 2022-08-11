import { Button, Typography, Card, CardContent, FormControl, Input, InputLabel, Grid, Box } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import SearchBar from './SearchBar';
import axios from 'axios';


const Industries = (props) => {
  const [filteredIndustries, setFilterIndustries] = useState([{ id: 0, name: "Agriculture", esgScore: "AA" }, { name: "Manufacturing", esgScore: "BB" }])
  const [industries, setIndustries] = useState([{ id: 1, name: "Agriculture", esgScore: "AA" }, { name: "Manufacturing", esgScore: "BB" }])
  const [showForm, setShowForm] = useState(false)

  const filterData = (e) => {
    var q = e.target.value
    if (!q) {
      setFilterIndustries(industries)
    } else {
      const temp = industries.filter((d) => {
        return d.name.toLowerCase().includes(q.toLowerCase()) || d.esgScore.toLowerCase().includes(q.toLowerCase())
      });
      setFilterIndustries(temp)
    }
  };

  const getIndustries = () => {
    axios.get('http://127.0.0.1:8000/moneyplant/industry/')
    .then(resp => {
      console.log(resp.status)
      console.log(resp.data)
      setIndustries(oldarr => (resp.data))
      setFilterIndustries(oldarr => (resp.data))
    })
    .catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    getIndustries()
  },[]);

  const handleDelete = (name) => {
    axios.delete(`http://127.0.0.1:8000/moneyplant/industry/${name}`)
    .then(resp => {
      console.log(resp)
      getIndustries()
    })
    .catch(err => {
      console.log(err)
    })
  }

  const handleCreate = (e) => {
    e.preventDefault();
    const industryName = e.target.industryName.value
    const esgScore = e.target.esgScore.value
    console.log(esgScore)
    axios.post('http://127.0.0.1:8000/moneyplant/industry/', {name: industryName, esgScore: esgScore})
    .then(resp => {
      console.log(resp)
      setShowForm(false) // Hide form after successful creation
      getIndustries()
    })
    .catch(err => {console.log(err)})
  }


  return <Fragment>
    <div className="BrowseCompanies">
      <h1>Industries</h1>
      <SearchBar
        onChange={(e) => filterData(e)}
      />
      {showForm && (
        <form onSubmit={handleCreate}>
          <Grid container>
            <div className="addIndustryButton">
            <Grid item>
              <div style={{ marginRight:'30px'}}>
              <FormControl>
                <InputLabel htmlFor="industryName" >Industry Name</InputLabel>
                <Input name="industryName" id="industryName" sx={{ width: 180 }} />
              </FormControl>
              </div>
            </Grid>
            <Grid item>
              <FormControl>
                <InputLabel htmlFor="esgScore">Mean ESG Score</InputLabel>
                <Input name="esgScore" id="esgScore" sx={{ width: 180 }} />
              </FormControl>
            </Grid>
            </div>
            <Button onClick={() => setShowForm(false)} style={{color:"red"}}>Cancel</Button>
            <Button type='submit'>Add</Button>
          </Grid>
        </form>

      )}
      <Button onClick={() => setShowForm(true)}>+ Add Industry</Button>
      {filteredIndustries.map(item => (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Industry Name
            </Typography>
            <Typography variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              ESG Score
            </Typography>
            <Typography variant="h5" component="div">
              {item.esgScore}
            </Typography>
          </CardContent>
          <Button variant='contained' onClick={() => handleDelete(item.name)}>Remove</Button>
        </Card>
      ))}

    </div>
  </Fragment>

}

export default Industries;
