import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import "./LandingPage.css";
import CardComponent from "../card/CardComponent";

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState("movies");

  // Sample data for movies and events
  const data = [
    { id: 1, title: "Movie 1", type: "movie" },
    { id: 2, title: "Event 1", type: "event" },
    { id: 3, title: "Movie 2", type: "movie" },
    { id: 4, title: "Event 2", type: "event" },
    // Add more movie and event data as needed
  ];

  // Filtered data based on the active tab
  const filteredData = data.filter((item) => {
    if (activeTab === "movies") {
      return item.type === "movie";
    } else if (activeTab === "events") {
      return item.type === "event";
    }
    return true;
  });

  return (
    <div className="landing-page">
      <NavBar />
      <div className="landing-page-image">
        <div className="landing-page-text">
          <h1>EventHorizon</h1>
          <p>
            Unforgettable Journey - Where Every Seat Is A Front Row Experience
          </p>
          <button className="explore-btn">Explore movies and events</button>
        </div>
      </div>
      <section className="second-fold">
        <div className="tabs">
          <button
            className={activeTab === "movies" ? "active" : ""}
            onClick={() => setActiveTab("movies")}
          >
            Movies
          </button>
          <button
            className={activeTab === "events" ? "active" : ""}
            onClick={() => setActiveTab("events")}
          >
            Events
          </button>
        </div>
        <div className="content">
          {filteredData.map((item) => (
            <div key={item.id}>
              {/* <h3>{item.title}</h3>
              <p>Type: {item.type}</p> */}
              <CardComponent title={item.title} type={item.type} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
