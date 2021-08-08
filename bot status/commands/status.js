const Discord = require("discord.js"); // by : Lucas
const Gamedig = require("gamedig"); // by : Lucas

module.exports = {
  name: "mta system", // by : Lucas
  run(client, message, args) {
    Gamedig.query({
	type: "mtasa", // by : Lucas
      host: "134.255.234.228", // عنوان الخادم حطه هنا
      port: "38798", // بورت الخادم حطه هنا
    })
      .then((state) => {
        if (state["raw"]["numplayers"] === 0) {
          let embed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(state["name"])
            .addField("Status:", "Online", true)
            .addField(
              "Players:",
              state["raw"]["numplayers"] + "/" + state["maxplayers"],
              true
            )
          message.channel.send({ embed });
        } else {
          let embed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle(state["name"])
            .addField("Status", "Online", true)
            .addField(
              "Players",
              state["raw"]["numplayers"] + "/" + state["maxplayers"],
              true
            )
          message.channel.send({ embed });
        }
      })
      .catch((error) => {
        let embed = new Discord.MessageEmbed()
          .setColor("RED")
          .setTitle(state["name"])
          .addField("Status:", "Offline")
		  .addField(
              "Players",
              state["raw"]["numplayers"] + "/" + state["maxplayers"],
              true
            )
        message.channel.send({ embed });
      });
  },
};
