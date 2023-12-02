import { toString, toDataURL } from "qrcode";

// Creating the data
let data = {
  name: "Kanisko",
  age: 22,
  movie: "Giving Tanks",
  location: "AMC",
  date: "12-08-2023",
  time: "19:30",
};

// Converting the data into String format
let stringdata = JSON.stringify(data);

// Print the QR code to terminal
toString(stringdata, { type: "terminal" }, function (err, QRcode) {
  if (err) return console.log("error occurred");

  // Printing the generated code
  console.log(QRcode);
});

// Converting the data into base64
toDataURL(stringdata, function (err, code) {
  if (err) return console.log("error occurred");

  // Printing the code
  console.log(code);
});
