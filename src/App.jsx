import { useState } from "react";
// import "./App.css";
import { isPalindrome } from "./components/Palindrome.jsx";
import LCDScreen from "./components/LCDScreen";
import { RiStickyNoteLine } from "react-icons/ri";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleCheck = () => {
    setResult(isPalindrome(input));
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-300 h-screen w-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Palindrome Checker APP
        </h1>
        <div className="flex flex-col items-center">
          <LCDScreen text={result} className="pl-20" />
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              value={input}
              onChange={handleChange}
              placeholder="Enter text"
              className="mt-4 border border-gray-300 rounded-md p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={handleCheck}
                className="w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition transform hover:scale-105"
              >
                Check
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="w-full bg-red-500 text-white rounded-md p-2 hover:bg-red-600 transition transform hover:scale-105"
              >
                Clear
              </button>
            </div>
          </form>
        </div>
        <div className="dispaly flex items-center justify-ceneter mt-5 underline font-bold ">
          {/* <RiStickyNoteLine style={{ color: "red" }} size={24} /> */}
          NOTE:
        </div>
        <div className="mt-1 text-gray-700">
          A palindrome is a word or sentence that's spelled the same way both
          forward and backward, ignoring punctuation, case, and spacing.
        </div>
      </div>
    </div>
  );
}

export default App;
