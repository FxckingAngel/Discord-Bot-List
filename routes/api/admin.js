const { Router } = require("express");

const approve = require("/home/runner/Discord-Bot-List/routes/api/admin/approve");
const deny = require("/home/runner/Discord-Bot-List/routes/api/admin/deny");
const mark_nsfw = require("/home/runner/Discord-Bot-List/routes/api/admin/mark_nsfw");

const route = Router();

route.use("/approve", approve);
route.use("/deny", deny);
route.use("/mark_nsfw", mark_nsfw);

module.exports = route;