const { Router } = require("express");
const { server: {invite} } = require("/home/runner/Discord-Bot-List/config.json");

const route = Router();

route.get("/", async (_, res) => {
    res.redirect(invite)
});

module.exports = route;
