import { Choice, Param, ParamType } from '@discord-nestjs/core';
import { LocalizationOption } from '../types/localization-option';

export class GenericArgumentsDto {
  @Choice(LocalizationOption)
  @Param({
    description: 'Locale you want to see result in',
    type: ParamType.STRING,
    required: false,
  })
  locale: LocalizationOption;
}
