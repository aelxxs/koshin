module.exports = {
	//? Discord -
	discord: {
		//? App Token - https://discordapp.com/developers/applications
		token: '',
		//? Notification Channel ID -
		channel_id: ''
	},

	//? Twitch -
	twitch: {
		//? Twitch Client ID - https://dev.twitch.tv/console/apps/create
		client_id: '',
		//? Name of streamer
		streamer: '',
		//? Color on embed - default #9147FF
		embed_color: '#9147FF',
		//? Stream online message - default "{STREAMER} is now online!"
		live_message: '<STREAMER> is now online!',
		//? Stream offline message - default "{STREAMER} is now offline!"
		offline_message: '<STREAMER> is now offline!'
	}
};
