import { Activity } from '../activities.types';
import { LocalizationOption } from '../../../sueta/types/localization-option';
import { trialHardmodes } from '../../trial/trial.data';

export const everyManForHimselfActivity: Readonly<Activity> = Object.freeze({
  name: 'Every Man For Himself',
  description: 'No one can use any buff sets',
  excludingTrials: trialHardmodes,
  translations: new Map([
    [
      LocalizationOption.ru,
      {
        name: 'Каждый сам за себя',
        description:
          'Члены группы не должны использовать саппорт сеты для группы',
      },
    ],
  ]),
});
