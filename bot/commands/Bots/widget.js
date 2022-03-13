const { Command } = require('klasa');
const fetch = require('node-fetch');
const Bots = require("/home/runner/Discord-Bot-List/models/bots");

const { web: {domain_with_protocol} } = require("/home/runner/Discord-Bot-List/config.json");

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            usage: '[User:user]'
        });
    }

    async run(message, [user]) {
        console.log(user)
        if (!user || !user.bot) return message.channel.send(`You didn't ping a bot to get a widget of.`);
        let url = `${domain_with_protocol}/api/embed/${user.id}`;
        let img = await fetch(url).then(res => res.buffer());
        message.channel.send({ files: [img] });
    }

};