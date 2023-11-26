import React, { useState } from "react";
import Resultsvalue from "./components/ResultsValue";
import ButtonValue from "./components/ButtonValue";
import Header from "./components/Header";

const App: React.FC = () => {
  const [numValue, setNumValue] = useState<string>("");
  // const [resultsValue, setResultsValue] = useState<number>(0);

  const handleNumberInput = (input: number) => {
    setNumValue(numValue + input);
  };

  // const handleOperator = (input: number) => {
  //   setNumValue(numValue + input);
  // };

  const handleResults = () => {
    setNumValue(eval(numValue));
  };
  const handleInputClear = () => {
    setNumValue("0");
  };

  return (
    <div className="true-to-self h-screen w-screen flex flex-col justify-center items-center">
      <div className="p-5 rounded-2xl space-y-7 bg-slate-400 shadow-lg w-[500px]">
        <Header />
        <Resultsvalue numValue={numValue} />
        <ButtonValue
          handleInputClear={handleInputClear}
          handleNumberInput={handleNumberInput}
          handleResults={handleResults}
        />
      </div>
    </div>
  );
};

export default App;
