const { Router } = require("express");
const { auth } = require('/home/runner/Discord-Bot-List/utils/discordApi')
const Bots = require("/home/runner/Discord-Bot-List/models/bots");

const { server: { id } } = require("/home/runner/Discord-Bot-List/config.json")

const route = Router();

route.get("/", auth, async (req, res) => {
    if (!req.user.staff) return res.render("403", {req});
    let bots = await Bots.find({ state: "unverified" }, { _id: false })
    if (bots == '') bots = null;

    res.render("admin", {
        bots,
        id,
        req
    });
});

module.exports = route;
