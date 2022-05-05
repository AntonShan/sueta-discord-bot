import { Controller, Get, Query } from '@nestjs/common';
import { SpecialConditionsService } from './special-conditions/special-conditions.service';
import { LocalizationOption } from '../sueta/types/localization-option';

@Controller('/database')
export class DatabaseController {
  constructor(
    private readonly specialConditionsService: SpecialConditionsService,
  ) {}

  @Get()
  async getEntities(
    @Query('locale') locale: LocalizationOption = LocalizationOption.en,
  ) {
    return this.specialConditionsService.getSpecialConditions(locale);
  }
}
