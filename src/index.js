
const tmi = require('tmi.js');
const commands = require('./commands');

const options = {
  identity: {
    username: '9botardo',
    password: 'oauth:j27vwwlneg08w8qzk4que989ueoy8o'
  },
  channels: [
    '9gustin'
  ]
};

const client = new tmi.client(options);

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

client.connect();

// // Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } 

  let message = msg.toLowerCase().trim();
  const msgCommand = message.split('-')[0].trim();
  message = message.replace(msgCommand, '').trim().substr(1, message.length);

  const command = commands.find(cmd => cmd.key.some(key => msgCommand === key.toLowerCase()));

  if(command) {
    if (command.fn) command.fn(message);
    else client.say(target, command.return);
  }
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}