import React from "react";
import AttaProducts from "./AttaProducts";
import RiceProducts from "./RiceProducts";
import WholeGrains from "./WholeGrains"; // ✅ This must match filename exactly


const AttaRiceGrains = () => {
  return (
    <div>
      {/* Atta Section */}
      <AttaProducts />

      {/* Rice Section */}
      <RiceProducts />

      {/* Whole Grains Section */}
      <WholeGrains />
    </div>
  );
};

export default AttaRiceGrains;
