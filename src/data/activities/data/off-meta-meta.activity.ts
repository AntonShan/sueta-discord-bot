import { LocalizationOption } from '../../../sueta/types/localization-option';
import { Activity } from '../activities.types';
import { Cloudrest, trialHardmodes } from '../../trial/trial.data';
import { Trial } from '../../trial/trial.types';

export const offMetaMeta: Readonly<Activity> = Object.freeze({
  name: 'The off-meta meta',
  description: 'No bar swapping allowed',
  excludingTrials: new Set<Trial>([...trialHardmodes, Cloudrest]),
  translations: new Map([
    [
      LocalizationOption.ru,
      { name: 'Не по мете', description: 'Без барсвапов' },
    ],
  ]),
});
