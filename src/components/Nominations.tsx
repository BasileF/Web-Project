import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { IMovie } from "../interfaces/common";
import Nomination from "./Nomination";

interface NominationsProps {
  setNominations: any;
  nominations: IMovie[];
}

class Nominations extends React.Component<NominationsProps> {
  constructor(props: NominationsProps) {
    super(props);

    this.removeNomination = this.removeNomination.bind(this);
  }

  removeNomination(nomination: IMovie) {
    const next = this.props.nominations.slice();
    next.splice(
      next.findIndex((nom) => nomination.imdb === nom.imdb),
      1
    );
    this.props.setNominations(next);
  }

  render() {
    return (
      <Grid item xs={12} sm={3} style={{ height: "200px" }}>
        <Paper square>
          <Typography variant="h6">Nominations</Typography>
          {this.props.nominations.map((nom) => (
            <Nomination {...nom} removeNomination={this.removeNomination} />
          ))}
          {this.props.nominations.length === 5 && (
            <Typography variant="body1">All Nominations done</Typography>
          )}
        </Paper>
      </Grid>
    );
  }
}

export default Nominations;
