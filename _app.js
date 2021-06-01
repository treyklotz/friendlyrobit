require("dotenv").config()
const Discord = require("discord.js")
const client = new Discord.Client()

client.on('ready', () => {
    console.log('Bot is ready')
})
client.login(process.env.BOT_TOKEN)

client.on('message', msg => {

    if (msg.content.toLowerCase().includes('ping'))
        msg.channel.send('pong')

})

client.on('typingStart', (channel, user) => {
    console.log(`${user.tag} typing in ${channel.name}`)
})
