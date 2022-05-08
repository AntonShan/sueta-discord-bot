import { Activity } from '../activities.types';
import { LocalizationOption } from '../../../sueta/types/localization-option';

export const didTheBestWithWhatIHadActivity: Readonly<Activity> = Object.freeze(
  {
    name: 'I did the best with what I had',
    description: 'Only PvP-sourced sets allowed',
    translations: new Map([
      [
        LocalizationOption.ru,
        {
          name: 'Я его слепила из того, что было',
          description: 'Разрешены только сеты из пвп',
        },
      ],
    ]),
  },
);
