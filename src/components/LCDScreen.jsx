import React from "react";

const LCDScreen = ({ text }) => {
  return (
    <div className="w-80 h-40 bg-black border-8 border-green-500 rounded-lg shadow-lg flex items-center justify-center">
      {" "}
      {/* Use ml-20 for left margin */}
      <div className="text-green-500 text-2xl font-mono text-center p-4">
        {text}
      </div>
    </div>
  );
};

export default LCDScreen;
