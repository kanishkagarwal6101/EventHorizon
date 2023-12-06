import React, { useState, useEffect } from "react";
import "./stripecomp.css";
import axios from "axios";
const ProductDisplay = (props) => (
  <section className="stripe-card">
    <div className="product">
      <img src={props.imageSource} alt="The cover of Stubborn Attachments" />
      <div className="description">
        <h3>{props.name}</h3>
        <h5>${props.price}</h5>
      </div>
    </div>
    {/* <form action="/create-checkout-session" method="POST"> */}
    <button
      type="submit"
      onClick={() =>
        handleCheckout(props.seats, props.allData, props.selectedSeats)
      }
    >
      Checkout
    </button>
  </section>
);

async function handleCheckout(seats, allData, selectedSeats) {
  const url =
    " https://stripebackendeventh-b2f20e6d25e4.herokuapp.com/create-checkout-session";
  // const res = await axios.post(url);
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ seats: seats }),
  })
    .then((res) => res.json())
    .then((data) => {
      const addInfo = {
        date: allData.date,
        time: allData.time,
        location: allData.location,
        name: allData.title,
        selectedSeats: selectedSeats,
      };
      localStorage.setItem("addInfo", JSON.stringify(addInfo));
      window.location.replace(data.session.url);
    });
  // window.location.replace(res.data.session.url);
}
const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function StripeBtn(props) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay
      allData={props.allData}
      name={props.name}
      price={props.price}
      seats={props.seats}
      imageSource={props.imageSource}
      selectedSeats={props.selectedSeats}
    />
  );
}
