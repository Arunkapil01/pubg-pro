exports.run = (client, message, args) => {
  let user = message.author;
  const embed = new client.RichEmbed()
  
  .setAuthor(user.username,user.displayAvatarURL)
 
  .addField("Donate and Patron","**1.PayPal**\n[Click here](https://www.paypal.me/ArunKapil) to support me on PayPal.\n**2.** **UPI :** \n[Click here](https://tinyurl.com/tzh8877) to donate any amount, using any UPI app.\n\n__*Every patron matters alot and will help the development of the bot.*__")
  .addField("Feedback and Support","[Click here](https://discord.gg/N7n2W2k) to join my Support Server.")
  .addField("Commands","You can see a list of all commands using __p/help__")
  .addField("Vote","[Click here](https://top.gg/bot/611054547112034304/vote) to vote and support.")
  .addField("Invite","[Click here](https://discordapp.com/oauth2/authorize?client_id=611054547112034304&scope=bot&permissions=214695859) to invite me in your Discord Clan.")
  .setColor("RANDOM")
  message.channel.send({ embed });

};

exports.conf = {
  enabled: true,
  
  botOwnerOnly: false,
  aliases: ["info"]
};

exports.help = {
  name: "about",
  module: "Free",
  desc: "Shows info about BOT",
  extended:
    "Shows information and external links related to PUBG Mobile BOT",
  usage: "about"
};
