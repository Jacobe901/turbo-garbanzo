// Created by FAXES - https://faxes.zone with the help of listed credits. View the Product Agreement - https://faxes.zone/ProductAgreement.pdf
// [START NO EDIT]
// Do not remove or make this file unavailiable to the bot/users. See 6. Product Credits in the product Agreement - https://faxes.zone/ProductAgreement.pdf
const Discord = require("discord.js");
const config = require("./../config.json");
const fs = require("fs");

module.exports.run = async (bot, message, args, connection) => {
    const embed = new Discord.MessageEmbed()
        .setTitle(`__${bot.user.username}__ Created By __FAXES__`)
        .setURL('https://faxes.zone/store')
        .setThumbnail(`https://faxes.zone/i/frr7q.gif`)
        .setColor(`#0c75f3`)
        .setDescription(`This bot (OverflowBot) gives a guild owner the ability to change the experience for their users when in their Discord. OverflowBot comes with 125+ configuration options straight off the bat allowing some of the best customisation and ability.\nOverflow is made by **\`FAXES#8655\`** and comes with a [Product Agreement](https://faxes.zone/ProductAgreement.pdf)`)
        .addFields(
            {name: `Bot Name:`, value: `${bot.user.username} (Original: OverflowBot)`},
            {name: `Get A Copy:`, value: `**[FAXES Store](https://faxes.zone/viewproduct/?id=10)** *(www.faxes.zone/viewproduct/)*`},
            {name: `Credits:`, value: `FAXES#8655, BigYoda#7911, Astra#6666, and others (see the store page).`},
        )
        .setTimestamp()
        .setFooter(`© 2020, FAXES Gaming`);
    message.channel.send(embed).then(msg => msg.delete({timeout: 60000})).catch(console.error);
};

module.exports.help = {
    name: "overflowbot",
    name2: "botcredits",
    category: 2,
    perm: 4,
    description: "Displays the original bots author and how you can obtain it.",
}