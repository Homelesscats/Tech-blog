//
const express = require("express");
const app = express();
const session = require("express-session");

const PORT = process.env.PORT || 3003;

const sequelize = require("./config/config");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.get("/", (req, res) => res.send("welcome to the mvc tech blog"));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
