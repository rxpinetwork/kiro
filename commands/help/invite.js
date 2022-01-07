const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "info",
  description: "INVITE Automodv12 beta BOT",
  run: async (client, message, args) => {

    let embed = new discord.MessageEmbed()
      .setTitle(`HERE INVITE LINK OF BOT`)
      .setDescription(`<:CPTNLINK:830835407343714325>  [CLICK HERE](https://discord.com/api/oauth2/authorize?client_id=870916584590409739&permissions=8&scope=bot) OR [support server ](https://discord.hyperxcraft.ml)`)
      .setColor("RANDOM")
      .setFooter(`HyperxCraft Network`)
      .setTimestamp(message.timestamp = Date.now())

    message.channel.send(embed)


  }
}