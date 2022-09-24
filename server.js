/* == External Modules == */
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const SESSION_SECRET = process.env.SESSION_SECRET;

// const whitelist = ["http://localhost:3000"];
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };

require("dotenv").config();
/* == Port == */
const PORT = process.env.PORT || 3003;

/* == Internal Modules == */
const routes = require("./routes");

/* == Express Instance == */
const app = express();

/* == DB connection == */
require("./config/db.connection");

/* == Middleware == */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

/* == Routes == */

app.use("/networgram", routes.post);

app.listen(PORT, () => {
  console.log("celebrations happening on port", PORT);
});
