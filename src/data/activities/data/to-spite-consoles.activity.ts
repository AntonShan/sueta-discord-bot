import { Activity } from '../activities.types';
import { LocalizationOption } from '../../../sueta/types/localization-option';

export const toSpiteConsolesActivity: Readonly<Activity> = Object.freeze({
  name: 'To spite console players',
  description: 'Addons must be disabled during raid',
  translations: new Map([
    [
      LocalizationOption.ru,
      {
        name: 'Назло консольщикам',
        description: 'Аддоны должны быть выключены в течение рейда',
      },
    ],
  ]),
});