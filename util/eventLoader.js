const { error, warn, info } = console;
let path = "../events/";

module.exports = client => {
  client.on("ready", () => require(path + "ready.js")(client));
  client.on("message", msg => require(path + "message.js")(msg, client));
 
 
  client.on("error", e => error(e));
  client.on("warn", e => warn(e));
};
