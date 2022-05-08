import { Injectable } from '@nestjs/common';
import { UtilsService } from '../../common/utils.service';
import { activities } from './activities.data';
import {
  DifficultyCurve,
  difficultySettings,
} from '../../sueta/types/difficulty-curve.type';
import { Activity, ResultingActivity } from './activities.types';
import { LocalizationOption } from '../../sueta/types/localization-option';

@Injectable()
export class ActivitiesService {
  constructor(private readonly utilsService: UtilsService) {}

  getActivitiesForDifficulty(difficulty: DifficultyCurve): Activity[] {
    const difficultyConfig =
      difficultySettings.get(difficulty) ??
      difficultySettings.get(DifficultyCurve['Filthy casual']);
    console.dir({ difficultyConfig, difficulty });
    const resultingList = new Set<Activity>();
    const activitiesSorted = new Set(this.utilsService.randomSort(activities));
    const activitiesToSkip = new Set<Activity>();

    for (const activity of activitiesSorted) {
      if (resultingList.size >= difficultyConfig.maxConditions) break;
      if (activitiesToSkip.has(activity)) continue;

      resultingList.add(activity);
      activity.excludingActivities?.forEach((activity) =>
        activitiesToSkip.add(activity),
      );
    }

    return this.utilsService.randomSort([...resultingList]);
  }

  transformActivity(
    activity: Activity,
    locale: LocalizationOption,
  ): ResultingActivity {
    const translatedActivity = activity.translations.get(locale) ?? activity;
    const mods = translatedActivity.mods ?? [];
    const [mod] = this.utilsService.randomNoRepeats(mods, 1);

    return {
      name: translatedActivity.name,
      description: mod
        ? `${translatedActivity.description} ${mod}`
        : translatedActivity.description,
    };
  }
}
