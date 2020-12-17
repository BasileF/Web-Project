import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Search from "./Search";
import Nominations from "./Nominations";
import Results from "./Results";
import { IMovie } from "../interfaces/common";

interface LandingPageProps {
  initialResults?: IMovie[];
  initialNominations?: IMovie[];
}

const LandingPage: React.FC<LandingPageProps> = ({
  initialResults = [],
  initialNominations = [],
}) => {
  const [results, setResults] = useState(initialResults);
  const [nominations, setNominations] = useState(initialNominations);

  return (
    <Grid container justify="center">
      <Search setResults={setResults} />
      <Results results={results} setResults={setResults} />
      <Nominations nominations={nominations} setNominations={setNominations} />
    </Grid>
  );
};

export default LandingPage;
