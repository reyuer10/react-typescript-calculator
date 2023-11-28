import React from "react";
import { FaDivide } from "react-icons/fa6";
import { FaEquals } from "react-icons/fa6";
import { PiPlusMinusBold } from "react-icons/pi";
import { FaPercent } from "react-icons/fa6";

interface ButtonValueProps {
  handleNumberInput: (input: string) => void;
  handleInputClear: () => void;
  handleResults: () => void;
  handleAdd: () => void;
  handleMinus: () => void;
  handleMultiply: () => void;
  handleDivide: () => void;
  handlePercentage: () => void;
  handleAddMinus: () => void;
}

const ButtonValue: React.FC<ButtonValueProps> = ({
  handleNumberInput,
  handleInputClear,
  handleResults,
  handleAdd,
  handleMinus,
  handleMultiply,
  handleDivide,
  handlePercentage,
  handleAddMinus,
}) => {
  return (
    <div className="grid grid-cols-4 gap-3 font-dm-sans text-[50px] font-light true-to-self text-teal-700">
      <button
        onClick={handleInputClear}
        className="text-[30px] bg-amber-200 w-24 h-16 rounded-xl shadow-md shadow-slate-800 active:translate-y-1"
      >
        AC
      </button>
      <button onClick={handleAddMinus} className="bg-slate-200 w-24 h-16 rounded-xl shadow-md shadow-slate-800 active:translate-y-1 flex items-center justify-center">
        <PiPlusMinusBold size={24} />
      </button>
      <button onClick={handlePercentage} className="bg-slate-200 w-24 items-center justify-center flex h-16 rounded-xl shadow-md shadow-slate-800 active:translate-y-1">
        <FaPercent size={24} />
      </button>
      <button onClick={handleDivide} className="bg-slate-200 w-24 flex justify-center items-center h-16 rounded-xl shadow-md shadow-slate-800 active:translate-y-1">
        <FaDivide size={24} />
      </button>
      <button
        onClick={() => handleNumberInput('7')}
        className="bg-slate-200 w-24 rounded-xl shadow-md shadow-slate-800 active:translate-y-1"
      >
        7
      </button>
      <button
        onClick={() => handleNumberInput('8')}
        className="bg-slate-200 w-24 rounded-xl shadow-md shadow-slate-800 active:translate-y-1"
      >
        8
      </button>
      <button
        onClick={() => handleNumberInput('9')}
        className="bg-slate-200 w-24 rounded-xl shadow-md shadow-slate-800 active:translate-y-1"
      >
        9
      </button>
      <button onClick={handleMultiply} className="bg-slate-200 w-24 rounded-xl shadow-md shadow-slate-800 active:translate-y-1">
        <svg
          className="fill-current text-teal-700 m-auto"
          xmlns="http://www.w3.org/2000/svg"
          id="Outline"
          viewBox="0 0 24 24"
          width="34"
          height="34"
        >
          <path d="M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z" />
        </svg>
      </button>
      <button
        onClick={() => handleNumberInput('4')}
        className="bg-slate-200 w-24 rounded-xl shadow-md shadow-slate-800 active:translate-y-1"
      >
        4
      </button>
      <button
        onClick={() => handleNumberInput('5')}
        className="bg-slate-200 w-24 rounded-xl shadow-md shadow-slate-800 active:translate-y-1"
      >
        5
      </button>
      <button
        onClick={() => handleNumberInput('6')}
        className="bg-slate-200 w-24 rounded-xl shadow-md shadow-slate-800 active:translate-y-1"
      >
        6
      </button>
      <button onClick={handleMinus} className="bg-slate-200 w-24 rounded-xl shadow-md shadow-slate-800 active:translate-y-1">
        <svg
          className="fill-current text-teal-700 m-auto"
          xmlns="http://www.w3.org/2000/svg"
          id="Outline"
          viewBox="0 0 24 24"
          width="34"
          height="34"
        >
          <rect x="6" y="11" width="12" height="2" rx="1" />
        </svg>
      </button>
      <button
        onClick={() => handleNumberInput('1')}
        className="bg-slate-200 w-24 rounded-xl shadow-md shadow-slate-800 active:translate-y-1"
      >
        1
      </button>
      <button
        onClick={() => handleNumberInput('2')}
        className="bg-slate-200 w-24 rounded-xl shadow-md shadow-slate-800 active:translate-y-1"
      >
        2
      </button>
      <button
        onClick={() => handleNumberInput('3')}
        className="bg-slate-200 w-24 rounded-xl shadow-md shadow-slate-800 active:translate-y-1"
      >
        3
      </button>
      <button onClick={handleAdd} className="bg-slate-200 w-24 rounded-xl shadow-md shadow-slate-800 active:translate-y-1">
        <svg
          className="fill-current m-auto"
          xmlns="http://www.w3.org/2000/svg"
          id="Outline"
          viewBox="0 0 24 24"
          width="34"
          height="34"
        >
          <path d="M17,11H13V7a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1v4H7a1,1,0,0,0-1,1H6a1,1,0,0,0,1,1h4v4a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13h4a1,1,0,0,0,1-1h0A1,1,0,0,0,17,11Z" />
        </svg>
      </button>
      <button onClick={() => handleNumberInput("0")} className="col-span-2 bg-slate-200 w-[215px] rounded-xl shadow-md shadow-slate-800 active:translate-y-1">0</button>
      <button onClick={() => handleNumberInput(".")} className="w-24 rounded-xl shadow-md shadow-slate-800 active:translate-y-1 bg-slate-200">
        .
      </button>
      <button
        onClick={handleResults}
        className=" w-24 bg-slate-200 flex justify-center items-center rounded-xl shadow-md shadow-slate-800 active:translate-y-1"
      >
        <FaEquals size={24} />
      </button>
    </div>
  );
};

export default ButtonValue;
