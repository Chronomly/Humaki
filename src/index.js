const QuickBot = require('@chronomly/quickbot');
const config = require('./config.js');
const client = new QuickBot({
    owner: '251383432331001856',
    token: config.TOKEN,
    database: './database.json',
    PREFIX: config.PREFIX,
    disableAFK: true
});

client.on('message', (msg) => {
    if(msg.author.bot) return;
    let PREFIX = config.PREFIX
    const args = msg.content/*.slice(prefix.length)*/.trim().split(/\s+/g);
    const command = args.shift().toLowerCase();
    switch (command) {
        case `${PREFIX}setup` :
            msg.reply('later:tm:')
            break;
        case `${PREFIX}submit` :

            break;
    }
})