const { Template } = require("ejs");
const express = require("express"); // commnjs
const path = require("path");
require("dotenv").config();

// import express from 'express';
const app = express(); // app express
const port = process.env.PORT || 8888; // port

const hostname = process.env.HOST_NAME;
//  config template engine
app.set("views", path.join(__dirname, "views")); //views: lưu trữ template engine
app.set("view engine", "ejs");

//Khai báo route  :: Để server để biết được có những router nào
app.get("/", (req, res) => {
    res.send("Hello World fullStack! & Nodemon");
});

app.get("/daihoccn", (req, res) => {
    // res.send("<h1>Nhom Do An CN4</h1>");
    res.render("sample.ejs"); //views động   ==> render
});

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
});
