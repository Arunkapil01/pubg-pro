const randomPuppy = require('random-puppy');
const request = require('snekfetch');
exports.run = (client, message, args) => {
   var subreddits = [
        
        'PUBGmemes',
     'PUBGmobilememes'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
        
      
               const Discord = require("discord.js");
const embed = new Discord.RichEmbed()
.setImage(url)
message.channel.send({embed})
    })
              }
exports.conf = {
  enabled: true,
  botOwnerOnly: false,
  
  aliases: ["memes","pubgmemes"]
}

exports.help = {
  name: "pubgmeme",
  module: "Free",
  desc: "Random PUBG memes",
  extended: "Sends Random PUBG mobile memes",
  usage: "meme"
}