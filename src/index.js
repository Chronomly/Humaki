const Commando = require('discord.js-commando');
const config = require('./config');
const path = require('path');
const sqlite = require('sqlite');

const client = new Commando.Client({
    owner: '251383432331001856'
});

client.setProvider(
    sqlite.open(path.join(__dirname, 'settings.sqlite3')).then(db => new Commando.SQLiteProvider(db))
).catch(console.error);

client.registry
    // Registers your custom command groups
    // .registerGroups([
    //     ['fun', 'Fun commands'],
    //     ['some', 'Some group'],
    //     ['other', 'Some other group']
    // ])

    // Registers all built-in groups, commands, and argument types
    .registerDefaults()

    // Registers all of your commands in the ./commands/ directory
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.login(config.TOKEN);