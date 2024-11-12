import React, { useState, useEffect } from "react";
import "./Tabscss.css";

const Tabs = () => {
  const storedActiveTab = localStorage.getItem("activeTab");
  const initialTab = storedActiveTab ? parseInt(storedActiveTab) : 0;

  const [activeTab, setActiveTab] = useState(initialTab);

  const tabContents = [
    {
      header: "Content 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero",
    },
    {
      header: "Content 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
    },
    {
      header: "Content 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
    },
    {
      header: "Content 4",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  return (
    <div className="container">
      <div className="tabs-container">
        <div className="tabs-header">
          <h1>Tabs Component With React</h1>
        </div>
        <div className="tabs-buttons">
          {tabContents.map((_, index) => (
            <div
              key={index}
              className={`tab ${activeTab === index ? "active" : ""}`}
              onClick={() => handleTabClick(index)}
            >
              Tab {index + 1}
            </div>
          ))}
        </div>
        <div className="tab-content" style={{ backgroundColor: "#003366" }}>
          <h2>{tabContents[activeTab].header}</h2>
          <p>{tabContents[activeTab].text}</p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
