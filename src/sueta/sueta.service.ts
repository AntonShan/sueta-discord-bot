import { Injectable } from '@nestjs/common';
import { DifficultyCurve } from './types/difficulty-curve.type';
import { ActivitiesService } from '../data/activities/activities.service';
import { TrialService } from '../data/trial/trial.service';
import {
  Activity,
  ResultingActivity,
} from '../data/activities/activities.types';
import { Sueta } from './data/sueta.dto';
import { Trial } from '../data/trial/trial.types';
import { LocalizationOption } from './types/localization-option';
import { activities } from '../data/activities/activities.data';
import { AetherianArchive, trials } from '../data/trial/trial.data';

@Injectable()
export class SuetaService {
  constructor(
    private readonly activitiesService: ActivitiesService,
    private readonly trialsService: TrialService,
  ) {}

  async getAllActivities(
    locale: LocalizationOption,
  ): Promise<ResultingActivity[]> {
    return activities.map<ResultingActivity>((activity) => {
      const { name, description } =
        activity.translations.get(locale) ?? activity;

      return { name, description };
    });
  }

  async roll(
    difficulty: DifficultyCurve,
    locale: LocalizationOption,
  ): Promise<Sueta> {
    const sueta = new Sueta();
    const activityList =
      await this.activitiesService.getActivitiesForDifficulty(difficulty);
    const allowedTrials = this.generateAllowedTrialsList(activityList);
    const trial = this.trialsService.getTrial(difficulty, allowedTrials);

    sueta.trial = trial;
    sueta.activityList = activityList.map((activity) =>
      this.activitiesService.transformActivity(activity, locale),
    );

    return sueta;
  }

  private generateAllowedTrialsList(activities: Activity[]): Set<Trial> {
    const resultingSet = new Set<Trial>(trials);

    activities.forEach((activity) => {
      // If activity has a list of allowed trials this list has bigger priority
      // So we shrink initial list of trials to only those which are allowed
      if (activity.allowedTrials) {
        resultingSet.forEach((trial) => {
          if (!activity.allowedTrials.has(trial)) {
            resultingSet.delete(trial);
          }
        });
        return;
      }

      activity.excludingTrials?.forEach((trial) => resultingSet.delete(trial));
    });

    return resultingSet;
  }
}
