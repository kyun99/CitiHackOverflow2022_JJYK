import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function SearchBar(props) {
   return (
      <Box
         component="form"
         sx={{
            "& > :not(style)": {
               color: "white",
               m: 1,
               width: "100%",
               maxWidth: "100%",
            },
         }}
         noValidate
         autoComplete="off"
         className="container">
         <TextField
            id="standard-search"
            label="Search"
            type="search"
            variant="standard"
            onChange={props.onChange}
         />
      </Box>
   );
}
