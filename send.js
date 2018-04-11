var methods = {}
methods.send = function(msg){
    const Discord = require('discord.js');
    const bot = new Discord.Client();

    bot.on('ready', () => {
        console.log(`Logged in as ${bot.user.tag}!`);
        bot.channels.get('416087830515810305').fetchMessages({limit:100})
        .then(messages => {
            let messagesArr = messages.array();
            let messageCount = messagesArr.length;
     
            for(let i = 0; i < messageCount; i++) {
              messagesArr[i].delete()
            }
        })
        .catch(function(err) {
          console.log('error thrown');
          console.log(err);
        });
        // bot.destroy((err)=>{
        //     console.log(err);
        // })
    });
    
    
    bot.login('');
};

exports.data = methods;