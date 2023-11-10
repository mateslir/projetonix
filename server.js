import express from "express";
import dotenv from "dotenv";
import stripe from "stripe";
import session from "express-session";
import router from "./app/routes/router.cjs";

var rotas = router;

// Load variables
dotenv.config();

// Start Server
const app = express();

app.use(express.static("app/public"));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(
  session({
    secret: "HELLo nODE",
    resave: false,
    saveUninitialized: false,
  })
)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", rotas);


// Home Route
app.get("/", (req, res) => {
  res.render("pages/index.ejs");
});
// Success
app.get("/successo", (req, res) => {
  res.render("pages/sucesso.ejs", { root: "./app/views/pages" });
});
// Cancel
app.get("/cancelar", (req, res) => {
  res.render("pages/cancelar.ejs", { root: "./app/views/pages" });
});
// Stripe
let stripeGateway = stripe(process.env.stripe_api);
let DOMAIN = process.env.DOMAIN;

app.post("/stripe-checkout", async (req, res) => {
  const lineItems = req.body.items.map((item) => {
    const unitAmount = parseInt(item.price.replace(/[^0-9.-]+/g, "") * 100);
    console.log("item-price:", item.price);
    console.log("unitAmount:", unitAmount);
    return {
      price_data: {
        currency: "brl",
        product_data: {
          name: item.title,
          images: [item.productImg],
        },
        unit_amount: unitAmount,
      },
      quantity: item.quantity,
    };
  });
  console.log("lineItems:", lineItems);

  const session = await stripeGateway.checkout.sessions.create({
    payment_method_types: ["boleto", "card"],
    mode: "payment",
    success_url: `${DOMAIN}/sucesso`,
    cancel_url: `${DOMAIN}/cancelar`,
    line_items: lineItems,
    billing_address_collection: "required",
    shipping_address_collection: {
      allowed_countries: ['BR'],
    },
  });
  res.json(session.url);
});


app.listen(3300, () => {
  console.log("listening on port 3300;");
});