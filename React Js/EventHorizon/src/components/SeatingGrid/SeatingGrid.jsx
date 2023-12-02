import React, { useState } from "react";
import "./SeatingGrid.css";
import StripeBtn from "../StripeFiles/StripeBtn";
// import StripeBtn from "../StripeFiles/StripeBtn";

const SeatingGrid = ({ bookedSeats }) => {
  const totalRows = 10; // Total number of rows
  const initialSeats = 8; // Initial number of seats in the first row
  const seatsIncrease = 3; // Number of seats to increase every 2 rows

  // Use state to manage selected seats
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatNumber) => {
    // Check if the seat is already booked or selected
    if (!bookedSeats.includes(seatNumber)) {
      setSelectedSeats((prevSelectedSeats) => {
        if (prevSelectedSeats.includes(seatNumber)) {
          // Remove seat if already selected
          return prevSelectedSeats.filter((seat) => seat !== seatNumber);
        } else {
          // Add seat to selected seats
          return [...prevSelectedSeats, seatNumber];
        }
      });
    }
  };

  const renderSeats = () => {
    const rows = [];

    for (let i = 1; i <= totalRows; i++) {
      let seatsInRow = initialSeats + Math.floor((i - 1) / 2) * seatsIncrease;

      const seats = [];
      for (let j = 1; j <= seatsInRow; j++) {
        const seatNumber = `${String.fromCharCode(64 + i)}${j}`;

        const isBooked = bookedSeats.includes(seatNumber);
        const isSelected = selectedSeats.includes(seatNumber);

        const seatClasses = `seat ${isBooked ? "booked" : ""} ${
          isSelected ? "selected" : ""
        }`;

        seats.push(
          <div
            key={seatNumber}
            className={seatClasses}
            onClick={() => handleSeatClick(seatNumber)}
          >
            {seatNumber}
          </div>
        );
      }

      rows.push(
        <div key={i} className="row">
          {seats}
        </div>
      );
    }

    return rows;
  };

  return (
    <div className="seating-grid">
      <div className="screen">Screen this way</div>
      {renderSeats()}
      <StripeBtn />
    </div>
  );
};

export default SeatingGrid;
