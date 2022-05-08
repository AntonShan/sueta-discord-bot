import { Activity } from '../activities.types';
import { LocalizationOption } from '../../../sueta/types/localization-option';
import {
  AetherianArchive,
  AsylumSanctorium,
  HelRaCitadel,
  SanctumOphidia,
} from '../../trial/trial.data';

export const walkItOffActivity: Readonly<Activity> = Object.freeze({
  name: 'Walk it off',
  description:
    'No healing sets or skills allowed. You can still use shields and damage-reducing skills like Barrier',
  allowedTrials: new Set([
    AetherianArchive,
    HelRaCitadel,
    SanctumOphidia,
    AsylumSanctorium,
  ]),
  translations: new Map([
    [
      LocalizationOption.ru,
      {
        name: 'Реакция бабочки. Ловкость мангуста',
        description:
          'Запрещены хилящие скилы и сеты. Разрешены щиты (в т.ч. барьер)',
      },
    ],
  ]),
});
