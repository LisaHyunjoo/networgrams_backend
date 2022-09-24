/* == External Modules == */
const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
require("dotenv").config();
const SESSION_SECRET = process.env.SESSION_SECRET;
const PORT = process.env.PORT || 3003;
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

/* == Internal Modules == */
const routes = require("./routes");

require("./config/db.connection");

/* == Middleware == */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

/* == Routes == */
app.use("/networgram", routes.post);
app.use("/networgram/user", routes.user);
app.use("/networgram/post/:id/comment", routes.comment);

app.listen(PORT, () => {
  console.log("You are success to connect: ", PORT);
});
