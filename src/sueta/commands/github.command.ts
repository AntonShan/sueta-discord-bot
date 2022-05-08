import { Injectable } from '@nestjs/common';
import { Command, DiscordCommand, UsePipes } from '@discord-nestjs/core';
import { TransformPipe } from '@discord-nestjs/common';
import { CommandInteraction } from 'discord.js';
import { repository } from '../../../package.json';

@Command({
  name: 'github',
  description: 'Get github link',
})
@UsePipes(TransformPipe)
@Injectable()
export class GithubLinkCommand implements DiscordCommand {
  async handler(interaction: CommandInteraction): Promise<void> {
    await interaction.reply(repository.url);
  }
}
