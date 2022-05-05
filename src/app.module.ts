import { Module } from '@nestjs/common';

import { SuetaModule } from './sueta/sueta.module';
import { CommonModule } from './common/common.module';
import { DataModule } from './data/data.module';
import { DatabaseModule } from './database/database.module';
import { appConfig } from './config';

@Module({
  imports: [appConfig, SuetaModule, CommonModule, DataModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
