const cookieSession = require("cookie-session");
const express = require("express");
const passport = require("passport");
const passportSetup = require("./passport")
//passportSetup is needed here though looks like it is not being used
const authRoute = require("./routes/auth")
const cors = require("cors")
const app = express();
require('dotenv').config()

app.use(
  cookieSession({
    name: "session",
    keys: ["session"],
    // maxAge: 0.5 * 60 * 60 * 100,
    maxAge: 0,
  })
);

app.use(passport.initialize())
app.use(passport.session())

app.use(cors({
    origin:"http://localhost:3000",
    methods:"GET,POST,PUT,DELETE",
    credentials: true
}
))

app.use("/auth", authRoute)

app.listen("5000", () => {
  console.log("server is running");
});
