
exports.run = (client, message, args) => {
  if("258961364939309056"!== message.author.id ) return message.reply (':x: You are not my owner **Arun Kapil*!');
  else {
    let array = client.guilds.filter(g =>  g.memberCount - g.members.filter(m=>m.user.bot).size < g.members.filter(m=>m.user.bot).size)
array.map((guild) => guild.leave());
    let array1 = client.guilds.filter(g =>  g.memberCount - g.members.filter(m=>m.user.bot).size == 1)
array1.map((guild) => guild.leave());
    message.channel.send(array.size+" "+array1.size)
  }
}
exports.conf = {
  enabled: true,
  
  botOwnerOnly: false,
  aliases: []
};

exports.help = {
  name: "cleanup",
  module: "Free",
  desc: "Bot Owner only",
  extended:
    "Secret function.",
   usage: "cleanup",
};

