import * as Joi from 'joi';
import { ConfigFactory, ConfigModule } from '@nestjs/config';

const validationSchema = Joi.object({
  DISCORD_TOKEN: Joi.string().required(),
  BOT_INTENTS: Joi.number().integer().required(),
  DATABASE_HOST: Joi.string().required(),
  DATABASE_PORT: Joi.number().required(),
  DATABASE_USERNAME: Joi.string().required(),
  DATABASE_PASSWORD: Joi.string().required(),
  DATABASE_NAME: Joi.string().required(),
  DATABASE_CONNECTION_STRING: Joi.string().uri(),
  GITHUB_LINK: Joi.string().required(),
  RANDOM_SEED: Joi.number().default(123),
});

interface AppConfig {
  discordToken: string;
  botIntents: BigInt;
  databaseHost: string;
  databasePort: number;
  databaseUsername: string;
  databasePassword: string;
  databaseName: string;
  dbConnectionString: string;
  githubLink: string;
  randomSeed: number;
}

const configuration: ConfigFactory<AppConfig> = () => ({
  discordToken: process.env.DISCORD_TOKEN,
  botIntents: BigInt(process.env.BOT_INTENTS),
  databaseHost: process.env.DATABASE_HOST,
  databasePort: +process.env.DATABASE_PORT,
  databaseUsername: process.env.DATABASE_USERNAME,
  databasePassword: process.env.DATABASE_PASSWORD,
  databaseName: process.env.DATABASE_NAME,
  dbConnectionString: process.env.DATABASE_CONNECTION_STRING,
  githubLink: process.env.GITHUB_LINK,
  randomSeed: +process.env.RANDOM_SEED,
});

export const appConfig = ConfigModule.forRoot({
  isGlobal: true,
  cache: true,
  validationSchema,
  load: [configuration],
});
