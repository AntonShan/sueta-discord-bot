import { Choice, Param, ParamType } from '@discord-nestjs/core';
import { DifficultyCurve } from '../types/difficulty-curve.type';
import { LocalizationOption } from '../types/localization-option';

export class SuetaDto {
  @Choice(DifficultyCurve)
  @Param({
    description: 'How hard you want it to be',
    type: ParamType.INTEGER,
    required: true,
  })
  difficulty: DifficultyCurve;

  @Choice(LocalizationOption)
  @Param({
    description: 'Locale you want to see result in',
    type: ParamType.STRING,
    required: false,
  })
  locale: LocalizationOption;
}
