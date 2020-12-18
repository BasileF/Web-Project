import React from "react";
import { Grid } from "@material-ui/core";
import { IMovie } from "../interfaces/common";
import Movie from "./Movie";

interface ResultsProps {
  setResults: any;
  results: IMovie[];
}

const Results: React.FC<ResultsProps> = (props) => {
  return (
    <Grid container item xs={12} sm={8}>
      {props.results.map((res) => (
        <Movie {...res} />
      ))}
    </Grid>
  );
};

export default Results;
