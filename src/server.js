const { Template } = require("ejs");
const express = require("express"); // commnjs
require("dotenv").config();
const configViewEngine = require("./config/viewEngine");
const webRouters = require("./routes/web");
const connection = require("./config/database");

// import express from 'express';
const app = express(); // app express
const port = process.env.PORT || 8888; // port

const hostname = process.env.HOST_NAME;

//config req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

// config template engine
configViewEngine(app);

app.use("/", webRouters);

// // simple query
// connection.query("SELECT * FROM Users", function (err, results, fields) {
//     console.log(">>>results= ", results); // results contains rows returned by server
// });

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
});
