const express = require('express');
const mineflayer = require('mineflayer');

const app = express();

// Web server to satisfy hosting requirements
app.get('/', (req, res) => {
  res.send('Minecraft AFK Bot is active!');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Web server running on port ' + (process.env.PORT || 3000));
});

// Mineflayer Minecraft Bot
function createBot() {
  const bot = mineflayer.createBot({
    host: 'node-us-error-01.15.tickhosting.com', // Replace with your TickHosting server address
    port: 50412,                                 // Replace with your server port
    username: 'AFK_KeepAlive',
    version: '1.21.11'
  });

  bot.on('login', () => {
    console.log('Bot successfully joined the server! Server will stay online.');
  });

  bot.on('end', () => {
    console.log('Bot disconnected. Reconnecting in 15 seconds...');
    setTimeout(createBot, 15000);
  });

  bot.on('error', err => console.log('Bot Error:', err));
}

createBot();
