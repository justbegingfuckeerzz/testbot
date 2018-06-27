const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();
var fs = require('fs');
const user = require("./users.json");
const user_name = require("./user_name.json");



//const commands = require("./neckos.json");
const config = require("./botconfig.json");
const prefix = "&";
const client = new Discord.Client();
const snekfetch = require('snekfetch');
var link = "https://nekos.life/api/v2/img/cum";
var colorx = Math.floor(Math.random() * 9447093) + 1000000;


client.on('ready', async () =>{
	console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
	client.user.setActivity(`Serving ${client.guilds.size} servers`);
})


///////////
client.on('guildMemberAdd', member => {
	// Send the message to a designated channel on a server:
	const channel = member.guild.channels.find('name', 'member-log');
	// Do nothing if the channel wasn't found on this server
	if (!channel) return;
	// Send the message, mentioning the member
	channel.send(`Welcome to the server, ${member}`);
  });



////////////
client.on("message", async message => {
 const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
let age = message.content;
let userx1 = message.author;


/////////////////////////////////////////////
////////////////////////////////////////////
/*const response={
	"hello": "hello " + `${chatter}`,
	"bye": "bye" + message.channel.member
}
*/
if(command === "shutdown")
{
	client.destroy();
}

if(command === "chat")
{
	
	message.channel.send('entering chatting mode with ' + message.author.username);
	let chatter = message.author.id;
	let chatter_name = message.author.username;
	//for(var i = 0; i< user.users.length; i++)
	//{
	//if(!user.users[i]){
	fs.writeFile('user_name.json', `{ "user":"${chatter_name}"}`, function (err)
		{
			if(err) throw err;
			console.log('saved!');
		});
		
	fs.writeFile('users.json', `{ "user":${chatter}}`, function (err)
		{
			if(err) throw err;
			console.log('saved!');
		});
		
		
	
	
	var exec = require('child_process').exec;
	exec(`node chatmode2.js`);
	
	client.destroy();
	
	

	
}
		
	
if (command === 'nsfw') {
	if (message.channel.nsfw == true) { 
		async function test() {
		 var x=  await neko.getNSFWAnal();
		 
message.channel.send(x.url);
	 }test();    
	}
	 else {
		 message.channel.send('You are not authorized to do it here!');
	 }
 }

 if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
	////////////////////////
	 
    

	
	///////////////////////


	//when the user type chat it will go inside chatting mode => DONE!
	//TODO restrict answering to the user who activated the mode => DONE!
	//eliminate the need for the prefix to chat => DONE!
	//Make different instances for other users at the same time [TODO]

	
	



if(command === 'get-mention')
{
	let persons = message.mentions.members.array();
	let person = [];
	console.log(persons.length);
	for( var i = 0; i<persons.length;i++)
	{
		person[i] = persons[i];
		person[i] = person[i].toString();
	}
	for( var i = 0;i<persons.length;i++)
	{
		message.channel.send(person[i]);
		console.log(person[i]);
	}
	/*
	let person_1 = persons[0];
	let person_2 = persons[1];
	let person_3 = persons[2];
	
	
	person_1 = person_1.toString();
	person_2 = person_2.toString();
	person_3 = person_3.toString();
	
	message.channel.send(person_1);
	message.channel.send(person_2);
	message.channel.send(person_3);
	console.log(person_1);
	console.log(person_2);
	console.log(person_3);
	*/
}


if(command === 'change-nick')
{
	let userx = message.mentions.members.first();
	let nickname = args.slice(1).join("");
	userx.edit({
		nick: nickname,
		color: colorx
	})
}
 if(command === 'cum') {
	  /* function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}*/
function x(){
	snekfetch.get(link).then(r=> {
              let body = r.body;
			   message.channel.send({embed: {
                  "image": body,
	"color": colorx}})}
			   )
}
	   let count = args;  
    message.channel.send(`I will make you cum in ${count}!`,{tts:true})
	.then(msg=> {for(count;count>=0;count--){msg.edit(`I will make you cum in ${count}!`,{tts:true});
	msg.delete(500);
	}
	msg.delete(500)})
	.then(setTimeout(x ,count*1000))
  } else
  
  if (command === 'age') {  
       let age = args;  
	if(isNaN(age)){
	message.reply('sssssssssss please enter a number for your age, dumbass!', {tts:true})
	.then(msg=>{msg.edit('I deleted it because you are too dumb to understand')})
	.then(x=>{
	x.delete(5000)});
	return;
  }
	else if(age < 10 || age > 90)
	{	
		
		
		message.reply('fffffffffff Please enter a reasonable age not mythical, stupid!', {tts:true});
		
		return;
	}
   if (age >= 18){
	   let x = parseInt(age);
       message.reply(`Hello ${message.author.username}, I see you're a ${x} years old Welcome`, {tts:true});
       
   } else {
	   let x = parseInt(age);
       message.member.ban(message.author)
  .then(() => console.log(`Banned ${member.displayName}`))
  .catch(console.error);

   message.reply(`Hello ${message.author.username}, I see you're a ${x} you have should leave!`, {tts:true});}

    
}

if(command === "purge") {
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
});
client.on('disconnect', event => {
	console.error(`[DISCONNECT] Disconnected with code ${event.code}.`);
	process.exit(0);
});
process.on('unhandledRejection', err => {
	console.error('[FATAL] Unhandled Promise Rejection.', err);
	process.exit(1);
});

// Log our bot in
client.login(config.token);