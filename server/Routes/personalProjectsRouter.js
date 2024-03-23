const express = require("express");
const personalProjectsController = require("../controllers/personalProjectsController");

const Router = express.Router();

Router.route("/").get(personalProjectsController.getAllPersonalProjects);

module.exports = Router;
