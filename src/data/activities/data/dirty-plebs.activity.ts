import { Activity } from '../activities.types';
import { LocalizationOption } from '../../../sueta/types/localization-option';
import { trialHardmodes } from '../../trial/trial.data';

export const dirtyPlebsActivity: Readonly<Activity> = Object.freeze({
  name: 'Dirty Plebs',
  description: 'Only white quality crafted gear allowed',
  excludingTrials: trialHardmodes,
  translations: new Map([
    [
      LocalizationOption.ru,
      {
        name: 'Белорусский трикотаж',
        description: 'Разрешены только крафтовые сеты в белом качестве',
      },
    ],
  ]),
});
