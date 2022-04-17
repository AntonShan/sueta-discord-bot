import { Module } from '@nestjs/common';
import { ActivitiesService } from './activities/activities.service';
import { TrialService } from './trial/trial.service';
import { CommonModule } from '../common/common.module';

@Module({
  imports: [CommonModule],
  providers: [ActivitiesService, TrialService],
  exports: [ActivitiesService, TrialService],
})
export class DataModule {}
