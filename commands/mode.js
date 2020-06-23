exports.run = (client, message, args) => {
  const modes = require("/app/data/modes.js").modes;
  let argss = message.content.split(" ").slice(1);
  let temp = argss.join(" ");
  let mode = modes[temp.toLowerCase().replace(/ /, "")];
   if (!mode) return message.channel.send({
      embed: {
        title: "**Usage** `p/mode [mode name]`",
        description:
          "***Please include proper modes name.\n\n List of available modes atm\nsolo, duo, squad, tdm, payload, bia, war, quick match, training, hardcore, sniper training, arena, ragegear tdm, arctic, custom room, domination, assault",
      
        color: 16711680
      }
    });
  else 
    if (!mode) {
    for (var i = 0; i < Object.keys(modes).length; i++) {
        if (modes[Object.keys(modes)[i]].id.toLowerCase() == argss.toLowerCase().replace(" ", "").replace("'", "")) {
            mode = modes[Object.keys(modes)[i]];
            break;
        }
    }
  }
  
  const embed = new client.RichEmbed()
    
    .setColor("RANDOM")
    .addField("Details:",mode.desc)
    
  .addField("Map:",mode.map)
  .addField("Mode Type:",mode.mode)
  .addField("Note:",mode.foot)
    
  message.channel.send({ embed });
};

exports.conf = {
  enabled: true,
  
  botOwnerOnly: false, // true
  aliases: ["mode"]
};

exports.help = {
  name: "modes",
  module: "Free",
  desc: "Shows modes info.",
  extended: "Show pubg in game modes info.",
  usage: "mode [mode name]"
};
