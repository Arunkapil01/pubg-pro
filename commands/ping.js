exports.run = (client, message, args) => {
  
  message.channel.send("Pong");
};

exports.conf = {
  enabled: true,
  module: "Free",
  botOwnerOnly: false,
  aliases: []
};

exports.help = {
  name: "ping",
  module: "Free",
  desc: "pong ping",
  extended:
    "Check if bot is working or not",
  usage: "ping"
};
