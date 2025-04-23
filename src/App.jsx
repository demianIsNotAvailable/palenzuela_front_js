import React, { useState } from "react";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";

const App = () => {
  const [activeSection, setActiveSection] = useState("section1");

  const renderSection = () => {
    switch (activeSection) {
      case "section1":
        return <Section1 />;
      case "section2":
        return <Section2 />;
      case "section3":
        return <Section3 />;
      case "section4":
        return <Section4 />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 border border-gray-300 rounded-lg shadow-md">
      <Header activeSection={activeSection} onTabClick={setActiveSection} />
      <div className="p-4 min-h-[300px] bg-white">{renderSection()}</div>
    </div>
  );
};

export default App;
