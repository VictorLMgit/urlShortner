const servicesRoute = require("./service.route.js");
const express = require("express");

const routes = (app) => {

    app.use(express.json());
    app.use((req, res, next) => {
        console.log(req.method + " " + req.path + " - " + req.ip);
        next();
    })
   
    app.use("/",servicesRoute);
}

module.exports = routes;