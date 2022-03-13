const { Router } = require("express");
const { auth } = require('/home/runner/Discord-Bot-List/utils/discordApi');

const { web: {recaptcha_v2: {site_key}}, bot_options: {bot_tags, max_summary_length} } = require("/home/runner/Discord-Bot-List/config.json");

const route = Router();

route.get("/", auth, async (req, res) => {
    res.render("add", {
        bot_tags,
        max_summary_length,
        site_key,
        req
    })
});

module.exports = route;
