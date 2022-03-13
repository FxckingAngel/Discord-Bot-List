const { Router } = require("express");
const fetch = require("node-fetch");
const { auth } = require("/home/runner/Discord-Bot-List/utils/discordApi");
const Bots = require("/home/runner/Discord-Bot-List/models/bots");
const Users = require("/home/runner/Discord-Bot-List/models/users");
const { server } = require("/home/runner/Discord-Bot-List/config.json");


const route = Router();

route.patch("/:id", auth, async (req, res) => {
  let user = await Users.findOne({ userid: req.user.id })
  if (user && (Date.now() - user.time) < 43200000) 
    return res.json({success: false, time: Date.now() - user.time})

  let bot = await Bots.findOneAndUpdate({ botid: req.params.id }, { $inc: { likes: 1 } })
  await Users.updateOne({ userid: req.user.id }, { $set: { time: Date.now(), botliked: req.params.id } }, { upsert: true })

  let userProfile = await req.app.get('client').users.fetch(req.user.id);
  
  // Discord Webhook
  let channel = await req.app.get('client').channels.cache.get(server.like_log);
  let webhook = (await channel.fetchWebhooks()).first();
  if (!webhook) 
    webhook = await channel.createWebhook('Discord Bot List')
  await webhook.send(`</home/runner/Discord-Bot-List/${req.user.id}> (${userProfile.tag}) liked </home/runner/Discord-Bot-List/${req.params.id}>`);

  // Custom webhook
  if (bot.webhook) {
    fetch(bot.webhook, {
      method: "POST",
      body: JSON.stringify({
        type: "like",
        bot: req.params.id,
        user: req.user.id,
        timestamp: new Date()
      }),
      headers: { 'Content-Type': 'application/json' }
    })
  }

  return res.json({ success: true })
});

module.exports = route;
