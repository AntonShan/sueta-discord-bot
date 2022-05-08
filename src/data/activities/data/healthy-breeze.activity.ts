import { Activity } from '../activities.types';
import { LocalizationOption } from '../../../sueta/types/localization-option';
import { trialHardmodes } from '../../trial/trial.data';

export const healthyBreezeActivity: Readonly<Activity> = Object.freeze({
  name: 'Healthy breeze around my privates',
  description:
    'All group members must wear no pants — both gear and outfit wise',
  excludingTrials: trialHardmodes,
  translations: new Map([
    [
      LocalizationOption.ru,
      {
        name: 'Люблю свежий ветерок вокруг интимных частей тела',
        description: 'У каждого члена группы слот штанов должен быть пустым',
      },
    ],
  ]),
});
