import React from "react";

const Spinner = ({ minHeight }) => {
  return (
    <div className="spinner__wrapper" style={{ minHeight }}>
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;
