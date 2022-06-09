import { Activity } from '../activities.types';
import { LocalizationOption } from '../../../sueta/types/localization-option';
import { illusionOfChoiceActivity } from './illusion-of-choice.activity';

export const furryConventionActivity: Readonly<Activity> = Object.freeze({
  name: 'Furry convention',
  description: 'Every group member must have the same race.',
  mods: ['Race - Argonian', 'Race - Khajiit'],
  excludingActivities: new Set<Activity>([illusionOfChoiceActivity]),
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
