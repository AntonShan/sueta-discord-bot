import { Trial } from './trial.types';

export const AetherianArchive: Readonly<Trial> = 'Aetherian Archive';
export const AetherianArchiveHM: Readonly<Trial> = 'Aetherian Archive Hardmode';
export const HelRaCitadel: Readonly<Trial> = 'Hel-Ra Citadel';
export const HelRaCitadelHM: Readonly<Trial> = 'Hel-Ra Citadel Hardmode';
export const SanctumOphidia: Readonly<Trial> = 'Sanctum Ophidia';
export const SanctumOphidiaHM: Readonly<Trial> = 'Sanctum Ophidia Hardmode';
export const MawOfLorkhaj: Readonly<Trial> = 'Maw of Lorkhaj';
export const MawOfLorkhajHM: Readonly<Trial> = 'Maw of Lorkhaj Hardmode';
export const HallsOfFabrication: Readonly<Trial> = 'Halls of Fabrication';
export const HallsOfFabricationHM: Readonly<Trial> =
  'Halls of Fabrication Hardmode';
export const AsylumSanctorium: Readonly<Trial> = 'Asylum Sanctorium';
export const AsylumSanctoriumHM: Readonly<Trial> = 'Asylum Sanctorium Hardmode';
export const Cloudrest: Readonly<Trial> = 'Cloudrest';
export const CloudrestHM: Readonly<Trial> = 'Cloudrest Hardmode';
export const Sunspire: Readonly<Trial> = 'Sunspire';
export const SunspireHM: Readonly<Trial> = 'Sunspire Hardmode';
export const KynesAegis: Readonly<Trial> = "Kyne's Aegis";
export const KynesAegisHM: Readonly<Trial> = "Kyne's Aegis Hardmode";
export const Rockgrove: Readonly<Trial> = 'Rockgrove';
export const RockgroveHM: Readonly<Trial> = 'Rockgrove Hardmode';

// Yes, Sanctum Ophidia HM is not in this list
export const trialHardmodes: Set<Trial> = new Set([
  AetherianArchiveHM,
  HelRaCitadelHM,
  MawOfLorkhajHM,
  HallsOfFabricationHM,
  AsylumSanctoriumHM,
  CloudrestHM,
  SunspireHM,
  KynesAegisHM,
  RockgroveHM,
]);

export const trialsForDummies: Readonly<Trial[]> = Object.freeze([
  AetherianArchive,
  AetherianArchiveHM,
  HelRaCitadel,
  SanctumOphidia,
  SanctumOphidiaHM,
]);

export const trials: Readonly<Trial[]> = Object.freeze([
  AetherianArchive,
  AetherianArchiveHM,
  HelRaCitadel,
  HelRaCitadelHM,
  SanctumOphidia,
  SanctumOphidiaHM,
  MawOfLorkhaj,
  MawOfLorkhajHM,
  HallsOfFabrication,
  HallsOfFabricationHM,
  AsylumSanctorium,
  AsylumSanctoriumHM,
  Cloudrest,
  CloudrestHM,
  Sunspire,
  SunspireHM,
  KynesAegis,
  KynesAegisHM,
  Rockgrove,
  RockgroveHM,
]);
