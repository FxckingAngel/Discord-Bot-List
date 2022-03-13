const { Router } = require("express");

const auth = require("/home/runner/Discord-Bot-List/routes/api/auth/index");
const reset = require("/home/runner/Discord-Bot-List/routes/api/auth/reset");
const stats = require("/home/runner/Discord-Bot-List/routes/api/auth/stats");
const liked = require("/home/runner/Discord-Bot-List/routes/api/auth/liked");

const route = Router();

route.use("/", auth);
route.use("/reset", reset);
route.use("/stats", stats);
route.use("/liked", liked);

module.exports = route;
