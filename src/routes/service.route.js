const express = require("express");
const serviceRouter = express.Router();
const serviceController = require("./../controllers/service.controller.js");
serviceRouter.post("/shorten-url", serviceController.casheUrl);
serviceRouter.get("/:code", serviceController.redirectUrl, (req, res) => {
    return res.redirect(url);
});


module.exports = serviceRouter;