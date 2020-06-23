exports.run = (client, message, args) => {
   if(message.member.roles.find(r => r.name === "PUBG Organizer")){
var user = message.guild.members.filter(m => !m.user.bot)
  
  message.channel
    .send(
      `Congratulation ${
        user.random()
      }\nYou are really lucky! You won the giveaway!🎉 `
    )
    .then(m => m.react("🎉"));
}
  else 
    return message.reply("Sorry, but this command is only available for members having role ***PUBG Organizer***");
}
exports.conf = {
  enabled: true,
  
  botOwnerOnly: false,
  aliases: []
};

exports.help = {
  name: "raffle",
  module: "Free",
  desc: "Random Giveaway winner.",
  extended:
    "Choose a random winner for a giveaway from the server.",
   usage: "raffle",
};

