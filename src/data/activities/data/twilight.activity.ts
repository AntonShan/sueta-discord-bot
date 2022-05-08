import { Activity } from '../activities.types';
import { LocalizationOption } from '../../../sueta/types/localization-option';

export const twilightActivity: Readonly<Activity> = Object.freeze({
  name: 'Twilight',
  description:
    'Every party member has to have a curse and use at least some of corresponding abilities',
  mods: [
    'Curse - Vampirism',
    'Curse - Werewolf',
    'Curse - Vampire or Werewolf',
  ],
  translations: new Map([
    [
      LocalizationOption.ru,
      {
        name: 'Сумерки',
        description:
          'Каждый член группы должен иметь указанное проклятие и использовать способности, доступные с этим проклятием',
        mods: [
          'Проклятие - Вампиризм',
          'Проклятие - Вервольф',
          'Проклятие - Вампиризм или Вервольф на усмотрение игрока',
        ],
      },
    ],
  ]),
});
