import { Activity } from '../activities.types';
import { LocalizationOption } from '../../../sueta/types/localization-option';

export const classLessWarfareActivity: Readonly<Activity> = Object.freeze({
  name: 'Class-less warfare',
  description: 'No active class skills allowed',
  translations: new Map([
    [
      LocalizationOption.ru,
      {
        name: 'Не важно какого я класса',
        description: 'Запрещены классовые скилы',
      },
    ],
  ]),
});
