import { Activity } from './activities.types';
import { LocalizationOption } from '../../sueta/types/localization-option';

export const activities: Readonly<Activity[]> = Object.freeze([
  {
    name: 'Not enough tanks',
    description:
      'Every group member has to have Sword&Board on at least one bar',
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
    name: 'Off-meta players',
    description: 'No barswaps allowed',
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
      'Every group member must have pants slot empty. Gear and outfit-wise',
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
    name: 'The Dummy',
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
    name: 'The Egoism',
    description: 'No buff sets on any group member',
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
      '12 dps group. Some of dps can use S&B and heavy armor but must do damage as well. Only allowed taunt is Inner Fire',
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
    description: 'Group members must have no weapons equipped',
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
    name: 'One life only',
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
    description: 'Raid ends when vitality points reach zero',
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
    description: `Players donate gold when they die. After raid ends, gold is split between top three players with least deaths.`,
    translations: new Map([
      [
        LocalizationOption.ru,
        {
          name: 'Клуб миллионеров',
          description:
            'За каждую смерть игрок догатит золото. После окончания рейда золото делится между топ 3 с наименьшим количеством смертей.',
          mods: [
            'Отдаваемая голда: 1',
            'Отдаваемая голда: 1000',
            'Отдаваемая голда: 10000',
            'Отдаваемая голда: 100000',
            'Отдаваемая голда: 500000 ',
            'Отдаваемая голда: 1000000',
          ],
        },
      ],
    ]),
    mods: [
      'Amount donated: 1 gold',
      'Amount donated: 1000 gold',
      'Amount donated: 10000 gold',
      'Amount donated: 100000 gold',
      'Amount donated: 500000 gold ',
      'Amount donated: 1000000 gold',
    ],
  },
  {
    name: 'Illusion of choice',
    description: 'Every group member has to have the same class',
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
            'каждый член группы должен быть на персонаже одного указанного класса',
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
    description: 'All movement in boss fights is performed in walking mode',
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
    name: 'Visit to the Zoo',
    description:
      'Every group member has to have maximum possible amount of combat pets',
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
    name: "I don't know what class I am",
    description: 'No class skills except passives are allowed',
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
    name: 'Say it to my face',
    description: 'Skills and weapons with more than 5m range are forbidden',
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
    name: 'Reaction of butterfly. Agility of mongoose',
    description: 'Skills and weapons with more than 5m range are forbidden',
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
    description: 'Only PvP sourced sets are allowed',
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
    name: 'Dirty Peasant',
    description:
      'Every item players wear must be of crafted set in white quality',
    translations: new Map([
      [
        LocalizationOption.ru,
        {
          name: 'Нет денег',
          description: 'Разрешены только крафтовые сеты в белом качестве',
        },
      ],
    ]),
  },
  {
    name: 'Dirty Peasant',
    description:
      'Every item players wear must be of crafted set in white quality',
    translations: new Map([
      [
        LocalizationOption.ru,
        {
          name: 'Нет денег',
          description: 'Разрешены только крафтовые сеты в белом качестве',
        },
      ],
    ]),
  },
]);
