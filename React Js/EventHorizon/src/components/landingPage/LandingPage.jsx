// import React from 'react';

const LandingPage = () => {
    return (
      <div className="landing-page">
        <header className="header">
          <h1>Experience Unforgettable- Where Every Seat is a Front Row Experience</h1>
        </header>
        <section className="movie-list">
          <h2>Now Showing</h2>
          <div className="movie">
            <h3>Movie Title</h3>
            <p>Description of the movie</p>
            <button>Select Seats</button>   
          </div>
        </section>
        <section className="concert-list">
        <h2>Upcoming Live</h2>
        <div className="concert">
            <h3>Concert Name</h3>
            <p>Band/Artist Name</p>
            <button>Select Seats</button>
          </div>
        </section>
        <footer className="footer">
          <p>&copy; EventHorizon Tickets Booking. All rights reserved.</p>
        </footer>
      </div>
    );
  };
  
  export default LandingPage;
  