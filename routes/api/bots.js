const { Router } = require("express");

const submit = require("/home/runner/Discord-Bot-List/routes/api/bots/submit");
const list = require("/home/runner/Discord-Bot-List/routes/api/bots/list");
const modify = require("/home/runner/Discord-Bot-List/routes/api/bots/modify");
const search = require("/home/runner/Discord-Bot-List/routes/api/bots/search");
const del = require("/home/runner/Discord-Bot-List/routes/api/bots/delete");

const route = Router();

route.use("/", submit);
route.use("/", modify);
route.use("/", del);

route.use("/list", list);
route.use("/search", search);

module.exports = route;
