import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { style } from "../utilties/style";
import { animator } from "./Animator";
const AllGrids = ({ gridCount }) => {
  useEffect(() => {
    animator();
  }, [gridCount]);

  const getStyle = (index, theme) => {
    return style[index - 1](theme);
  };
  const useStyles = makeStyles((theme) => getStyle(gridCount, theme));
  const classes = useStyles();
  return (
    <Grid id="gridWrapper" className={classes.gridContainer}>
      <Grid className={`${classes.one} grid-item`}>
        <div className="users"> </div>
      </Grid>
      <Grid
        className={`${gridCount < 2 ? "hide" : "grid-item"} ${classes.two}`}
      >
        <div className="users"></div>
      </Grid>
      <Grid
        className={`${gridCount < 3 ? "hide" : "grid-item"} ${classes.three}`}
      >
        <div className="users"></div>
      </Grid>
      <Grid
        className={`${gridCount < 4 ? "hide" : "grid-item"} ${classes.four}`}
      >
        <div className="users"></div>
      </Grid>
      <Grid
        className={`${gridCount < 5 ? "hide" : "grid-item"} ${classes.five}`}
      >
        <div className="users"></div>
      </Grid>
      <Grid
        className={`${gridCount < 6 ? "hide" : "grid-item"} ${classes.six}`}
      >
        <div className="users"></div>
      </Grid>
      <Grid
        className={`${gridCount < 7 ? "hide" : "grid-item"} ${classes.seven}`}
      >
        <div className="users"></div>
      </Grid>
      <Grid
        className={`${gridCount < 8 ? "hide" : "grid-item"} ${classes.eight}`}
      >
        <div className="users"></div>
      </Grid>
      <Grid
        className={`${gridCount < 9 ? "hide" : "grid-item"} ${classes.nine}`}
      >
        <div className="users"></div>
      </Grid>
      <Grid
        className={`${gridCount < 10 ? "hide" : "grid-item"} ${classes.ten}`}
      >
        <div className="users"></div>
      </Grid>
      <Grid
        className={`${gridCount < 11 ? "hide" : "grid-item"} ${classes.eleven}`}
      >
        <div className="users"></div>
      </Grid>
      <Grid
        className={`${gridCount < 12 ? "hide" : "grid-item"} ${classes.twelve}`}
      >
        <div className="users"></div>
      </Grid>
      <Grid
        className={`${gridCount < 13 ? "hide" : "grid-item"} ${
          classes.thirteen
        }`}
      >
        <div className="users"></div>
      </Grid>
      <Grid
        className={`${gridCount < 14 ? "hide" : "grid-item"} ${
          classes.fourteen
        }`}
      >
        <div className="users"></div>
      </Grid>
    </Grid>
  );
};

export default AllGrids;
