import React from "react";
import { useContext } from "react";
import Context from "../contextFiles/context";
// import { toString, toDataURL } from "qrcode";
import QRCode from "react-qr-code";
import { useEffect } from "react";
import CardComponent from "../card/CardComponent";
import "./OrderConfirmed.css";
const OrderConfirmed = () => {
  const [data, setData] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);
  var qrSrc = "";
  //   console.log(JSON.parse(localStorage.getItem("addInfo")));
  const allData = JSON.parse(localStorage.getItem("addInfo"));
  const name = allData.name;
  console.log(allData.selectedSeats);
  const postData = {
    name: name,
    ticket: allData.selectedSeats.join(","),
  };
  //   const data = useContext(Context);
  // Function to generate QR code can be placed here
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

    fetch(
      "https://eventhorizonbackend-4090e4862a7d.herokuapp.com/grid/postseats",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      }
    );
    fetchData();
    console.log(data);

    console.log(filteredData);
  }, []);
  //   console.log(filteredData);
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
        {/* <img src={svgContent} alt="QR code" /> */}
        {/* <div className="svg" dangerouslySetInnerHTML={{ __html: svgContent }} /> */}
        <QRCode
          value={`${allData.name}, ${allData.selectedSeats}, ${allData.date}, ${allData.time}, ${allData.location}  `}
        />
      </div>
      <div className="recommendation">
        <h2>You might also like</h2>
        {/* <p>{filteredData[0].name}</p> */}
        <div>
          {data.map((item) => {
            if (item.name === name) {
              return (
                <div className="recom-card">
                  <img className="recomImg" src={item.recommendation_img} />
                  <p>{item.recommendation}</p>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmed;
