import { Injectable } from '@nestjs/common';
import { UtilsService } from '../../common/utils.service';
import { activities } from './activities.data';
import { DifficultyCurve } from '../../sueta/types/difficulty-curve.type';
import { Activity, ResultingActivity } from './activities.types';
import { LocalizationOption } from '../../sueta/types/localization-option';

@Injectable()
export class ActivitiesService {
  constructor(private readonly utilsService: UtilsService) {}

  getActivitiesForDifficulty(
    difficulty: DifficultyCurve,
    locale: LocalizationOption,
  ): ResultingActivity[] {
    return this.utilsService
      .randomNoRepeats([...activities], difficulty)
      .map((activity) => {
        return this.transformActivity(activity, locale);
      });
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
