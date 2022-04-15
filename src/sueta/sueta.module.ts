import { Module } from '@nestjs/common';
import { SuetaService } from './sueta.service';
import { SuetaCommand } from './sueta.command';
import { DiscordModule } from '@discord-nestjs/core';
import { ConfigService } from '@nestjs/config';
import { Intents } from 'discord.js';

@Module({
  imports: [
    DiscordModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        token: configService.get('discordToken'),
        discordClientOptions: {
          intents: [Intents.FLAGS.GUILD_MESSAGES],
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [SuetaService, SuetaCommand],
})
export class SuetaModule {}
