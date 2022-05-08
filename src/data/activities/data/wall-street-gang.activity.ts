import { Activity } from '../activities.types';
import { LocalizationOption } from '../../../sueta/types/localization-option';

export const wallStreetGangActivity: Readonly<Activity> = Object.freeze({
  name: 'Wall Street Gang',
  description: `Players have to donate gold every time they throw. After the raid ends, that gold is split between the top three players with the least deaths`,
  translations: new Map([
    [
      LocalizationOption.ru,
      {
        name: 'Клуб миллионеров',
        description:
          'Кидая группу (умирая или убивая других) игрок донатит золото. После окончания рейда золото делится между топ 3 с наименьшим количеством смертей.',
        mods: [
          'Отдаваемая голда: 1,000',
          'Отдаваемая голда: 10,000',
          'Отдаваемая голда: 50,000',
          'Отдаваемая голда: 100,000',
          'Отдаваемая голда: 500,000',
          'Отдаваемая голда: 1,000,000',
        ],
      },
    ],
  ]),
  mods: [
    'Amount donated: 1,000 gold',
    'Amount donated: 10,000 gold',
    'Amount donated: 50,000 gold',
    'Amount donated: 100,000 gold',
    'Amount donated: 500,000 gold',
    'Amount donated: 1,000,000 gold',
  ],
});
