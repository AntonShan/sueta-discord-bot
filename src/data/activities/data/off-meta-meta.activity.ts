import { LocalizationOption } from '../../../sueta/types/localization-option';
import { Activity } from '../activities.types';
import { trialHardmodes } from '../../trial/trial.data';

export const offMetaMeta: Readonly<Activity> = Object.freeze({
  name: 'The off-meta meta',
  description: 'No bar swapping allowed',
  excludingTrials: trialHardmodes,
  translations: new Map([
    [
      LocalizationOption.ru,
      { name: 'Не по мете', description: 'Без барсвапов' },
    ],
  ]),
});
