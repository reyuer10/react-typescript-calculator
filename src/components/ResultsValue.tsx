import React from "react";

interface ResultsValueProps {
  numValue: string;

}

const Resultsvalue: React.FC<ResultsValueProps> = ({ numValue }) => {
  return (
    <>
      <input
        className="outline-none text-slate-600 border border-slate-200 rounded-lg px-4 bg-slate-100 text-right w-full text-[50px]"
        type="text"
        readOnly
        value={numValue}
      />
    </>
  );
};

export default Resultsvalue;
