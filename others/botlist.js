const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `botlist`,
  description: `Gives you the botlists of the Bot`,
  aliases: [],
  cooldown: 3,
  edesc: "Type this command to view all Bot list Server where the bot is on. Please vote there UwU",
  execute(message, args, client) {
    //react with approve emoji
    message.react("✅");
    //send the botlist embed
    message.reply(new MessageEmbed().setColor("RANDOM")
    .setTitle("Invite other bots!")
   .addField("https://discord.com/api/oauth2/authorize?client_id=851863614775361546&permissions=0&redirect_uri=http%3A%2F%2FDiscord-MusicBot.axom.repl.co%2Fapi%2Fcallback&scope=bot", "axom")
    );

  }
}