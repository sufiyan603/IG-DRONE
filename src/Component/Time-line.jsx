
import './timeline.css';
import React, { useState } from "react";


// Timeline Data
const timelineData = [
  { date: "April 2018", content: "Started our journey with drone solutions." },
  { date: "April 2019", content: "Launched new drone technology for agriculture." },
  { date: "April 2020", content: "Expanded operations to international markets." },
  { date: "April 2021", content: "Collaborated with government projects." },
  { date: "April 2022", content: "Pioneered drone-based infrastructure monitoring." },
  { date: "April 2023", content: "Launched AI-powered drones with smart engineering." },
  { date: "April 2024", content: "Partnered with global firms for environmental monitoring." },
];

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="timeline-container">

        <div className="content">
        <img src='src/assets/drone.png' />
         <div className='head'>
         <h2>{timelineData[activeIndex].date}</h2>
         <p>{timelineData[activeIndex].content}</p>
         </div>
        </div>

      <div className="timeline">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item" onClick={() => handleClick(index)}>
            {/* Timeline marker */}
            <div className={`timeline-marker ${index <= activeIndex ? "active" : ""}`} />

            {/* Horizontal line between the markers */}
            {index < timelineData.length - 1 && (
              <div className={`timeline-line ${index <= activeIndex - 1 ? "active" : ""}`} />
            )}

            <p className={index <= activeIndex ? "active" : ""}>{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <Timeline />
    </div>
  );
}
