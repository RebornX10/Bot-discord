const Discord = require('discord.js');
const client = new Discord.Client();
var anti_spam = require("discord-anti-spam");

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('pong');
  }
});

antispam(bot, {
  warnBuffer: 3, //Maximum amount of messages allowed to send in the interval time before getting warned.
  maxBuffer: 5, // Maximum amount of messages allowed to send in the interval time before getting banned.
  interval: 2000, // Amount of time in ms users can send a maximum of the maxBuffer variable before getting banned.
  warningMessage: "Stop le Spam ou c'est un Ban.", // Warning message send to the user indicating they are going to fast.
  banMessage: "a été banni parce qu'il a spammer, d'autres volontaires?", // Ban message, always tags the banned user in front of it.
  maxDuplicatesWarning = 7,// Maximum amount of duplicate messages a user can send in a timespan before getting warned
  maxDuplicatesBan = 10 // Maximum amount of duplicate messages a user can send in a timespan before getting banned
});

client.login('MzkwNTMzMTIwOTMzMzYzNzE1.DRLmgQ.BgcVgt-LmIioJ3wLir24aLgBYvo');