// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripe = require("stripe")(
  "sk_test_51OIiAzEDbJ2CRskzSws4ZcXUezVxfDApRROswRVc5bhP9YNbuQhEwptHgF18VjFneVKAhP9QB4Z8Or3O8Bod6zMd00tvxFhCnV"
);
const express = require("express");
const app = express();
app.use(express.static("public"));
var cors = require("cors");
app.use(cors());

const YOUR_DOMAIN = "http://localhost:5173";

app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        // TODO: replace this with the `price` of the product you want to sell
        // price: '{{PRICE_ID}}',
        price: "price_1OIivyEDbJ2CRskz9eaCGvxg",
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  // res.redirect(303, session.url);
  res.send({ session });
});

app.listen(4242, () => console.log("Running on port 4242"));
