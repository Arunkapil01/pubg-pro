const randomPuppy = require('random-puppy');
const request = require('snekfetch');
exports.run = (client, message, args) => {
   var subreddits = [
        
        
     'PUBGmobile'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

 const { memeAsync } = require('memejs');

memeAsync() // Use meme('subredditname') to filter subreddits
.then(m => {
  const Discord = require("discord.js");
  
const embed = new Discord.RichEmbed()
.setImage(m.url)
.setDescription(m.title)

message.channel.send({embed})

  
})
.catch(e => {
  // Handle the error
  console.log(e);
})
  
 /*  randomPuppy(sub)
        .then(url => {
         
      
               const Discord = require("discord.js");
const embed = new Discord.RichEmbed()
.setImage(url)
message.channel.send({embed})*/
   

      
               
  
              }
exports.conf = {
  enabled: true,
  botOwnerOnly: false,
 
  aliases: ["pubgmobile","pubgm"]
}

exports.help = {
  name: "pubg",
  module: "Free",
  desc: "Random PUBG pics and updates",
  extended: "Sends latest update and images from r/pubgmobile",
  usage: "pubg"
}