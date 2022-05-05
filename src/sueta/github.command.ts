import { Injectable } from '@nestjs/common';
import { Command, DiscordCommand, UsePipes } from '@discord-nestjs/core';
import { TransformPipe } from '@discord-nestjs/common';
import { CommandInteraction } from 'discord.js';
import { ConfigService } from '@nestjs/config';

@Command({
  name: 'github',
  description: 'Get github link',
})
@UsePipes(TransformPipe)
@Injectable()
export class GithubLinkCommand implements DiscordCommand {
  constructor(private readonly configService: ConfigService) {}

  async handler(interaction: CommandInteraction): Promise<void> {
    await interaction.deferReply();

    const githubLink = this.configService.get('githubLink');

    await interaction.editReply(githubLink);
  }
}
