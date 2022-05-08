import { Activity } from '../activities.types';
import { LocalizationOption } from '../../../sueta/types/localization-option';
import { trialHardmodes } from '../../trial/trial.data';

export const survivorActivity: Readonly<Activity> = Object.freeze({
  name: 'Survivor',
  description: 'After every wipe group votes to kick one player',
  excludingTrials: trialHardmodes,
  translations: new Map([
    [
      LocalizationOption.ru,
      {
        name: 'Последний герой',
        description:
          'После каждого вайпа группа голосует за кик одного из членов группы',
      },
    ],
  ]),
});
