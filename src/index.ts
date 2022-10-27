import { TOKEN } from './general/constant';
import { registerCommand } from './registerCommand';
import { client } from './client';
import './events';

client.on('ready', () => {
  console.log(`Logged in as ${client?.user?.tag}!`);
});

registerCommand();
// Log in to Discord with your client's token
client.login(TOKEN);
