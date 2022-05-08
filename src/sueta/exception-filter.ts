import {
  DiscordArgumentMetadata,
  DiscordExceptionFilter,
  Catch,
} from '@discord-nestjs/core';
import { MessageEmbed } from 'discord.js';
import { Logger } from '@nestjs/common';

@Catch(Error)
export class CommandExceptionFilter implements DiscordExceptionFilter {
  private readonly logger = new Logger(CommandExceptionFilter.name);

  async catch(
    exception: Error,
    metadata: DiscordArgumentMetadata<'interactionCreate'>,
  ): Promise<void> {
    const [interaction] = metadata.eventArgs;

    this.logger.error(exception.message);

    const embed = new MessageEmbed()
      .setColor('RED')
      .addField(
        'Oi! I have an exception for you',
        'I reckon you wanted some sueta? Not today mate. Coem back later',
      );

    if (interaction.isCommand()) {
      (await interaction.deferred)
        ? interaction.editReply({ embeds: [embed] })
        : interaction.reply({ embeds: [embed] });
    }
  }
}
