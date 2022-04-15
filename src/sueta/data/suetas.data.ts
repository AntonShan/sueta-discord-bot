export class SuetaOptionDto {
  name: string;
  description: string | ((mod: SuetaOptionDto['mods'][0]) => string);
  mods?: string[];
}

export const suetasData: SuetaOptionDto[] = [
  {
    name: 'Not enough tanks',
    description:
      'Every group member has to have Sword&Board equipped on at least one bar',
  },
  { name: 'Off-meta players', description: 'No barswaps allowed' },
  { name: 'Pots are expensive bro', description: 'No potions allowed' },
  {
    name: 'Healthy breeze around my privates',
    description:
      'Every group member must have pants slot empty. Gear and outfit-wise',
  },
  {
    name: 'The Dummy',
    description: 'Both tanks must have at least 70k HP',
  },
  {
    name: 'The Egoism',
    description: 'No buff sets on any group member',
  },
  {
    name: "Tanks? Never heard of 'em",
    description:
      '12 dps group. Some of dps can use S&B and heavy armor but must do damage as well',
  },
  {
    name: "Where's my 300$",
    description: 'Group members must have no weapons equipped',
  },
  {
    name: 'One life only',
    description:
      'Resurrection is forbidden. Members who died leave the instance',
  },
  {
    name: "Good 'ol days",
    description: 'Raid ends when vitality points reach zero',
  },
  {
    name: 'Hardcore mode',
    description: 'Characters who died must be deleted',
  },
  {
    name: 'Wall Street Gang',
    description: (mod) =>
      `Players donate ${mod} gold when they die. After raid ends, gold is split between top three players with least deaths`,
    mods: [
      '1',
      String(1e3),
      String(1e4),
      String(1e5),
      String(5e5),
      String(1e6),
    ],
  },
];
