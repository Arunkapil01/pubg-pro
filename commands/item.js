exports.run = (client, message, args) => {
  const items = require("/app/data/items.js").items;
  let argss = message.content.split(" ").slice(1);
  let temp = argss.join(" ");
  let item = items[temp.toLowerCase().replace(/ /, "")];
   if (!item) return message.channel.send({
      embed: {
        title: "**Usage** `p/item [item name]`",
        description:
          "***Please include proper items name.\n\n List of available items atm\nSnowball\nApple\nMed kit\nFirst Aid\nBandage\nEnergy Drink\nPainkiller\nAdrenaline Syringe\nGas Can\nPremium Crate\nClassic Crate\nEvent Crate\nSoldier Crate",
      /*  footer:
        {
      "text": "Make sure to type exactly the items name given here. *Without any space*"
    },*/
        color: 16711680
      }
    });
  else 
    if (!item) {
    for (var i = 0; i < Object.keys(items).length; i++) {
        if (items[Object.keys(items)[i]].id.toLowerCase() == argss.toLowerCase().replace(" ", "").replace("'", "")) {
            item = items[Object.keys(items)[i]];
            break;
        }
    }
  }
  console.log(item.name)
  const embed = new client.RichEmbed()
    .setAuthor(item.name)
    .setColor("RANDOM")
    .addField("Details:",item.sum)
    .addField("Capacity",item.Cap)
  .addField("Location",item.Map)
  .addField("Type",item.Type)
    .setThumbnail(item.img);
  message.channel.send({ embed });
};

exports.conf = {
  enabled: true,
  
  botOwnerOnly: false, // true
  aliases: ["item"]
};

exports.help = {
  name: "items",
  module: "Free",
  desc: "Shows items info.",
  extended: "Show pubg in game items info.",
  usage: "item [item name]"
};
