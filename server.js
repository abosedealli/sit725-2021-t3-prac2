const express = require("express");

const app = express();
const port = 5000;

app.use(express.static('public'));

app.get('/consultancyCharge', (req,res) => res.send("$100 per hour."));

app.listen(port,() => {
console.log("server started");
});