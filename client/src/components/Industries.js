import { Button, Typography, Card, CardContent, FormControl, Input, InputLabel, Grid } from "@mui/material";
import React, { Fragment, useState } from "react";
import SearchBar from './SearchBar';


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

  const handleDelete = (id) => {

  }

  const handleCreate = () => {

    setShowForm(false)
  }


  return <Fragment>
    <div className="BrowseCompanies">
      <h1>Industries</h1>
      <SearchBar
        onChange={(e) => filterData(e)}
      />
      {showForm && (
        <form>
          <Grid container>
            <Grid item>
              <FormControl>
                <InputLabel htmlFor="name">Industry Name</InputLabel>
                <Input id="name" sx={{ width: 180 }} />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl>
                <InputLabel htmlFor="esgScore">ESG Score</InputLabel>
                <Input id="esgScore" sx={{ width: 60 }} />
              </FormControl>
            </Grid>
            <Button onClick={() => setShowForm(false)}>Cancel</Button>
            <Button onClick={handleCreate}>Add</Button>
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
          <Button variant='contained' onClick={() => handleDelete(item.id)}>Remove</Button>
        </Card>
      ))}

    </div>
  </Fragment>

}

export default Industries;
