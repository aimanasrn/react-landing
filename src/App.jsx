import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pakatan from "./components/Pakatan";

const App = () => {
  return (
    <div>
      <Pakatan />
      {/* <Navbar />
      <Hero />
      <div className="flex justify-center items-center">
        <button className="border p-2 rounded-xl bg-sky-600 text-white font-semibold font-poppins btn">
          Click Me
        </button>
        <button className="border p-2 rounded-xl bg-red-600 text-white font-semibold font-poppins heading-1">
          Click Me
        </button>
      </div> */}
    </div>
  );
};

export default App;
