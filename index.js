const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set(express.static(path.join(__dirname,"public")));


app.get("/", (req, res) => {
    res.render("home.ejs");
})

app.get("/profile", (req, res) => {
    res.render("profile.ejs");
})

app.get("/result", (req, res) => {
    res.render("result.ejs");
})

app.listen(port, () => {
    console.log("listning to port: 8080");
})