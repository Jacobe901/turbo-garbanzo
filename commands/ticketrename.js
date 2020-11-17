// Created by FAXES - https://faxes.zone with the help of listed credits. View the Product Agreement - https://faxes.zone/ProductAgreement.pdf
const Discord = require("discord.js");
const config = require("./../config.json");
const fs = require("fs");

module.exports.run = async (bot, message, args, connection) => {
    if(config["ticket_module"].enabled) {
        if(!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You're not in a ticket channel.`).then(msg => msg.delete({timeout: 10000})).catch(console.error);
        if(!args[0]) return message.channel.send("Please specify a name.");
        let channelNewName = args.join('-')
        if(channelNewName.startsWith(`-`)) {
            message.channel.setName(`${message.channel.name}${channelNewName}`).then(newChannel => {
                message.channel.send(`${message.author} renamed the channel to *\`${newChannel.name}\`*`)
            }).catch(console.error);
        } else {
            message.channel.setName(`ticket-${channelNewName}`).then(newChannel => {
                message.channel.send(`${message.author} renamed the channel to *\`${newChannel.name}\`*`)
            }).catch(console.error);
        }
    }
};

module.exports.help = {
    name: "rename",
    category: 3,
    perm: 3,
    description: "Rename a ticket channel.",

}