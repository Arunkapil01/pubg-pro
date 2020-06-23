
exports.run = (client, message, args) => {
  console.log(client.patrons)
   if(client.patrons.includes(message.author.id)
      ){
     if(!message.content.includes("|")) return message.channel.send("Please use this format ```title| description| link| image```");
     message.delete();
    let rest_of_the_string = message.content.slice('p-embed'.length); //removes the first part
    let array_of_arguments = rest_of_the_string.split('|'); //[title, description, link, image]

    let embed = new client.RichEmbed()
      .setTitle(array_of_arguments[0])
      .setDescription(array_of_arguments[1])
      .setImage(array_of_arguments[3])
      .setURL(array_of_arguments[2])
      .setColor("RANDOM")
      .setFooter("Pubg Mobile",array_of_arguments[3])
      .setTimestamp();

    message.channel.send({ embed });
}
  else {
     client.embed = new client.RichEmbed().setDescription("Sorry, but this command is Paid, only available for [PUBG patrons. Click here to know more](https://donatebot.io/checkout/278135637293531136)")
    
    return message.channel.send({embed:client.embed});
}
}
exports.conf = {
  enabled: true,
  
  botOwnerOnly: false,
  aliases: ['announce']
};

exports.help = {
  name: "embed",
  module: "Paid",
  desc: "Announce a message in your server.",
  extended:
    "embed a message.",
   usage: "announce title| description| link| image",
};
