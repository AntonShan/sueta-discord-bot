import { Injectable } from '@nestjs/common';
import { SpecialCondition, SpecialConditionModification } from '@prisma/client';
import { UtilsService } from '../../common/utils.service';
import { DifficultyCurve } from '../../sueta/types/difficulty-curve.type';
import { ResultingActivity } from './activities.types';
import { LocalizationOption } from '../../sueta/types/localization-option';
import { SpecialConditionsService } from '../../database/special-conditions/special-conditions.service';

@Injectable()
export class ActivitiesService {
  constructor(
    private readonly specialConditionsService: SpecialConditionsService,
    private readonly utilsService: UtilsService,
  ) {}

  async getActivitiesForDifficulty(
    difficulty: DifficultyCurve,
    locale: LocalizationOption,
  ): Promise<ResultingActivity[]> {
    const activities = await this.specialConditionsService.getSpecialConditions(
      locale,
    );

    return this.utilsService
      .randomNoRepeats([...activities], difficulty)
      .map((activity) => this.transformActivity(activity));
  }

  transformActivity(
    activity: SpecialCondition & {
      modifications: SpecialConditionModification[];
    },
  ): ResultingActivity {
    const [mod] = this.utilsService.randomNoRepeats(activity.modifications, 1);

    return {
      name: activity.name,
      description: mod
        ? `${activity.description} ${mod.text}`
        : activity.description,
    };
  }
}
