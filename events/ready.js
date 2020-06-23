module.exports = client => {
  console.log(client.guilds.size);

  client.user.setActivity(`${client.config.prefix}help for help`, {
    url: "https://www.twitch.tv/pikacord",
    type: "STREAMING"
  });
};
