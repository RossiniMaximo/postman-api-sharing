"use strict";
exports.__esModule = true;
var express = require("express");
var port = process.env.PORT || 3000;
var app = express();
app.get("/users", function (req, res) {
    console.log("Entre aca");
    res.json({
        users: []
    });
});
app.get("/users/:userId/products", function (req, res) {
    res.json({
        products: []
    });
});
app.post("/users", function (req, res) {
    res.status(201).json({
        message: "Okay macay",
        id: 1234
    });
});
app.listen(port, function () {
    console.log("Hola muchaches , la API esta corriendo.", port);
});
