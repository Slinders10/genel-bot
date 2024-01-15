const {EmbedBuilder} = require("discord.js");
const config = require("../config.js")
exports.run = async (client, message, args) => {

   const slots = ["⭐", "🔔","🍋"]
   const sonuc = `**${slots[Math.floor( Math.random() * 3 )]} : ${slots[Math.floor( Math.random() * 3 )]} : ${slots[Math.floor( Math.random() * 3 )]}**`
   const embed = new EmbedBuilder()
   .setColor("#ff0000")
   .setDescription(`
   **-------------------**
${sonuc}
   **-------------------**
   `)

   message.channel.send("**Slot Dönüyor...**").then(msg => {
       setTimeout(() => {

         msg.delete()
         message.channel.send({embeds: [embed]})

       }, 3000);
   });

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "slot"
};
