import { Module } from '@nestjs/common';
import { SuetaService } from './sueta.service';
import { SuetaCommand } from './commands/sueta.command';
import { GithubLinkCommand } from './commands/github.command';
import { ListAllOptionsCommand } from './commands/list-all.command';
import { DiscordModule, registerFilterGlobally } from '@discord-nestjs/core';
import { ConfigService } from '@nestjs/config';
import { Intents } from 'discord.js';
import { SuetaController } from './sueta.controller';
import { CommonModule } from '../common/common.module';
import { DataModule } from '../data/data.module';
import { CommandExceptionFilter } from './exception-filter';

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
  providers: [
    {
      provide: registerFilterGlobally(),
      useClass: CommandExceptionFilter,
    },
    SuetaService,
    SuetaCommand,
    GithubLinkCommand,
    ListAllOptionsCommand,
  ],
  controllers: [SuetaController],
})
export class SuetaModule {}
