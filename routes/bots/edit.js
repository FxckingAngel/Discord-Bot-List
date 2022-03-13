const { Router } = require("express");
const { auth } = require('/home/runner/Discord-Bot-List/utils/discordApi')
const Bots = require("/home/runner/Discord-Bot-List/models/bots");

const { web: {recaptcha_v2: {site_key}}, bot_options: {bot_tags, max_summary_length}} = require("/home/runner/Discord-Bot-List/config.json");

const route = Router();

route.get("/:id", auth, async (req, res) => {
    let bot = await Bots.findOne({botid: req.params.id}, { _id: false, auth: false })

    if (!bot) return res.render("404", {req});

    // Backward compaitibility
    let owners = [bot.owners.primary].concat(bot.owners.additional)
    if (String(bot.owners).startsWith("["))
        owners = String(bot.owners).replace("[ '", "").replace("' ]", "").split("', '")
    
    if (!owners.includes(req.user.id) && !req.user.staff) return res.render("403", {req});

    res.render("edit", {
        bot,
        bot_tags,
        max_summary_length,
        site_key,
        req
    });
});

module.exports = route;