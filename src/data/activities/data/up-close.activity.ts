import { Activity } from '../activities.types';
import { LocalizationOption } from '../../../sueta/types/localization-option';

export const upCloseActivity: Readonly<Activity> = Object.freeze({
  name: 'Up close and personal',
  description: 'No ranged (>5m) weapons or skills allowed',
  translations: new Map([
    [
      LocalizationOption.ru,
      {
        name: 'Скажи мне это в лицо',
        description:
          'Разрешены только скиллы и оружие с дальностью действия не более 5м',
      },
    ],
  ]),
});
