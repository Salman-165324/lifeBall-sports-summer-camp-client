import React from "react";

const PrimaryBtn = ({text}) => {
  return (
    <button className="mt-5 btn bg-green-900 hover:bg-green-950 text-white">
      {text}
    </button>
  );
};

export default PrimaryBtn;
