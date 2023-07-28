import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center">
        <button className="border p-2 rounded-xl bg-sky-600 text-white font-semibold font-poppins btn">
          Click Me
        </button>
        <button className="border p-2 rounded-xl bg-red-600 text-white font-semibold font-poppins heading-1">
          Click Me
        </button>
      </div>
    </div>
  );
};

export default App;
