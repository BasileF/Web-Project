import React from "react";
import { Grid } from "@material-ui/core";
import { IMovie } from "../interfaces/common";
import Movie from "./Movie";

interface ResultsProps {
  setNominations: any;
  results: IMovie[];
  nominations: IMovie[];
}

class Results extends React.Component<ResultsProps> {
  constructor(props: ResultsProps) {
    super(props);

    this.isNominated = this.isNominated.bind(this);
    this.addNomination = this.addNomination.bind(this);
  }

  isNominated(t: IMovie) {
    return (
      this.props.nominations.some(
        (nominee) => JSON.stringify(nominee) === JSON.stringify(t)
      ) || this.props.nominations.length === 5
    );
  }

  addNomination(t: IMovie) {
    const next = this.props.nominations.slice();
    next.push(t);
    this.props.setNominations(next);
  }

  render() {
    return (
      <Grid container item xs={12} sm={8}>
        {this.props.results.map((res) => (
          <Movie
            {...res}
            addNomination={this.addNomination}
            isNominated={this.isNominated}
          />
        ))}
      </Grid>
    );
  }
}

export default Results;
