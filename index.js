const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const fuv = require("./2");

function logger1(req, res, next) {
  let d = fuv.strictFindUndefinedValues(req.body);

  if (d != "") {
    return res.status(400).send({ code: "bad Request" });
  }
  next();
}

app.use(logger1, (req, res, next) => {
  next();
});

app.post("/users", (req, res) => {
  res.send("users page");
});


app.listen(4000, () => console.log(`App is running`));
