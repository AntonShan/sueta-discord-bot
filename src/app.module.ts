import { Module } from '@nestjs/common';
import { ConfigFactory, ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { SuetaModule } from './sueta/sueta.module';

const validationSchema = Joi.object({
  DISCORD_TOKEN: Joi.string().required(),
  BOT_INTENTS: Joi.number().integer().required(),
});

interface AppConfig {
  discordToken: string;
  botIntents: BigInt;
}

const configuration: ConfigFactory<AppConfig> = () => ({
  discordToken: process.env.DISCORD_TOKEN,
  botIntents: BigInt(process.env.BOT_INTENTS),
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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
