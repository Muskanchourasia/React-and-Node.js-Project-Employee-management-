const { Route } = require("express");
const express = require("express");
const res = require("express/lib/response");
const Router = express.Router();
const userQueries = require("./userqueries");

Router.route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    next();
  })
  .post((req, res) => {
    userQueries.insertUser(req, res);
  })
  .get((req, res) => {
    userQueries.getUser(req, res);
  });

Router.route("/login")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    next();
  })
  .post((req, res) => {
    userQueries.loginUser(req, res);
  });

Router.route("/Edit/:_id")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    next();
  })
  .put((req, res) => {
    userQueries.updateUser(req, res);
  });

Router.route("/del/:_id")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    next();
  })
  .delete((req, res) => {
    userQueries.deleteUser(req, res);
  });

module.exports = Router;

Router.route("/filter/:role")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    next();
  })
  .get((req, res) => {
    userQueries.filterUser(req, res);
  });

module.exports = Router;
