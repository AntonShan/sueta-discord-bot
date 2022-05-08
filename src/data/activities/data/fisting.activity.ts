import { Activity } from '../activities.types';
import { LocalizationOption } from '../../../sueta/types/localization-option';
import {
  AetherianArchive,
  HelRaCitadel,
  SanctumOphidia,
} from '../../trial/trial.data';

export const fistingActivity: Readonly<Activity> = Object.freeze({
  name: 'Fisting',
  description: 'All group members must have no weapons equipped',
  allowedTrials: new Set([AetherianArchive, HelRaCitadel, SanctumOphidia]),
  translations: new Map([
    [
      LocalizationOption.ru,
      {
        name: 'На кулаках',
        description: 'Члены группы должны быть без оружия',
      },
    ],
  ]),
});
