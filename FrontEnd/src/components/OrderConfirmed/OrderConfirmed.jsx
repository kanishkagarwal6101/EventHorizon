import React from "react";
import { useContext } from "react";
import Context from "../contextFiles/context";
const OrderConfirmed = () => {
  //   console.log(JSON.parse(localStorage.getItem("addInfo")));
  const allData = JSON.parse(localStorage.getItem("addInfo"));
  const name = allData.name;
  console.log(allData.selectedSeats);
  //   const data = useContext(Context);
  // Function to generate QR code can be placed here

  return (
    <div className="movie-order-confirmed">
      <h1>Order Confirmed</h1>
      <div className="movie-details">
        <h2>Movie Details</h2>
        <p>Name: {name}</p>
        <p>
          Date & Time: {allData.date} {allData.time}
        </p>
        <p>Location: {allData.location}</p>
        <p>Seats: {allData.selectedSeats.join(", ")}</p>
        {/* QR code component can go here */}
      </div>
      <div className="recommendation">
        <h2>You might also like</h2>
        {/* Recommendation section body goes here */}
      </div>
    </div>
  );
};

export default OrderConfirmed;
