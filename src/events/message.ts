import { client } from '../client';

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'hist') {
    await interaction.reply({ content: 'Siapa!' });
  }
});
