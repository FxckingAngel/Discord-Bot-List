const { Event } = require('klasa');

const { server: {role_ids} } = require("/home/runner/Discord-Bot-List/config.json");

module.exports = class extends Event {
    run(member) {
        if (member.user.bot) {
            member.roles.add(member.guild.roles.cache.get(role_ids.bot));
            member.roles.add(member.guild.roles.cache.get(role_ids.unverified));
        }
    }
};