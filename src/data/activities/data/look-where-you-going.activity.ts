import { Activity } from '../activities.types';
import { LocalizationOption } from '../../../sueta/types/localization-option';

export const lookWhereYouGoingActivity: Readonly<Activity> = Object.freeze({
  name: "Look where you're going",
  description: 'Game UI must be disabled during raid',
  translations: new Map([
    [
      LocalizationOption.ru,
      {
        name: 'Смотри куда прёшь',
        description: 'Игровой интерфейс должен быть выключен в течение рейда',
      },
    ],
  ]),
});
