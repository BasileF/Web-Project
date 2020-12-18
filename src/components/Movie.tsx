import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { IMovie } from "../interfaces/common";

const useStyles = makeStyles({
  root: {
    margin: 5,
    maxWidth: 250,
  },
  media: {
    minHeight: 375,
    objectFit: "cover",
  },
  view: {
    backgroundColor: "#F5C518",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: "#F5B000",
    },
  },
  nominate: {
    backgroundColor: "#28334AFF",
    "&:hover": {
      backgroundColor: "#4caf50",
    },
    color: "white",
    borderRadius: 0,
  },
  link: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
});

interface MovieProps extends IMovie {}

const Movie: React.FC<MovieProps> = (props) => {
  const { title, year, imdb, poster } = props;
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={4} className={classes.root}>
      <Card square elevation={3}>
        <CardMedia image={poster} className={classes.media} />
        <CardContent>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="caption">{year}</Typography>
        </CardContent>
        <Link
          href={`https://www.imdb.com/title/${imdb}/`}
          target="blank"
          className={classes.link}
        >
          <Button fullWidth className={classes.view}>
            View IMDB
          </Button>
        </Link>
        <Button fullWidth className={classes.nominate}>
          Nominate
        </Button>
      </Card>
    </Grid>
  );
};

export default Movie;
