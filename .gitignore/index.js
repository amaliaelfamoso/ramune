  const Discord = require('discord.js');
  const bot = new Discord.Client();

  bot.login('NjExNDg3ODIyNzc5NTE0ODg1.XVVGtA.dMqH2pHTEfz6n7o8ftAPNp4TrKI');

  bot.on('ready', () => {
      console.log('Ramune est prête!');
  });

  bot.on('message', message => {
    if (message.content === 'mdr') {
    message.channel.sendMessage('ha oké');
   }
  });

  bot.on('message', message => {
      if (message.content === 'r-gif') {
      message.channel.sendMessage('https://68.media.tumblr.com/e2b56effaea09849316c7b489c006397/tumblr_o14v1u5znA1r60zuio2_r1_500.gif');
    }
  });

  bot.on('message', message => {
      if (message.content === '...') {
      message.channel.sendMessage('ça va aller TQT')
    }
  });

  bot.on('message', message => {
      if (message.content === 'r-help') {
      message.channel.sendMessage('Je suis là pour vous ! Mais je suis en développement...Je suis confuse.')
    }
  });

  bot.on('message', message => {
      if (message.content === 'merci') {
      message.channel.sendMessage('De rien ! On appelle ça la politesse.')
    }
  });

  bot.on('message', message => {
      if (message.content === '@Ramune ラムネ#9817') {
      message.channel.sendMessage('QUI A MENTION??')
    }
  });

  bot.on('message', message => {
      if (message.content === 'Pourquoi "Ramune" ?') {
      message.channel.sendMessage('Alors... Longue histoire. La fondatrice (Amalia) buvait un Ramune en se demandant "Et si je créais un PvP Fac ?" et elle à trouver ainsi.')
    }
   });

  bot.on('message', message => {
      if (message.content === '.') {
      message.channel.sendMessage('Point, il se tua.')
    }
   });
