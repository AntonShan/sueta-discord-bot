export enum DifficultyCurve {
  'Filthy casual',
  'Chill',
  'I like it tingling',
  'Ready for more',
  'Gimme everything you have',
}

export interface DifficultyConfiguration {
  maxConditions: number;
  scoreBudget: number;
}

export const difficultySettings = new Map<
  DifficultyCurve,
  DifficultyConfiguration
>([
  [DifficultyCurve['Filthy casual'], { maxConditions: 2, scoreBudget: 10 }],
  [DifficultyCurve['Chill'], { maxConditions: 3, scoreBudget: 20 }],
  [
    DifficultyCurve['I like it tingling'],
    { maxConditions: 4, scoreBudget: 50 },
  ],
  [DifficultyCurve['Ready for more'], { maxConditions: 5, scoreBudget: 150 }],
  [
    DifficultyCurve['Gimme everything you have'],
    { maxConditions: 6, scoreBudget: 400 },
  ],
]);
