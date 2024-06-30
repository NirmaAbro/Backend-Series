const express = require("express");
const app = express();

//firstly i installed cookie-parser then write it these two lines

// Purpose: This middleware is used to parse incoming requests with JSON payloads. It helps your application understand and process JSON data sent in the body of HTTP requests.
// Usage: It is essential for handling API requests where the client (like a React app) sends data in JSON format (e.g., POST requests with JSON bodies).
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to log requests,//jab bhi server request acceptkrta ha vaha sa route k bech phnchny tak agr ap us request ko bech ma rokty  ho , r kuch perform krty ho to ya element middleware kehlata ha
app.use(function (req, res, next) {
  console.log("middleware");
  next();
});

// Route for home page
app.get("/", function (req, res) {
  res.send("home page");
});

// Route for login page with error handling
app.get("/login", function (req, res, next) {
  next(new Error("something error occurred"));
  // res.send("login page");
});

// Error handler to catch and handle errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("something broke");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
