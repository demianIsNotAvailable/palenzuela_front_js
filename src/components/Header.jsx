import React from "react";

const tabs = [
  { id: "section1", emoji: "➕👤" },  // New Person
  { id: "section2", emoji: "📋👥" },  // People List
  { id: "section3", emoji: "➕🗓️" }, // New Event
  { id: "section4", emoji: "📅📃" }, // Event List
];

const Header = ({ activeSection, onTabClick }) => {
  return (
    <div className="flex flex-row sm:flex-row divide-y sm:divide-y-0 sm:divide-x border-b border-gray-300 text-lg sm:text-xl">
      {tabs.map(({ id, emoji }) => (
        <button
          key={id}
          onClick={() => onTabClick(id)}
          className={`flex-1 text-center py-3 px-4 transition-colors font-medium ${
            activeSection === id
              ? "bg-blue-600 text-white"
              : "bg-gray-100 hover:bg-blue-100"
          }`}
          title={id.replace("section", "Section ")} // optional: shows tooltip
        >
          {emoji}
        </button>
      ))}
    </div>
  );
};

export default Header;
