import React, { useState, useEffect } from "react";
import Resultsvalue from "./components/ResultsValue";
import ButtonValue from "./components/ButtonValue";
import Header from "./components/Header";

const App: React.FC = () => {
  const [numValue, setNumValue] = useState<string>("");
  const [secondValue, setSecondValue] = useState<string>("");
  const [addMinus, setAddMinus] = useState<boolean>(false);
  // const [isSecondValuePercentage, setIsSecondValuePercentage] = useState<boolean>(false);

  const handleNumberInput = (input: string) => {
    if (numValue === "" && input.slice(-1) === "0") {
      return;
    }

    setNumValue(numValue + input);
    setSecondValue(secondValue + input);
  };
  // button results
  const handleResults = () => {
    setNumValue(eval(secondValue));
  };

  // for button clear
  const handleInputClear = () => {
    setNumValue("");
    setSecondValue("");
  };

  // Add minus sign button
  const handleAddMinus = () => {
    setAddMinus(!addMinus);
    addMinus
      ? setNumValue("-" + numValue)
      : setNumValue(numValue.replace("-", ""));
  };

  // Operator add, minus, multiply, divide
  const handleAdd = () => {
    setNumValue("");
    setSecondValue(numValue + "+");
  };

  const handleMinus = () => {
    setNumValue("");
    setSecondValue(numValue + "-");
  };

  const handleMultiply = () => {
    setNumValue("");
    setSecondValue(numValue + "*");
  };

  const handleDivide = () => {
    setNumValue("");
    setSecondValue(numValue + "/");
  };

  // For percentage
  const handlePercentage = () => {
    setNumValue("");
    setNumValue(eval(numValue + "/100"));
  };

  useEffect(() => {
    console.log("second value: ", secondValue);
    console.log("first value: ", numValue);
  }, [secondValue, numValue]);

  return (
    <div className="true-to-self h-screen w-screen flex flex-col justify-center items-center">
      <div className="p-5 rounded-2xl space-y-7 bg-slate-400 shadow-lg w-[500px]">
        <Header />
        <Resultsvalue numValue={numValue} />
        <ButtonValue
          handleInputClear={handleInputClear}
          handleNumberInput={handleNumberInput}
          handleResults={handleResults}
          handleAdd={handleAdd}
          handleMinus={handleMinus}
          handleMultiply={handleMultiply}
          handleDivide={handleDivide}
          handlePercentage={handlePercentage}
          handleAddMinus={handleAddMinus}
        />
      </div>
    </div>
  );
};

export default App;
