import { REST, Routes } from 'discord.js';

import { commands } from './general/commands';
import { TOKEN, CLIENT_ID } from './general/constant';

const rest = new REST({ version: '10' }).setToken(TOKEN);

export let registerCommand = async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
};
