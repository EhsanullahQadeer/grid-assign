import React from "react";
import Grids from "../Grids";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  container: {
    backgroundColor: "#000",
  },
});
const Screen = ({ gridCount }, props) => {
  return (
    <div>
      <div>
        <Grids gridCount={gridCount} />
      </div>
    </div>
  );
};

export default Screen;
