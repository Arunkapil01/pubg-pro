exports.run = (client, message, args) => {
  
  const weapons = require("/app/data/weapons.js").weapons;
  let argss = message.content.split(" ").slice(1);
  let temp = argss.join(" ");
  let weapon = weapons[temp.toLowerCase().replace(/ /, "")];
   if (!weapon) return message.channel.send({
      embed: {
        title: "**Usage** `p/weapon [weapon name]`",
        description:
          "***Please include proper weapons name.\n\n List of available weapons atm\n"+Object.keys(weapons).join(","),
      /*  footer:
        {
      "text": "Make sure to type exactly the weapons name given here. *Without any space*"
    },*/
        color: 16711680
      }
    });
  
  else 
    if (!weapon) {
    for (var i = 0; i < Object.keys(weapons).length; i++) {
        if (weapons[Object.keys(weapons)[i]].id.toLowerCase() == argss.toLowerCase().replace(" ", "").replace("'", "")) {
            weapon = weapons[Object.keys(weapons)[i]];
            break;
        }
    }
  }
  console.log(weapon.name)
  const embed = new client.RichEmbed()
    .setAuthor(weapon.name)
    .setColor("RANDOM")
  .setDescription(weapon.desc)
    .addField("Rate of fire:",weapon.rateoffire+"s",true)
    .addField("Bullet Velocity",weapon.bulletvelocity+"m/s",true)
   .addField("**Damage:** No helment",weapon.nohelmet,true)
  .addField("**Damage:** Level 1 helment",weapon.level1helmet,true)
  .addField("**Damage:** Level 2 helment",weapon.level2helmet,true)
  .addField("**Damage:** Level 3 helment",weapon.level3helmet,true)
   .addField("**Damage:** No vest",weapon.novest,true)
  .addField("**Damage:** Level 1 vest",weapon.level1vest,true)
   .addField("**Damage:** Level 2 vest",weapon.level2vest,true)
   .addField("**Damage:** Level 3 vest",weapon.level3vest,true)
  .addField("Magzine Size",weapon.magsize,true)
  .addField("Extended Magzine Size",weapon.extendedmagsize,true)
  .addBlankField()
  .addField("Category",weapon.category,true)
  .addField("Magzine Type",weapon.magtype,true)
  
    .setThumbnail(weapon.image);
  message.channel.send({ embed });
};

exports.conf = {
  enabled: true,
  
  botOwnerOnly: false, // true
  aliases: ["weapon","armory"]
};

exports.help = {
  name: "weapons",
  module: "Free",
  desc: "Shows weapons info.",
  extended: "Show pubg in game weapons info.",
  usage: "weapon [weapon name]"
};
