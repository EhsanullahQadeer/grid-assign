import React from "react";
import { makeStyles } from "@mui/styles";
import { Hidden } from "@mui/material";
import commentImg from "../../assets/comment.png";
import videoImg from "../../assets/video.png";
import micImg from "../../assets/mic.png";
import handImg from "../../assets/hand.png";
import likeImg from "../../assets/like.png";
import dislikeImg from "../../assets/dislike.png";
import userProfileImg from "../../assets/userProfile.png";
import callImg from "../../assets/call.png";
import Item15 from "../../assets/15Item.png";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    justifyContent: "space-between",
    position: "fixed",
    bottom: "13px",
    left: 0,
    width: "100%",
    padding: "0 15px",
    alignItems: "center",
    boxSizing: "border-box",
  },
  btns: {
    display: "flex",
    columnGap: "10px",
    flex: "1",
  },
  addBtn: {
    width: "34px",
    height: "34px",
    background: "green",
    borderRadius: "50%",
    cursor: "pointer",
  },
  removeBtn: {
    width: "34px",
    height: "34px",
    background: "red",
    cursor: "pointer",
    borderRadius: "50%",
  },
  centerDiv: {
    flex: "2",
  },
  iconsDiv: {
    width: "470px",
    height: "68px",
    borderRadius: "40px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    gap: "24px",
    overflow: "hidden",
    position: "relative",

    backgroundColor: "#212a3d",
  },
  icons: {
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.1)",
      transition: "transform .3s",
    },
  },
  callIcon: {
    height: "40px",
    width: "40px",
    backgroundColor: "#ff0000",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  lastDiv: {
    display: "flex",
    columnGap: "10px",
    justifyContent: "end",
    flex: "1",
  },
  firstControl: {
    width: "186px",
    height: "112px",
    borderRadius: "15px",
  },
  secondControl: {
    width: "100px",
    height: "100px",
  },
  visible: {
    opacity: "1",
    transform: " scale(1)",
    transition: "opacity 0.5s, transform 0.5s"
  }
  , unVisible: {
    opacity: "0",
    transform: "scale(0)",
    transition: "opacity 0.5s, transform 0.5s"
  }

}));
const Footer = ({ handleClick, handleRemove, gridCount }, props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.main}>
      <div className={classes.btns}>
        <div
          className={`${classes.addBtn} ${gridCount >= 15 ? classes.unVisible : classes.visible}`}
          onClick={handleClick}
        ></div>
        <div
          className={`${classes.removeBtn} ${gridCount <= 1 ? classes.unVisible : classes.visible}
          `}
          onClick={handleRemove}
        ></div>
      </div>

      <Hidden smDown>
        <div className={classes.centerDiv}>
          <div className={classes.iconsDiv}>
            <img className={classes.icons} src={commentImg} alt="cooment" />
            <img className={classes.icons} src={videoImg} alt="video" />
            <img className={classes.icons} src={micImg} alt="mic" />

            <div className={`${classes.callIcon} ${classes.icons}`}>
              <img src={callImg} alt="call" />
            </div>
            <img className={classes.icons} src={handImg} alt="hand" />
            <img className={classes.icons} src={likeImg} alt="like" />
            <img className={classes.icons} src={dislikeImg} alt="dislike" />
          </div>
        </div>
      </Hidden>

      <Hidden smDown>
        <div className={classes.lastDiv}>
          <div
            className={`${classes.firstControl} ${gridCount == 15 ? classes.visible : classes.unVisible
              } `}
          >
            <img src={Item15} alt="user" />
          </div>
          <div className={classes.secondControl}>
            <img src={userProfileImg} alt="profile" />
          </div>
        </div>
      </Hidden>
    </div>
  );
};
export default Footer;
