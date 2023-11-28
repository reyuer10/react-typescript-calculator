import React, { useState } from "react";
import Resultsvalue from "./components/ResultsValue";
import ButtonValue from "./components/ButtonValue";
import Header from "./components/Header";

const App: React.FC = () => {
  const [numValue, setNumValue] = useState<string>("");
  // const [resultsValue, setResultsValue] = useState<string>("");
  const [secondValue, setSecondValue] = useState<string>("");
  const [addMinus, setAddMinus] = useState<boolean>(false);
  // const [operator, setOperator] = useState<boolean>(false);
  // const Operator = ['+', '-', '*', '/'];

  const handleNumberInput = (input: string) => {
    if (numValue === "" && input.slice(-1) === "0") {
      return;
    }

    setNumValue(numValue + input);
    setSecondValue(secondValue + input);

    // if(numValue === "" && secondValue.includes(numValue + "/100")){
    //   setSecondValue(secondValue + "*")
    // }
  };

  const handleResults = () => {
    if (numValue !== "" && secondValue.includes("/100")) {
      setSecondValue(secondValue.replace(`/100`, `/100${"*"}`));
      setNumValue(eval(secondValue));
    }

    setNumValue(eval(secondValue));
  };

  const handleInputClear = () => {
    setNumValue("");
    setSecondValue("");
  };

  const handleAddMinus = () => {
    setAddMinus(!addMinus);
    addMinus
      ? setNumValue("-" + numValue)
      : setNumValue(numValue.replace("-", ""));
  };

  const handleAdd = () => {
    handleNumberInput("+");
    setNumValue("");
    setSecondValue(numValue + "+");
  };

  const handleMinus = () => {
    handleNumberInput("-");
    setNumValue("");
    setSecondValue(numValue + "-");
  };

  const handleMultiply = () => {
    handleNumberInput("*");
    setNumValue("");
    setSecondValue(numValue + "*");
  };

  const handleDivide = () => {
    handleNumberInput("-");
    setNumValue("");
    setSecondValue(numValue + "/");
  };

  const handlePercentage = () => {
    handleNumberInput("%");
    setNumValue("");

    setSecondValue(numValue + "/100");
  };

  console.log("second value: ", secondValue);
  console.log("first value: ", numValue);
  // console.log(addMinus);

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
