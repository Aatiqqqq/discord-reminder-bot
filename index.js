const { Client, GatewayIntentBits } = require("discord.js");

// Create client with required intents
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds
  ]
});

// Read token from Railway
const TOKEN = process.env.TOKEN;

// HARD FAIL if token missing
if (!TOKEN) {
  console.error("❌ TOKEN is missing in Railway Variables");
  process.exit(1);
}

// Log when connected
client.once("ready", () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

// Catch login errors
client.login(TOKEN).catch(err => {
  console.error("❌ Login error:", err);
  process.exit(1);
});

// Keep process alive (important for Railway)
setInterval(() => {
  console.log("🟢 Bot still running...");
}, 60 * 1000);
