import { Activity } from '../activities.types';
import { LocalizationOption } from '../../../sueta/types/localization-option';
import { trialHardmodes } from '../../trial/trial.data';
import { didTheBestWithWhatIHadActivity } from './did-the-best-with-what-i-had.activity';

export const dirtyPlebsActivity: Readonly<Activity> = Object.freeze({
  name: 'Dirty Plebs',
  description: 'Only white quality crafted gear allowed',
  excludingTrials: trialHardmodes,
  excludingActivities: new Set([didTheBestWithWhatIHadActivity]),
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
