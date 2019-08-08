const TeleBot = require('telebot');
const bot = new TeleBot('782267900:AAHeHEdZyd1eXpV6Z8iakkdwXgvb556q5SY');

bot.on(['/start', '/hello'], (msg) => msg.reply.text('¡Hola soy el violin de Fede Llorente!'));
bot.on(/fede\sllorente/i, (msg) => msg.reply.text('cerra el orto tarado'));
bot.on(/siempre\sdel\slado\scorrecto/i, (msg) => {
    return msg.reply.photo('https://d1aeri3ty3izns.cloudfront.net/media/3/33238/600/preview_2.jpg');
});
bot.start();