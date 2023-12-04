import React, { useEffect, useState } from "react";
import "./SeatingGrid.css";
import StripeBtn from "../StripeFiles/StripeBtn";
import { useLocation } from "react-router-dom";
import OrderConfirmed from "../OrderConfirmed/OrderConfirmed";
import Context from "../contextFiles/context.js";

const SeatingGrid = () => {
  const location = useLocation();
  const [bookedSeats, setBookedSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    // const fetchBookedSeats = async () => {
    //   try {
    //     const response = await fetch("http://localhost:8080/grid/getseats/");
    //     const data = await response.json();
    //     console.log(data);
    //     const bookedSeatsArray = data.ticket.split(', ');
    //     setBookedSeats(bookedSeatsArray);
    //     console.log(bookedSeatsArray);
    //   } catch (err) {
    //     console.log(`Issue in fetching booked seats ${err}`);
    //   }
    // };
    fetch("http://localhost:8080/grid/getseats/").then(res=>res.json()).then(d=>{
      console.log(d.movie[0].ticket)
      const bookedSeatsArray = d.movie[0].ticket.split(',');
      setBookedSeats(bookedSeatsArray);
      console.log(bookedSeatsArray);
    })

    // fetchBookedSeats();
  }, []);

  const handleSeatClick = (seatNumber) => {
    if (!bookedSeats.includes(seatNumber)) {
      setSelectedSeats((prevSelectedSeats) => {
        if (prevSelectedSeats.includes(seatNumber)) {
          return prevSelectedSeats.filter((seat) => seat !== seatNumber);
        } else {
          return [...prevSelectedSeats, seatNumber];
        }
      });
    }
  };

  const totalRows = 10; // Total number of rows
  const initialSeats = 8; // Initial number of seats in the first row
  const seatsIncrease = 3; // Number of seats to increase every 2 rows

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
      <StripeBtn
        allData={location.state.data}
        name={location.state.data.title}
        imageSource={location.state.data.imagesrc}
        price={selectedSeats.length * 10}
        seats={selectedSeats.length}
        selectedSeats={selectedSeats}
      />
      {/* <Context.Provider value={location.state.data}>
        <div className="order-confirmed-hide">
          <OrderConfirmed />
        </div>
      </Context.Provider> */}
    </div>
  );
};

export default SeatingGrid;
