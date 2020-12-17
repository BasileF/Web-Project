import React from "react";
import { Grid } from "@material-ui/core";
import { IMovie } from "../interfaces/common";

interface NominationsProps {
  setNominations: any;
  nominations: IMovie[];
}

const Nominations: React.FC<NominationsProps> = (props) => {
  return (
    <Grid item xs={12} sm={5}>
      Nominations
    </Grid>
  );
};

export default Nominations;
