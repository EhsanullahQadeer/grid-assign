import React, { useEffect, useState } from "react";
import Footer from "../componets/Footer/Footer";
import Screen from "../componets/Screen/Screen";

const Page = () => {
  const [gridCount, setGridCount] = useState(1);
  const addGrid = () => {
    setGridCount(pre => {
      return pre < 15 ?
        pre + 1 : 15
    });
  };
  const handleRemove = () => {
    setGridCount(pre => {
      return pre > 1 ?
        pre - 1 : 1
    });
  };
  return (
    <div style={{ padding: "13px 9px 0" }}>
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
