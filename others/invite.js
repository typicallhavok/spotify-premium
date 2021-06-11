const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  aliases: ["inv"],
  description: "Invite the bot to your server.",
  execute(message) {

    let inviteEmbed = new MessageEmbed()
      .setTitle("Add the bot to your server!")
      .setDescription("Spotify but no ads, Consider adding it to your server!")
      .setColor("RANDOM")
      .setAuthor('Spotify Premium','https://cdn.discordapp.com/attachments/778600026280558617/781024479623118878/ezgif.com-gif-maker_1.gif')
      .setThumbnail(message.guild.iconURL())
      .addField(`Use the following link to add Spotify premium to your discord server`, 'https://discord.com/api/oauth2/authorize?client_id=849933694596153414&permissions=0&scope=bot', true)

    inviteEmbed.setTimestamp();

    return message.channel.send(inviteEmbed).catch(console.error);
  }
};