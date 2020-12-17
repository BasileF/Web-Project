import React from "react";
import { Grid, Paper } from "@material-ui/core";

interface SearchProps {
  setResults: any;
}

const Search: React.FC<SearchProps> = (props) => {
  return (
    <Grid item xs={12} sm={5}>
      <Paper square>test</Paper>
    </Grid>
  );
};

export default Search;
