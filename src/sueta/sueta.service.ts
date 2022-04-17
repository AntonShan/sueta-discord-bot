import { Injectable } from '@nestjs/common';
import { DifficultyCurve } from './types/difficulty-curve.type';
import { ActivitiesService } from '../data/activities/activities.service';
import { TrialService } from '../data/trial/trial.service';
import { ResultingActivity } from '../data/activities/activities.types';
import { Sueta } from './data/sueta.dto';
import { Trial } from '../data/trial/trial.types';
import { LocalizationOption } from './types/localization-option';

@Injectable()
export class SuetaService {
  constructor(
    private readonly activitiesService: ActivitiesService,
    private readonly trialsService: TrialService,
  ) {}

  async roll(
    difficulty: DifficultyCurve,
    locale: LocalizationOption,
  ): Promise<Sueta> {
    const sueta = new Sueta();
    const [trial, activityList] = await Promise.all([
      this.rollTrial(difficulty),
      this.rollSuetaList(difficulty, locale),
    ]);

    sueta.trial = trial;
    sueta.activityList = activityList;

    return sueta;
  }

  private rollTrial(difficulty: DifficultyCurve): Trial {
    return this.trialsService.getTrial();
  }

  private rollSuetaList(
    difficulty: DifficultyCurve,
    locale: LocalizationOption,
  ): ResultingActivity[] {
    return this.activitiesService.getActivitiesForDifficulty(
      difficulty,
      locale,
    );
  }
}
