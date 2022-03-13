const { Router } = require("express");

const bots = require("/home/runner/Discord-Bot-List/routes/bots/index");
const tag = require("/home/runner/Discord-Bot-List/routes/tag/index");
const api = require("/home/runner/Discord-Bot-List/routes/api/index");
const theme = require("/home/runner/Discord-Bot-List/routes/theme");

const route = Router();

route.use("/bots", bots);
route.use("/tag", tag);
route.use("/api", api);
route.use("/theme", theme);

route.get('/', (req, res) => {
    if (!req.query.q) res.render('index', {req});
    else res.redirect(`/bots/search?q=${encodeURIComponent(req.query.q)}`)
});

module.exports = route;
