module.exports = (message, client) => {
  const Discord = require("discord.js");

  if (message.author.bot) return;
  
  if (
    message.channel.type != "text"
    //message.author.id != client.config.botOwners[0]
  )
    return client.commands.get("about").run(client, message, []);

  client.embed = function(description) {
    message.channel
      .send({ embed: { color: client.config.embedColor, description } })
      .then(m => {
        return true;
      })
      .catch(e => {
        return false;
      });
  };
  client.reply = function(msg) {
    client.embed("**" + message.author.tag + "** " + msg);
    return true;
  };
  client.isOwner = function(user) {
    let a = client.config.botOwners;
    for (var i = 0; i < a.length; i++) {
      if (user.id === a[i]) return true;
    }
  };
  client.identifyUser = message => {
    const args = message.content.split(" ").slice(1);
    let user = message.mentions.users.first();
    if (!user) user = client.users.get(args.join(""));
    if (!user) user = client.users.find("tag", args.join(" "));
    if (!user) user = client.users.find("username", args.join(" "));
    if (!user) user = message.author;
    return user;
  };

  // handler
  if (message.content.replace(/ /g, "") === "<@" + client.user.id + ">")
    return client.commands.get("about").run(client, message, []);
  if (!message.content.startsWith(client.config.prefix)) return;
if(!message.channel.permissionsFor(client.user).has("EMBED_LINKS")) return message.reply("Sorry, but i need Embed Links permission to work.")
  
  let command = message.content
    .slice(client.config.prefix.length)
    .split(" ")[0];
  let args = message.content.split(" ").slice(1);
  let cmd;

  if (client.commands.has(command)) cmd = client.commands.get(command);
  else if (client.aliases.has(command))
    cmd = client.commands.get(client.aliases.get(command));
  else return;

  if (cmd.conf.botOwnerOnly && !client.isOwner(message.author))
    return message.reply("This command can be used by bot owner only.");
  if (!cmd.conf.enabled)
    return message.reply("This command is temporarily disabled.");
 else if(message.guild.id === "278135637293531136" && message.author.id !== "258961364939309056") {message.channel.send("In order to use this bot you need to buy premium subscription . For more info use `p$donate` command and contact Arun Kapil.")}
  else
  
  cmd.run(client, message, args)
          
  };
