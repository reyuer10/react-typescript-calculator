import React from "react";

interface ResultsValueProps {
  numValue: string;
}

const Resultsvalue: React.FC<ResultsValueProps> = ({ numValue }) => {
  return (
    <>
      <input
        value={numValue || "0"}
        className="outline-none text-slate-600 border border-slate-200 shadow-slate-800 shadow-md rounded-lg px-4 bg-slate-100 text-right w-full text-[50px]"
        readOnly
      />
    </>
  );
};

export default Resultsvalue;
