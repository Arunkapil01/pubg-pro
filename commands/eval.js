
const Discord = require("discord.js");
const {Client, RichEmbed, Collection} = Discord;
const fs = require("fs");
const bot_package = require ("../package.json");


exports.run = (client, message, args, randomColor) => {
  // defines
  const bot = client.user;
  const guild = message.guild;
  const channel = message.channel;
  const msg = message.content;
  const argss = message.content.split(" ").slice(1).join(" ");
  const author = message.author;
  const member = message.member;
  
  // checks
  if("258961364939309056"!== message.author.id ) return message.reply (':x: You are not my owner **Arun Kapil*!');
//else if(message.channel.id !== "370897455522512897") return message.reply("this command only used in <#370897455522512897>");
  if (!args[0]) return;
  
  // functions
  function addModule(name, version) {
  bot_package.dependencies[name] = version;
  fs.writeFile("../package.json", JSON.stringify(bot_package), (err) => {
    if (err) return err;
  });
  return bot_package;
}
  
  // eval
  const clean = text => {
    if (typeof(text) === "string") {
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    }else {
      return text;
    }
  }
  try {
    const code = argss;
    let evaled = eval(code);
    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
    if(evaled.length > 2000)return message. channel.send('🚷error output is more than 2000🚷');
      let input = "**📥Eval Input** \n"/*,*/+ "```" + code + "```";
      
      let output ="**📤Eval Output** \n"/*, */+ "```" + clean(evaled) + "```";
    message.channel.send(input + "\n" +output);
  } catch (err) {
    let input = "**📥Eval Input** \n"/*, */ +"```" + argss + "```";
    console.log(argss)
let error ="**📣Eval Error**   \n"/*, */+"```" + clean(err) + "```";
    message.channel.send(input + "\n\n" + error);
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['jsbot'],
  permLevel: 0
};

exports.help = {
  name: 'eval',
  description: 'Runs a code from the bot.',
  usage: 'eval [code]',
  module: 'Admin',
  permit: 'Bot Owner Only',
  alias: ' '
};

function capFL(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/*function refreshUsers() {
  fs.writeFile('../util/users.json', JSON.stringify(users), (err) => {
    if (err) console.error(err);
  });
}

function refreshServers() {
  fs.writeFile('../util/servers.json', JSON.stringify(servers), (err) => {
    if (err) console.error(err);
  });
}*/