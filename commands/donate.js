exports.run = (client, message, args) => {
  let user = message.author;
  const embed = new client.RichEmbed()
  
  .setAuthor(user.username,user.displayAvatarURL)
 .setTitle("Thanks for showing your interest to support the bot.")
  .setURL("https://donatebot.io/checkout/278135637293531136?buyer="+ message.author.id + "")
  .addField("Donate and Patron","**1.PayPal**\n[Click here](https://www.paypal.me/ArunKapil) to support me on PayPal.\n**2.** **UPI :** \n[Click here](https://tinyurl.com/tzh8877) to donate any amount, using any UPI app.\n\n__*Every patron matters alot and will help the development of the bot.*__")
  .addField("Want to get rewards too?","Please follow these steps.\n1. [Click here](https://discord.gg/N7n2W2k) to join my Support Server.\n2. After joining the support server no need to verify, you will be automatically verified after you buy a subscription.\n3. [Click here](https://donatebot.io/checkout/278135637293531136?buyer=" +
          message.author.id
          +") and check reward username is similar to your name.\n4. Select what subscription method you want out of three.\n\nA.) **Regular**: Get rid of cooldown.\nB.)**Pubg-Patron**: Get access to many paid commands.\nC.)**PUBG-pro** Get premium version of the bot without any cooldown for all your server members and access to many commands which are only in premium version of the bot.\n\n5. Use your paypal to complete and payment and conatct Arun Kapil if you have not recieved your rewards!\n Thanks for your support. :)" )
  
  .setColor("RANDOM")
  message.channel.send({ embed });

};

exports.conf = {
  enabled: true,
  
  botOwnerOnly: false,
  aliases: ["Patreon","Payment"]
};

exports.help = {
  name: "donate",
  module: "Paid",
  desc: "Shows info about BOT donation",
  extended:
    "Shows information and external links related to PUBG Mobile BOT",
  usage: "donate"
};
