import { Activity } from './activities.types';
import { LocalizationOption } from '../../sueta/types/localization-option';

export const activities: Readonly<Activity[]> = Object.freeze([
  {
    name: 'Maximum protection',
    description:
      'All group members must have a Sword&Board equipped on at least one bar',
    translations: new Map([
      [
        LocalizationOption.ru,
        {
          name: 'Нехватка танков',
          description:
            'У каждого члена группы хотя бы на одной панели должен быть экипирован щитомеч',
        },
      ],
    ]),
  },
  {
    name: 'The off-meta meta',
    description: 'No bar swapping allowed',
    translations: new Map([
      [
        LocalizationOption.ru,
        { name: 'Не по мете', description: 'Без барсвапов' },
      ],
    ]),
  },
  {
    name: 'Pots are expensive bro',
    description: 'No potions allowed',
    translations: new Map([
      [
        LocalizationOption.ru,
        {
          name: 'Банки слишком дорогие',
          description:
            'Нельзя использовать крафтовые, альянсковые и ультимейт зелья',
        },
      ],
    ]),
  },
  {
    name: 'Healthy breeze around my privates',
    description:
      'All group members must wear no pants — both gear and outfit wise',
    translations: new Map([
      [
        LocalizationOption.ru,
        {
          name: 'Люблю свежий ветерок вокруг интимных частей тела',
          description:
            'У каждого члена группы должен слот штанов должен быть пустым',
        },
      ],
    ]),
  },
  {
    name: 'Training Dummy',
    description: 'All tanks must have at least 70k HP',
    translations: new Map([
      [
        LocalizationOption.ru,
        {
          name: 'Тренировочный болванчик',
          description: 'Все танки в группе должны иметь хотя бы 70к здоровья',
        },
      ],
    ]),
  },
  {
    name: 'Every Man For Himself',
    description: 'No one can use any buff sets',
    translations: new Map([
      [
        LocalizationOption.ru,
        {
          name: 'Каждый сам за себя',
          description:
            'Члены группы не должны использовать саппорт сеты для группы',
        },
      ],
    ]),
  },
  {
    name: "Tanks? Never heard of 'em",
    description:
      '12 DD group. Some DDs can use S&B and heavy armor but must do damage as well. The only taunt allowed is Inner Fire',
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
  },
  {
    name: 'Fisting',
    description: 'All group members must have no weapons equipped',
    translations: new Map([
      [
        LocalizationOption.ru,
        {
          name: 'На кулаках',
          description: 'Члены группы должны быть без оружия',
        },
      ],
    ]),
  },
  {
    name: 'Hardcore mode',
    description:
      'Resurrection is forbidden. Members who died must leave the instance',
    translations: new Map([
      [
        LocalizationOption.ru,
        {
          name: 'Одна жизнь',
          description:
            'Нельзя воскрешать(-ся). Члены группы при смерти покидают инстанс',
        },
      ],
    ]),
  },
  {
    name: "Good 'ol days",
    description: 'The raid ends when vitality reaches zero',
    translations: new Map([
      [
        LocalizationOption.ru,
        {
          name: 'Как в старые времена',
          description:
            'Рейд заканчивается когда счётчик виталити достигает нуля',
        },
      ],
    ]),
  },
  {
    name: 'Wall Street Gang',
    description: `Players have to donate gold every time they die. After the raid ends, that gold is split between the top three players with the least deaths`,
    translations: new Map([
      [
        LocalizationOption.ru,
        {
          name: 'Клуб миллионеров',
          description:
            'За каждую смерть игрок донатит золото. После окончания рейда золото делится между топ 3 с наименьшим количеством смертей.',
          mods: [
            'Отдаваемая голда: 1',
            'Отдаваемая голда: 1,000',
            'Отдаваемая голда: 10,000',
            'Отдаваемая голда: 100,000',
            'Отдаваемая голда: 500,000',
            'Отдаваемая голда: 1,000,000',
          ],
        },
      ],
    ]),
    mods: [
      'Amount donated: 1 gold',
      'Amount donated: 1,000 gold',
      'Amount donated: 10,000 gold',
      'Amount donated: 100,000 gold',
      'Amount donated: 500,000 gold',
      'Amount donated: 1,000,000 gold',
    ],
  },
  {
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
  },
  {
    name: 'Not so fast',
    description:
      'All movement during boss fights has to be performed in walking mode',
    translations: new Map([
      [
        LocalizationOption.ru,
        {
          name: 'Сбавь обороты',
          description:
            'Передвижение на боссах и выполнение механик в режиме ходьбы',
        },
      ],
    ]),
  },
  {
    name: 'Zoo escape',
    description:
      'Every group member has to have the maximum possible amount of combat pets out at all times',
    translations: new Map([
      [
        LocalizationOption.ru,
        {
          name: 'Поход в зоопарк',
          description:
            'Члены группы должны иметь максимально возможное количество боевых питомцев',
        },
      ],
    ]),
  },
  {
    name: 'Class-less warfare',
    description: 'No active class skills allowed',
    translations: new Map([
      [
        LocalizationOption.ru,
        {
          name: 'Не важно какого я класса',
          description: 'Запрещены классовые скилы',
        },
      ],
    ]),
  },
  {
    name: 'Up close and personal',
    description: 'No ranged (>5m) weapons or skills allowed',
    translations: new Map([
      [
        LocalizationOption.ru,
        {
          name: 'Скажи мне это в лицо',
          description:
            'Разрешены только скиллы и оружие с дальностью действия не более 5м',
        },
      ],
    ]),
  },
  {
    name: 'Walk it off',
    description:
      'No healing sets or skills allowed. You can still use shields and damage-reducing skills like Barrier',
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
  },
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
  {
    name: 'Dirty Plebs',
    description: 'Only white quality crafted gear allowed',
    translations: new Map([
      [
        LocalizationOption.ru,
        {
          name: 'Белорусский трикотаж',
          description: 'Разрешены только крафтовые сеты в белом качестве',
        },
      ],
    ]),
  },
  {
    name: 'Survivor',
    description: 'After every wipe group votes to kick one player',
    translations: new Map([
      [
        LocalizationOption.ru,
        {
          name: 'Последний герой',
          description:
            'После каждого вайпа группа голосует за кик одного из членов группы',
        },
      ],
    ]),
  },
  {
    name: 'Furry convention',
    description: 'Every group member must have the same race.',
    mods: ['Race - Argonian', 'Race - Khajiit'],
    translations: new Map([
      [
        LocalizationOption.ru,
        {
          name: 'Обратная дискриминация',
          description:
            'Каждый член группы должен быть на персонаже одного указанной расы.',
          mods: ['Раса - аргонианин', 'Раса - каджит'],
        },
      ],
    ]),
  },
]);
