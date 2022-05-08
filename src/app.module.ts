import { Module } from '@nestjs/common';
import { ConfigFactory, ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { SuetaModule } from './sueta/sueta.module';
import { CommonModule } from './common/common.module';
import { DataModule } from './data/data.module';

const validationSchema = Joi.object({
  DISCORD_TOKEN: Joi.string().required(),
  BOT_INTENTS: Joi.number().integer().required(),
  RANDOM_SEED: Joi.number().default(123),
  GITHUB_LINK: Joi.string().required(),
});

interface AppConfig {
  discordToken: string;
  botIntents: BigInt;
  randomSeed: number;
  githubLink: string;
}

const configuration: ConfigFactory<AppConfig> = () => ({
  discordToken: process.env.DISCORD_TOKEN,
  botIntents: BigInt(process.env.BOT_INTENTS),
  randomSeed: +process.env.RANDOM_SEED,
  githubLink: process.env.npm_package_repository_url ?? process.env.GITHUB_LINK,
});

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      validationSchema,
      load: [configuration],
    }),
    SuetaModule,
    CommonModule,
    DataModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
