import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SearchBar(props) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: 500, maxWidth:'100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
          id="standard-search"
          label="Search for company"
          type="search"
          variant="standard"
          onChange={props.onChange}
        />
    </Box>
  );
}