import { Choice, Param, ParamType } from '@discord-nestjs/core';
import { DifficultyCurve } from '../types/difficulty-curve.type';
import { GenericArgumentsDto } from './generic-arguments.dto';

export class SuetaDto extends GenericArgumentsDto {
  @Choice(DifficultyCurve)
  @Param({
    description: 'How hard you want it to be',
    type: ParamType.INTEGER,
    required: true,
  })
  difficulty: DifficultyCurve;
}
