import { Activity } from '../activities.types';
import { LocalizationOption } from '../../../sueta/types/localization-option';
import { trialHardmodes } from '../../trial/trial.data';

export const expensivePotsActivity: Readonly<Activity> = Object.freeze({
  name: 'Pots are expensive bro',
  description: 'No potions allowed',
  excludingTrials: trialHardmodes,
  translations: new Map([
    [
      LocalizationOption.ru,
      {
        name: 'Банки слишком дорогие',
        description:
          'Нельзя использовать крафтовые, альянсковые и ультимейт зелья',
      },
    ],
  ]),
});
