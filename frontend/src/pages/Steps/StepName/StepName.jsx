import React from "react";

const StepName = ({ onclick }) => {
  return (
    <div>
      <div>Name Component</div>
      <button onClick={onclick}>Next</button>
    </div>
  );
};

export default StepName;
