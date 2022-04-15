import { Injectable } from '@nestjs/common';
import {
  Command,
  DiscordTransformedCommand,
  Payload,
  TransformedCommandExecutionContext,
  UsePipes,
} from '@discord-nestjs/core';
import { TransformPipe } from '@discord-nestjs/common';
import { MessageEmbed, WebhookEditMessageOptions } from 'discord.js';
import { SuetaDto } from './dto/sueta.dto';
import { SuetaService } from './sueta.service';

@Command({
  name: 'sueta',
  description: 'Навести суету',
})
@UsePipes(TransformPipe)
@Injectable()
export class SuetaCommand implements DiscordTransformedCommand<SuetaDto> {
  constructor(private readonly suetaService: SuetaService) {}

  async handler(
    @Payload() dto: SuetaDto,
    interaction: TransformedCommandExecutionContext,
  ): Promise<void> {
    await interaction.interaction.deferReply();

    const { difficulty } = dto;

    const reply = this.roll(difficulty + 1);

    await interaction.interaction.editReply(reply);
  }

  roll(difficulty: number): WebhookEditMessageOptions {
    const embed = new MessageEmbed();

    const sueta = this.suetaService.roll(difficulty);

    embed.setTitle(sueta.trial);
    sueta.suetaList.forEach((v) =>
      embed.addField(v.name, v.description as string),
    );

    return {
      embeds: [embed],
    };
  }
}
