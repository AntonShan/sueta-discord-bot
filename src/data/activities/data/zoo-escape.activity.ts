import { Activity } from '../activities.types';
import { LocalizationOption } from '../../../sueta/types/localization-option';

export const zooEscapeActivity: Readonly<Activity> = Object.freeze({
  name: 'Zoo escape',
  description:
    'Every group member has to have the maximum possible amount of combat pets out at all times',
  translations: new Map([
    [
      LocalizationOption.ru,
      {
        name: 'Поход в зоопарк',
        description:
          'Члены группы должны иметь максимально возможное количество боевых питомцев',
      },
    ],
  ]),
});
