import React from "react";
import Grids from "../Grids";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  container: {
    backgroundColor: "#000",
  },
});
const Screen = ({ gridCount,isSmScreen,setisSmScreen }, props) => {
  return (
    <div>
      <div>
        <Grids gridCount={gridCount} isSmScreen={isSmScreen} setisSmScreen={setisSmScreen}/>
      </div>
    </div>
  );
};

export default Screen;
