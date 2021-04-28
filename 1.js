var express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var time = function (req, res, next) {
  var current_date = new Date();
  req.requestTime = current_date;
  next();
};
app.get("/",time, function (req, res) {
  var printedTime = "Current Date & Time is: " +'<b>'+ req.requestTime+ '</b>';
  res.send(printedTime);
});

app.listen(4000, () => console.log(`App is running on 4000 port`));
