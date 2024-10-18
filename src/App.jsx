import { useState } from "react";
// import "./App.css";
import { isPalindrome } from "./components/Palindrome.jsx";
import LCDScreen from "./components/LCDScreen";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleCheck = () => {
    setResult(isPalindrome(input));
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 h-screen w-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-4">
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
              className="mt-4 border border-gray-300 rounded-md p-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={handleCheck}
              className="w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition"
            >
              Check
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
