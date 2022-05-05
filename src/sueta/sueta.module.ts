import { Module } from '@nestjs/common';
import { SuetaService } from './sueta.service';
import { SuetaCommand } from './sueta.command';
import { DiscordModule } from '@discord-nestjs/core';
import { ConfigService } from '@nestjs/config';
import { Intents } from 'discord.js';
import { SuetaController } from './sueta.controller';
import { CommonModule } from '../common/common.module';
import { DataModule } from '../data/data.module';
import { GithubLinkCommand } from './github.command';

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
    CommonModule,
    DataModule,
  ],
  providers: [SuetaService, SuetaCommand, GithubLinkCommand],
  controllers: [SuetaController],
})
export class SuetaModule {}
