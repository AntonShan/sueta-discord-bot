import { Activity } from '../activities.types';
import { LocalizationOption } from '../../../sueta/types/localization-option';
import {
  AetherianArchiveHM,
  AsylumSanctorium,
  AsylumSanctoriumHM,
  Cloudrest,
  CloudrestHM,
  HallsOfFabrication,
  HelRaCitadelHM,
  KynesAegis,
  MawOfLorkhaj,
  Rockgrove,
  SanctumOphidiaHM,
  Sunspire,
} from '../../trial/trial.data';
import { offMetaMeta } from './off-meta-meta.activity';

export const littlePidgeonsActivity: Readonly<Activity> = Object.freeze({
  name: 'Little pigeons can carry great messages',
  description:
    'Every member has to be level 10 and below. Trial has to be on normal difficulty',
  // Excluded as this condition is already included into this one by mechanics of the game
  excludingActivities: new Set([offMetaMeta]),
  excludingTrials: new Set([
    AetherianArchiveHM,
    HelRaCitadelHM,
    SanctumOphidiaHM,
    MawOfLorkhaj,
    HallsOfFabrication,
    AsylumSanctorium,
    AsylumSanctoriumHM,
    Cloudrest,
    CloudrestHM,
    Sunspire,
    KynesAegis,
    Rockgrove,
  ]),
  translations: new Map([
    [
      LocalizationOption.ru,
      {
        name: 'Мал да удал',
        description: 'Все члены группы должны быть 10 уровня и ниже',
      },
    ],
  ]),
});
