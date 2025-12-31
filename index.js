const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

// 🔴 TEMPORARY: hard-code token to bypass Railway issues
const TOKEN = process.env.TOKEN;
// 🔴 EDIT THESE
const CHANNEL_ID = "1452279184847142932";
const IMAGE_URL = "https://www.pngkey.com/png/full/141-1416726_wasted-transparent-gta-wasted-transparent.png";

client.once("ready", () => {
  console.log(`✅ Logged in as ${client.user.tag}`);

  // 🔁 MAIN REMINDER LOOP (keeps process alive)
  setInterval(() => {
    const channel = client.channels.cache.get(CHANNEL_ID);
    if (!channel) {
      console.log("❌ Channel not found");
      return;
    }

    channel.send({
      content: `🔧 **Repair all solar panels** – if planted, bonus will be provided 💰`,
      files: [IMAGE_URL]
    });

    console.log("✅ Message sent");

  }, 10 * 1000); // every 10 seconds (test mode)
});

// 🔁 EXTRA KEEP-ALIVE (important for Railway)
setInterval(() => {
  console.log("🟢 Process alive");
}, 60 * 1000);

client.login(TOKEN);
