import { Activity } from '../activities.types';
import { LocalizationOption } from '../../../sueta/types/localization-option';
import { neverHeardOfTanksActivity } from './never-heard-of-tanks.activity';

export const trainingDummyActivity: Readonly<Activity> = Object.freeze({
  name: 'Training Dummy',
  description: 'All tanks must have at least 70k HP',
  excludingActivities: new Set([neverHeardOfTanksActivity]),
  translations: new Map([
    [
      LocalizationOption.ru,
      {
        name: 'Тренировочный болванчик',
        description: 'Все танки в группе должны иметь хотя бы 70к здоровья',
      },
    ],
  ]),
});
