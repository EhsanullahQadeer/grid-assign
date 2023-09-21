import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import Footer from "../componets/Footer/Footer";
import Screen from "../componets/Screen/Screen";

const useStyles = makeStyles((theme) => ({
  gridMain: {
    padding: "13px 9px 0",
  },
  "@media (max-width: 600px)": {
    gridMain: {
      padding: "6px 4px 0",
    },
  },
}));
const Page = () => {
  const [gridCount, setGridCount] = useState(1);
  const [isSmScreen, setisSmScreen] = useState(window.innerWidth < 600);
  const addGrid = () => {
    setGridCount((pre) => {
      return pre < 15 ? pre + 1 : 15;
    });
  };
  const handleRemove = () => {
    setGridCount((pre) => {
      return pre > 1 ? pre - 1 : 1;
    });
  };

  const classes = useStyles();
  return (
    <div className={classes.gridMain}>
      <Screen
        gridCount={gridCount}
        setisSmScreen={setisSmScreen}
        isSmScreen={isSmScreen}
      />
      <Footer
        gridCount={gridCount}
        handleClick={addGrid}
        handleRemove={handleRemove}
        isSmScreen={isSmScreen}
      />
    </div>
  );
};
export default Page;
