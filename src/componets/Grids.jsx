import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { style } from "../utilties/style";
import { animator } from "./Animator";
import { GridItem, Users } from "./gridStyle";
const AllGrids = ({ gridCount, setisSmScreen, isSmScreen }) => {
  const [isAniamtion, setIsAnimation] = useState(true);
  useEffect(() => {
    let resizeTimer;
    setIsAnimation(true);
    animator();
    const handleResize = () => {
      setIsAnimation(false);
      setisSmScreen(window.innerWidth < 600);
      animator();
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setIsAnimation(true);
      }, 100);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [gridCount]);

  const getStyle = (index, theme) => {
    return style[index - 1](theme);
  };
  const useStyles = makeStyles((theme) => ({
    ...getStyle(
      isSmScreen ? (gridCount > 8 ? 8 : gridCount) : gridCount,
      theme
    ),
    hide: {
      display: "none",
    },
    girdAnimation: {
      transitionProperty: "top, left, right, bottom, width, height, background",
      transitionDuration: "0.5s",
      transitionTimingFunction: " cubic-bezier(0.4, 0, 0.2, 1)",
    },
  }));
  const classes = useStyles();
  return (
    <Grid id="gridWrapper" className={classes.gridContainer}>
      <GridItem className={`${classes.one} grid-item`}>
        <Users className={isAniamtion ? classes.girdAnimation : ""}> </Users>
      </GridItem>
      <GridItem
        className={`${gridCount < 2 ? classes.hide : "grid-item"} ${
          classes.two
        }`}
      >
        <Users className={isAniamtion ? classes.girdAnimation : ""}> </Users>
      </GridItem>
      <GridItem
        className={`${gridCount < 3 ? classes.hide : "grid-item"} ${
          classes.three
        }`}
      >
        <Users className={isAniamtion ? classes.girdAnimation : ""}> </Users>
      </GridItem>
      <GridItem
        className={`${gridCount < 4 ? classes.hide : "grid-item"} ${
          classes.four
        }`}
      >
        <Users className={isAniamtion ? classes.girdAnimation : ""}> </Users>
      </GridItem>
      <GridItem
        className={`${gridCount < 5 ? classes.hide : "grid-item"} ${
          classes.five
        }`}
      >
        <Users className={isAniamtion ? classes.girdAnimation : ""}> </Users>
      </GridItem>
      <GridItem
        className={`${gridCount < 6 ? classes.hide : "grid-item"} ${
          classes.six
        }`}
      >
        <Users className={isAniamtion ? classes.girdAnimation : ""}> </Users>
      </GridItem>
      <GridItem
        className={`${gridCount < 7 ? classes.hide : "grid-item"} ${
          classes.seven
        }`}
      >
        <Users className={isAniamtion ? classes.girdAnimation : ""}> </Users>
      </GridItem>
      <GridItem
        className={`${gridCount < 8 ? classes.hide : "grid-item"} ${
          classes.eight
        }`}
      >
        <Users className={isAniamtion ? classes.girdAnimation : ""}> </Users>
      </GridItem>
      <GridItem
        className={
          isSmScreen
            ? classes.hide
            : `${gridCount < 9 ? classes.hide : "grid-item"} ${classes.nine}`
        }
      >
        <Users className={isAniamtion ? classes.girdAnimation : ""}> </Users>
      </GridItem>
      <GridItem
        className={
          isSmScreen
            ? classes.hide
            : `${gridCount < 10 ? classes.hide : "grid-item"} ${classes.ten}`
        }
      >
        <Users className={isAniamtion ? classes.girdAnimation : ""}> </Users>
      </GridItem>
      <GridItem
        className={
          isSmScreen
            ? classes.hide
            : `${gridCount < 11 ? classes.hide : "grid-item"} ${classes.eleven}`
        }
      >
        <Users className={isAniamtion ? classes.girdAnimation : ""}> </Users>
      </GridItem>
      <GridItem
        className={
          isSmScreen
            ? classes.hide
            : `${gridCount < 12 ? classes.hide : "grid-item"} ${classes.twelve}`
        }
      >
        <Users className={isAniamtion ? classes.girdAnimation : ""}> </Users>
      </GridItem>
      <GridItem
        className={
          isSmScreen
            ? classes.hide
            : `${gridCount < 13 ? classes.hide : "grid-item"} ${
                classes.thirteen
              }`
        }
      >
        <Users className={isAniamtion ? classes.girdAnimation : ""}> </Users>
      </GridItem>
      <GridItem
        className={
          isSmScreen
            ? classes.hide
            : `${gridCount < 14 ? classes.hide : "grid-item"} ${
                classes.fourteen
              }`
        }
      >
        <Users className={isAniamtion ? classes.girdAnimation : ""}> </Users>
      </GridItem>
    </Grid>
  );
};

export default AllGrids;
