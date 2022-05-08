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
import { SuetaDto } from '../dto/sueta.dto';
import { SuetaService } from '../sueta.service';
import { LocalizationOption } from '../types/localization-option';

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

    const { difficulty, locale = LocalizationOption.ru } = dto;

    const reply = await this.roll(difficulty, locale);

    await interaction.interaction.editReply(reply);
  }

  async roll(
    difficulty: number,
    locale: LocalizationOption,
  ): Promise<WebhookEditMessageOptions> {
    const embed = new MessageEmbed();

    const sueta = await this.suetaService.roll(difficulty, locale);

    embed.setTitle(sueta.trial);
    sueta.activityList.forEach((v) =>
      embed.addField(v.name, v.description as string),
    );

    return {
      embeds: [embed],
    };
  }
}
