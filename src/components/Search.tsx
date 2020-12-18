import React from "react";
import { Grid, InputBase, Paper } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { createStyles, withStyles, WithStyles } from "@material-ui/styles";
import { searchApi } from "../api/search";

const styles = (theme: any) =>
  createStyles({
    root: {
      display: "flex",
      alightItems: "center",
      margin: 5,
    },
    input: {
      marginLeft: 10,
      flex: 1,
    },
    icon: {
      padding: 10,
    },
  });

interface SearchProps extends WithStyles<typeof styles> {
  setResults: any;
}

interface SearchState {
  title: String;
}

class Search extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);

    this.state = {
      title: "",
    };

    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async search(title: string) {
    this.props.setResults(await searchApi(title));
  }

  handleChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    const title = e.target.value;

    this.setState({
      title,
    });

    this.search(title);
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid item xs={10} sm={8}>
        <Paper square className={classes.root}>
          <SearchIcon className={classes.icon} />
          <InputBase
            placeholder="Search movies"
            value={this.state.title}
            onChange={this.handleChange}
            className={classes.input}
          />
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(styles)(Search);
