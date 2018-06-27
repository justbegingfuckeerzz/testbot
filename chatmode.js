const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});
const token = require('./token2.json');
const prefix = require('./prefix.json');
var fs = require("fs");
const nekoclient = require('nekos.life');
const neko = new nekoclient();
const user = require("./users.json");
const chatter = user.user;

bot.on("message", async message => {
    if (message.author.bot) return;
    if(message.author.id != chatter) return;
    if (message.channel.type === "dm") return;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
   
if(cmd === `${prefix.prefix}exit`)
{
	message.channel.send("Exiting chatting mode, bye " +message.author.username);
	var exec = require('child_process').exec;
	exec(`node bot.js`);
	bot.destroy();
}
		let chats = cmd;
		   async function work() {
           let owo = await neko.getSFWChat({text: chats });
  console.log(owo);
    message.channel.send(` >> _ _ _ _ ${owo.response}`);    
}
work();
});