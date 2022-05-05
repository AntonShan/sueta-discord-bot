import { Module } from '@nestjs/common';
import { ActivitiesService } from './activities/activities.service';
import { TrialService } from './trial/trial.service';
import { CommonModule } from '../common/common.module';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [CommonModule, DatabaseModule],
  providers: [ActivitiesService, TrialService],
  exports: [ActivitiesService, TrialService],
})
export class DataModule {}
