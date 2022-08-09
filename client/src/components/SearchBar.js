import React, { Fragment, useEffect, useState } from "react";
import { TextField } from '@mui/material';

const SearchBar = () => {
    return (
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
        />
    )
}

export default SearchBar