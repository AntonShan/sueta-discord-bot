import { Activity } from '../activities.types';
import { LocalizationOption } from '../../../sueta/types/localization-option';

export const goodOlDaysActivity: Readonly<Activity> = Object.freeze({
  name: "Good 'ol days",
  description: 'The raid ends when vitality reaches zero',
  translations: new Map([
    [
      LocalizationOption.ru,
      {
        name: 'Как в старые времена',
        description: 'Рейд заканчивается когда счётчик виталити достигает нуля',
      },
    ],
  ]),
});
