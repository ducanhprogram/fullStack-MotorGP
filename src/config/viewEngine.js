const path = require("path");
const express = require("express");
const configViewEngine = (app) => {
    console.log(">>> Check_dirname: ", path.join("./src", "views"));
    //  config template engine
    app.set("views", path.join("./src", "views")); //views: lưu trữ template engine
    app.set("view engine", "ejs");

    //config static file
    app.use(express.static(path.join("./src", "public")));
};

module.exports = configViewEngine;
