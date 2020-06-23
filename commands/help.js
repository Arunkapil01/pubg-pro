exports.run = (client, message, args) => {
  
  if (!args[0]) {
     const myCommands = client.commands.filter(cmd => cmd.conf.guildOnly !== true);

    // Here we have to get the command names only, and we use that array to get the longest name.
    // This make the help commands "aligned" in the output.
    const commandNames = myCommands.keyArray();
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    function ownerOnly(cmd) {
      if (!cmd.conf.botOwnerOnly) return true;
      if (client.isOwner(message.author)) return true;
      return false;
    }
    const embed = new client.RichEmbed()
      .setAuthor("List Of Commands", client.user.avatarURL)
      .setColor(client.config.embedColor)
      .setDescription("```asciidoc\n= Command List =\n\n[Use "+client.config.prefix+" help <commandname> for details]\n= help=\n"+
        client.commands
          .filter(ownerOnly)
          .map(function(cmd) {
            let alias = "";
            if (cmd.conf.aliases.length > 0) {
              alias =
                "," +
                cmd.conf.aliases.map(a => client.config.prefix + a).join(",") 
                ;
            }
            return client.config.prefix+cmd.help.name+" ".repeat(longest - cmd.help.name.length)+"  ::  "+cmd.help.desc;
          })
          .join("\n")+"```"
      );
    let  ch = message.channel;
    ch.send({ embed });
  } else {
    let command = client.commands.get(args.join(""));
    if (!command)
      command = client.commands.get(client.aliases.get(args.join("")));
    if (!command)
      command = client.commands.get(
        args.join("").slice(client.config.prefix.length)
      );
    if (!command)
      command = client.commands.get(
        client.aliases.get(args.join("").slice(client.config.prefix.length))
      );
    if (!command) return client.reply("Can't find that command.");

    let title = [command.help.name, ...command.conf.aliases];
    title = title.map(t => `\`${client.config.prefix}${t}\``).join(" / ");

    let usage = command.help.usage;
    if (typeof usage === "string") usage = [usage];
    usage = usage.map(u => `\`${client.config.prefix}${u}\``).join(" or ");
    let bt = "";
    if (command.conf.botOwnerOnly) bt = "\n**Bot Owner Only**";

    const embed = new client.RichEmbed()

      .setColor(client.config.embedColor)
      .setDescription(`**${title}**\n${command.help.extended}${bt}`)
      .addField("Usage", usage);
    message.channel.send({ embed });
  }
};

exports.conf = {
  enabled: true,
  botOwnerOnly: false, // true
  aliases: ["h","halp"]
};

exports.help = {
  name: "help",
  desc: "Shows list of commands.",
  extended: "Displays a list of avaliable commands to you.",
  usage: "help"
};
