import { Activity } from '../activities.types';
import { LocalizationOption } from '../../../sueta/types/localization-option';

export const furryConventionActivity: Readonly<Activity> = Object.freeze({
  name: 'Furry convention',
  description: 'Every group member must have the same race.',
  mods: ['Race - Argonian', 'Race - Khajiit'],
  translations: new Map([
    [
      LocalizationOption.ru,
      {
        name: 'Обратная дискриминация',
        description:
          'Каждый член группы должен быть на персонаже одной указанной расы.',
        mods: ['Раса - аргонианин', 'Раса - каджит'],
      },
    ],
  ]),
});