import React, { useEffect, useState } from "react";
import Footer from "../componets/Footer/Footer";
import Screen from "../componets/Screen/Screen";

const Page = () => {
  const [gridCount, setGridCount] = useState(1);
  const addGrid = () => {
    setGridCount(gridCount + 1);
  };
  const handleRemove = () => {
    setGridCount(gridCount - 1);
  };
  return (
    <div>
      <Screen gridCount={gridCount} />
      <Footer
        gridCount={gridCount}
        handleClick={addGrid}
        handleRemove={handleRemove}
      />
    </div>
  );
};
export default Page;
