import { Injectable } from '@nestjs/common';
import {
  Command,
  DiscordTransformedCommand,
  Payload,
  TransformedCommandExecutionContext,
  UsePipes,
} from '@discord-nestjs/core';
import { TransformPipe } from '@discord-nestjs/common';

import { SuetaService } from '../sueta.service';
import { GenericArgumentsDto } from '../dto/generic-arguments.dto';
import { LocalizationOption } from '../types/localization-option';
import { MessageEmbed } from 'discord.js';

@Command({
  name: 'list-all',
  description: 'List all available options',
})
@UsePipes(TransformPipe)
@Injectable()
export class ListAllOptionsCommand
  implements DiscordTransformedCommand<GenericArgumentsDto>
{
  constructor(private readonly suetaService: SuetaService) {}

  async handler(
    @Payload() dto: GenericArgumentsDto,
    interaction: TransformedCommandExecutionContext,
  ): Promise<void> {
    const { locale = LocalizationOption.ru } = dto;

    await interaction.interaction.deferReply();

    const availableActivities = await this.suetaService.getAllActivities(
      locale,
    );

    const embed = new MessageEmbed().setFields(
      availableActivities.map((activity) => ({
        name: activity.name,
        value: activity.description,
      })),
    );

    await interaction.interaction.editReply({ embeds: [embed] });
  }
}
