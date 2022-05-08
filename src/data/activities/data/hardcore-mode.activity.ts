import { Activity } from '../activities.types';
import { LocalizationOption } from '../../../sueta/types/localization-option';

export const hardcoreModeActivity: Readonly<Activity> = Object.freeze({
  name: 'Hardcore mode',
  description:
    'Resurrection is forbidden. Members who died must leave the instance',
  translations: new Map([
    [
      LocalizationOption.ru,
      {
        name: 'Одна жизнь',
        description:
          'Нельзя воскрешать(-ся). Члены группы при смерти покидают инстанс',
      },
    ],
  ]),
});
