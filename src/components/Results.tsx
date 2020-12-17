import React from "react";
import { Grid } from "@material-ui/core";
import { IMovie } from "../interfaces/common";

interface ResultsProps {
  setResults: any;
  results: IMovie[];
}

const Results: React.FC<ResultsProps> = (props) => {
  return (
    <Grid item xs={12} sm={5}>
      Results
    </Grid>
  );
};

export default Results;
