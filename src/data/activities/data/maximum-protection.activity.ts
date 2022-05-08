import { Activity } from '../activities.types';
import { LocalizationOption } from '../../../sueta/types/localization-option';
import { fistingActivity } from './fisting.activity';

export const maximumProtectionActivity: Readonly<Activity> = Object.freeze({
  name: 'Maximum protection',
  description:
    'All group members must have a Sword&Board equipped on at least one bar',
  excludingActivities: new Set([fistingActivity]),
  translations: new Map([
    [
      LocalizationOption.ru,
      {
        name: 'Нехватка танков',
        description:
          'У каждого члена группы хотя бы на одной панели должен быть экипирован щитомеч',
      },
    ],
  ]),
});
