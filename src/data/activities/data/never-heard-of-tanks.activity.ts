import { Activity } from '../activities.types';
import { LocalizationOption } from '../../../sueta/types/localization-option';
import {
  AetherianArchive,
  AsylumSanctorium,
  Cloudrest,
  HelRaCitadel,
  MawOfLorkhaj,
  SanctumOphidia,
} from '../../trial/trial.data';

export const neverHeardOfTanksActivity: Readonly<Activity> = Object.freeze({
  name: "Tanks? Never heard of 'em",
  description:
    '12 DD group. Some DDs can use S&B and heavy armor but must do damage as well. The only taunt allowed is Inner Fire',
  allowedTrials: new Set([
    AetherianArchive,
    HelRaCitadel,
    SanctumOphidia,
    MawOfLorkhaj,
    AsylumSanctorium,
    Cloudrest,
  ]),
  translations: new Map([
    [
      LocalizationOption.ru,
      {
        name: 'Танки? Это что такое?',
        description:
          'Группа из 12 дд. Некоторые дд могут брать щитомеч и носить тяжёлую броню, но должны наносить урон. Из таунтов разрешён только Inner Fire',
      },
    ],
  ]),
});
