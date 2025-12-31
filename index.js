const { Client, GatewayIntentBits } = require("discord.js");

const bot = new Client({
  intents: [GatewayIntentBits.Guilds]
});

// 🔴 EDIT THESE
const TOKEN = "MTQ1NTg5NzQyNDAzNTA1NzcyMA.G8yNGa.b104EmAwh6HdJKxa3Xe8iVlJq8eLGg1glu9alI";
const CHANNEL_ID = "1452279184847142932";
const IMAGE_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz857hB2Bc1ATxA0oMvvw0LU7XDQU2Ft0njg&s";

bot.once("clientReady", () => {
  console.log("Bot is running (local mode)");

  setInterval(() => {
    const channel = bot.channels.cache.get(CHANNEL_ID);
    if (!channel) return;

    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const londonTime = new Date(utc); // UK time

    const minutes = londonTime.getMinutes();

    // Send at :00 and :30
    if (minutes === 0 || minutes === 30) {
      channel.send({
        content:
          `<@&${ROLE_ID}>\n` +
          `🔧 **Repair all panels If Planted**\n` +
          `💰 *Bonus will be provided if repaired*`,
        files: [IMAGE_URL]
      });
    }
  }, 60 * 1000);
});

bot.login(TOKEN);
