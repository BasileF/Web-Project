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
    <Grid
      container
      style={{
        padding: "5%",
        backgroundColor: "lightgray",
      }}
    >
      <Search setResults={setResults} />
      <Nominations nominations={nominations} setNominations={setNominations} />
      <Results
        results={results}
        nominations={nominations}
        setNominations={setNominations}
      />
    </Grid>
  );
};

export default LandingPage;
