import { Activity } from '../activities.types';
import { LocalizationOption } from '../../../sueta/types/localization-option';
import { trialsForDummies } from '../../trial/trial.data';

export const notSoFastActivity: Readonly<Activity> = Object.freeze({
  name: 'Not so fast',
  description:
    'All movement during boss fights has to be performed in walking mode',
  allowedTrials: new Set(trialsForDummies),
  translations: new Map([
    [
      LocalizationOption.ru,
      {
        name: 'Сбавь обороты',
        description:
          'Передвижение на боссах и выполнение механик в режиме ходьбы',
      },
    ],
  ]),
});
