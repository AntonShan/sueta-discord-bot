import { LocalizationOption } from '../../sueta/types/localization-option';
import { Trial } from '../trial/trial.types';

export class Activity {
  name: string;
  description: string;
  mods?: string[];
  excludingActivities?: Set<Activity>;
  allowedTrials?: Set<Trial>;
  excludingTrials?: Set<Trial>;
  translations: Map<LocalizationOption, Omit<Activity, 'translations'>>;
}

export class ResultingActivity {
  name: string;
  description: string;
}
