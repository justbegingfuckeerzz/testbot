const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();
const users = require("./users.json");
const user_name = require("./user_name.json");
const user_namex = user_name.user;
const chatter = users.user;
const typing_res = require("./typing_response.json");
const delay_res = require('./delay_res.json');



const prefix = '*';
//const commands = require("./neckos.json");
const config = require("./botconfig.json");

const client = new Discord.Client();



client.on('ready', async () =>{
    client.user.setActivity(`chatting with ${user_namex}`);
})

console.log(users.user);

client.on('typingStart', (channel, user) => {
	if(user.bot) return;
	 if(user.id != chatter) return;
	
	var t_res = Math.floor(Math.random() * 3) + 0;
var x = typing_res.res[t_res];
	console.log(x);
    channel.send(`${x}`);
    
   
	
});


client.on('message', (message) => {
	 const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
if (message.author.bot) return;
if(message.author.id != chatter) return;
if(command === "exit")
{
	message.channel.send("Exiting chatting mode, bye " +message.author.username);
	var exec = require('child_process').exec;
	exec(`node test.js`);
	client.destroy();
}
//let chats = args.slice(0).join(" ");
message.channel.startTyping(); 
		let chats = message.content;
		   async function work() {
           let owo = await neko.getSFWChat({text: chats });
  console.log(owo);
    message.channel.send(` >> _ _ _ _ ${owo.response}`);    
}
work();
message.channel.stopTyping();
});



// Log our bot in
client.login(config.token);
