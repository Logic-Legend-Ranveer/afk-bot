const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'node-us-error-01.15.tickhosting.com', // Replace with your server IP
    port: 50412,                                 // Replace with your server port
    username: 'AFK_KeepAlive',
    version: '1.21.11'
  });

  bot.on('login', () => {
    console.log('Bot logged in successfully! Server will stay awake.');
  });

  bot.on('end', () => {
    console.log('Disconnected. Reconnecting in 15 seconds...');
    setTimeout(createBot, 15000);
  });

  bot.on('error', err => console.log('Error:', err));
}

createBot();