const { Client, Collection, RichEmbed } = require("discord.js");
const { readdir, writeFile } = require("fs");

var config = require("./config.js").settings;


const client = new Client();
client.login(config.token).catch(console.error);

const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 28000);

// collection

client.commands = new Collection();
client.aliases = new Collection();

// defines'
client.talkedRecently = new Map();
client.on('ready', async() => {
   let array = client.guilds.filter(g =>  g.memberCount - g.members.filter(m=>m.user.bot).size < g.members.filter(m=>m.user.bot).size)
await array.map((guild) => guild.leave());
    let array1 = client.guilds.filter(g =>  g.memberCount - g.members.filter(m=>m.user.bot).size == 1)
await array1.map((guild) => guild.leave());
  client.patrons = client.guilds.get("278135637293531136").roles.get("400911023265284097").members.map(m=> m.user.id);
  console.log(client.patrons)
});
client.config = config;

client.RichEmbed = RichEmbed;
client.Discord = require("discord.js");
client.fs = require("fs");
client.on('guildCreate' , (guild => {
  if(guild.memberCount - guild.members.filter(m=>m.user.bot).size == 1 || guild.memberCount - guild.members.filter(m=>m.user.bot).size < guild.members.filter(m=>m.user.bot).size) return guild.leave();
  
   const client = guild.client;
  const bot = client.user;
  const str = `**Guild Joined**: ${guild.name}\n**Guild ID**: ${
    guild.id
  }\n**Total Members**: ${guild.memberCount} \n**Bots**: ${
    guild.members.filter(m => m.user.bot).size
  }\n **Guild owner** : ${guild.owner.user.tag}\n**Total Guilds count**: ${
    client.guilds.size
  }`;
  const embed2 = new client.Discord.RichEmbed()
    .setAuthor(bot.username, bot.avatarURL)
    .setThumbnail(guild.iconURL)
    .setTitle("New Server Joined")
    .setColor("RANDOM")
    .setDescription(str)
    .setFooter("Guild Join")
    .setTimestamp();

  return client.channels.get("690810720232931328").send({ embed: embed2 });
}
                           ))
client.on('guildDelete' , (guild => {
let client = guild.client;
  let bot = guild.client;


  const str = `**Guild Left**: ${guild.name}\n**Guild ID**: ${
    guild.id
  }\nTotal **Members**: ${guild.memberCount} \n**Bots**: ${
    guild.members.filter(m => m.user.bot).size
  }\n**Guild owner** : ${guild.owner.user.tag}\nTotal Guilds count: ${
    client.guilds.size
  }`;
  const embed2 = new client.Discord.RichEmbed()
   
    .setTitle("Old Server Left")
    .setColor("RANDOM")
    .setDescription(str)
    .setFooter("Guild Left")
    .setTimestamp();

  return client.channels.get("690810720232931328").send({ embed: embed2 });
}))
require("./util/eventLoader.js")(client);

// assign to collections
readdir("./commands/", (err, files) => {
  if (err) console.error(err);
  else if (files) {
    files.forEach(f => {
      let cmd = require("./commands/" + f);
      client.commands.set(cmd.help.name, cmd);
      cmd.conf.aliases.forEach(i => {
        client.aliases.set(i, cmd.help.name);
      });;
    });
  }
});
