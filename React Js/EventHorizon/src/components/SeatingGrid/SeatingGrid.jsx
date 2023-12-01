import React from "react";
import "./SeatingGrid.css";

const SeatingGrid = ({ onSeatClick, bookedSeats }) => {
  const rows = 6;
  const seatsPerRow = 20;

  const renderSeats = () => {
    const seats = [];

    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= seatsPerRow; j++) {
        const seatNumber = `${String.fromCharCode(64 + i)}${j}`;

        // Check if the seat is booked
        // const isBooked = bookedSeats.includes(seatNumber);
        const isBooked = false;
        seats.push(
          <div
            key={seatNumber}
            className={`seat ${isBooked ? "booked" : ""}`}
            onClick={() => onSeatClick(seatNumber)}
          >
            {seatNumber}
          </div>
        );
      }
    }

    return seats;
  };

  return (
    <>
      <div className="screen">Screen this way</div>
      <div className="seating-grid">{renderSeats()}</div>
    </>
  );
};

export default SeatingGrid;
