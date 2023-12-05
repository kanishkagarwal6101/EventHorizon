import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import "./LandingPage.css";
import CardComponent from "../card/CardComponent";
import axios from "axios";
import { useEffect } from "react";
const LandingPage = () => {
  const [activeTab, setActiveTab] = useState("movies");
  const [data, setData] = useState([]);
  // Sample data for movies and events
  // var data = [];

  const scrollToSecondHalf = () => {
    const secondHalfSection = document.getElementById("second-half");
    secondHalfSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  var filteredData = [];
  useEffect(() => {
    console.log("hi");
    const fetchData = () => {
      fetch(
        "https://eventhorizonbackend-4090e4862a7d.herokuapp.com/landingpage/getAllEvents"
      )
        .then((response) => response.json())
        .then((d) => {
          // console.log(d.events);
          for (let event of d.events) {
            setData((data) => [...data, event]);
          }
        });
    };

    fetchData();
    console.log(data);
  }, []);

  console.log(data);
  filteredData = data.filter((item) => {
    if (activeTab === "movies") {
      return item.type === "Movie";
    } else if (activeTab === "events") {
      return item.type === "Sports" || item.type === "Concert";
    }
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
          <button onClick={scrollToSecondHalf} className="explore-btn">
            Explore movies and events
          </button>
        </div>
      </div>
      <section id="second-half" className="second-fold">
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
              <CardComponent
                key={item.id}
                title={item.name}
                type={item.type}
                imagesrc={item.image}
                date={item.date}
                time={item.time}
                location={item.location}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
