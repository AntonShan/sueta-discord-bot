import { LocalizationOption } from '../../sueta/types/localization-option';

export class Activity {
  name: string;
  description: string;
  mods?: string[];
  translations: Map<LocalizationOption, Omit<Activity, 'translations'>>;
}

export class ResultingActivity {
  name: string;
  description: string;
}
