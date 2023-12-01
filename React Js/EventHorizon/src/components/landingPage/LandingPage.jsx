// import React from 'react';

import NavBar from "../NavBar/NavBar";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <div className="landing-page">
      <NavBar />
      <div className="landing-page-image">
        {/* <footer className="footer">
          <p>&copy; EventHorizon Tickets Booking. All rights reserved.</p>
        </footer> */}
        <div className="landing-page-text">
          <h1>EventHorizon</h1>
          <p>
            Unforgettable Journey - Where Every Seat Is A Front Row Experience
          </p>
          <button className="explore-btn">Explore movies and events</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
