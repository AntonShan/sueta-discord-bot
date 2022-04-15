import { Choice, Param, ParamType } from '@discord-nestjs/core';
import { DifficultyCurve } from '../types/difficulty-curve.type';

export class SuetaDto {
  @Choice(DifficultyCurve)
  @Param({
    description: 'How hard you want it to be',
    type: ParamType.INTEGER,
  })
  difficulty: DifficultyCurve;
}
