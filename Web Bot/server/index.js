const TelegramBot = require('node-telegram-bot-api');
const token = "6784399105:AAEe5x8SyxI_ViSQ5ZG57FoaxauEXvsdAhk";

const bot = new TelegramBot(token, { polling: true });

const bootstrap = () => {
  bot.on('message', async msg => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === '/start') {
      await bot.sendMessage(
        chatId, 'MadiyarovWebBotni platformasini ishaga tushurdiz',
        {
          reply_markup: {
            keyboard: [
              [
                {
                  text: 'Kurslarni Ko\'rish',
                  web_app: {

                      url: 'https://www.madiyarov.uz/', 
                  }
                },
              ],
            ],
          },
        }
      );
    }
  });
};

bootstrap();
