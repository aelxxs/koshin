//? Configuration Variables
const { discord } = require('./config');
//? Making Client
const Discord = require('discord.js');
const client = new Discord.Client();
//? Collection of currently live streamers - cache
client.streams = new Discord.Collection();
//? Database -
const { db } = require('./util/db');
//? Handling ready event - Log to the console & start monitoring
client.on('ready', async () => {
	//? Log when online
	console.log(`[Discord] ${client.user.username} is online.`);
	//? Init DB
	await db.init();
	//? Start Monitoring
	require('./util/twitch-monitor')(client);
});
//? Log application in
client.login(discord.token);
