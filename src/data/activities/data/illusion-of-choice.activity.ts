import { Activity } from '../activities.types';
import { LocalizationOption } from '../../../sueta/types/localization-option';
import { furryConventionActivity } from './furry-convention.activity';
import { fistingActivity } from './fisting.activity';

export const illusionOfChoiceActivity: Readonly<Activity> = Object.freeze({
  name: 'The illusion of free choice',
  description: 'Every group member must have the same class',
  mods: [
    'Class - Sorcerer',
    'Class - Nightblade',
    'Class - Dragonknight',
    'Class - Warden',
    'Class - Necromancer',
    'Class - Templar',
  ],
  excludingActivities: new Set<Activity>([
    furryConventionActivity,
    fistingActivity,
  ]),
  translations: new Map([
    [
      LocalizationOption.ru,
      {
        name: 'Иллюзия выбора',
        description:
          'Каждый член группы должен быть на персонаже одного указанного класса',
        mods: [
          'Класс - Чародей',
          'Класс - Найтблейд',
          'Класс - Рыцарь-дракон',
          'Класс - Хранитель',
          'Класс - Некромант',
          'Класс - Темплар',
        ],
      },
    ],
  ]),
});
