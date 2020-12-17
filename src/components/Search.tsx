import React from "react";
import { Grid, InputBase, Paper } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { createStyles, withStyles, WithStyles } from "@material-ui/styles";

const styles = (theme: any) =>
  createStyles({
    root: {
      display: "flex",
      alightItems: "center",
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

  search(title: String) {
    this.props.setResults([
      {
        title,
        year: 1999,
        imdb: "tmp",
        poster: "poster",
      },
    ]);
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
      <Grid item xs={10} sm={5}>
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
