let express = require("express");
let app = express();

app.use(function middleware(req, res, next) {
  let str = req.method + " " + req.path + " " + req.ip + " ";
  console.log(str);
  next();
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get('/now', function(req, res, next){
  req.time = new Date().toString()
  next()
}, function(req, res){
  res.json({time: req.time})
} )

app.get("/json", (req, res) => {
  res.json({ message: "Hello json" });
});

app.use("/public", express.static(__dirname + "/public"));

module.exports = app;
