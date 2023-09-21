import React from "react";
import Grids from "../Grids";


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
