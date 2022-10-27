import { Client, GatewayIntentBits } from 'discord.js';
import { TOKEN } from './general/constant';
import { registerCommand } from './registerCommand';

// Create a new client instance
export const client = new Client({ intents: [GatewayIntentBits.Guilds] });
