const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

const TOKEN = process.env.TOKEN;
const CHANNEL_ID = "https://discord.com/channels/1433087368335724616/1452279184847142932";
const IMAGE_URL = "https://www.gtabase.com/igallery/8901-9000/gtaonline-lossantosdrugwars-thelastdose-artwork-png-8940-1600.png";

if (!TOKEN) {
  console.error("TOKEN missing");
  process.exit(1);
}

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);

  // Force online presence (visual)
  client.user.setPresence({
    status: "online",
    activities: [{ name: "Repair reminders", type: 0 }]
  });

  setInterval(() => {
    const channel = client.channels.cache.get(CHANNEL_ID);
    if (!channel) return;

    // London time (UTC-based)
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const london = new Date(utc);
    const minutes = london.getMinutes();

    // Send at :00 and :30
    if (minutes === 0 || minutes === 30) {
      channel.send({
        content:
          "🔧 **Repair all solar panels if planted**\n" +
          "**Bonus will be provided 💰**\n\n" +
          "🟢 *React if repaired*",
        files: [IMAGE_URL]
      });

      console.log("Message sent");
    }
  }, 60 * 1000);
});

client.login(TOKEN);
