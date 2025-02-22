const { tiktok, bot, getBuffer } = require('../lib/index')

bot(
	{
		pattern: 'tiktok ?(.*)',
		fromMe: true,
		desc: 'Download tiktok video',
		type: 'download',
	},
	async (message, match) => {
		match = match || message.reply_message.text
		if (!match) return await message.sendMessage('_Example : tiktok url_')
		const result = await tiktok(match)
		if (!result)
			return await message.sendMessage('*Not found*', {
				quoted: message.quoted,
			})
		return await message.sendFromUrl(result.url2)
	}
)
