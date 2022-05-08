import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { DifficultyCurve } from './types/difficulty-curve.type';
import { LocalizationOption } from './types/localization-option';
import { SuetaService } from './sueta.service';
import { ResultingActivity } from '../data/activities/activities.types';

@Controller('sueta')
export class SuetaController {
  constructor(private readonly suetaService: SuetaService) {}

  @Get('/')
  async getSueta(
    @Query('difficulty', ParseIntPipe) difficulty: DifficultyCurve,
    @Query('locale') locale: LocalizationOption,
  ) {
    return this.suetaService.roll(difficulty, locale);
  }

  @Get('/activities')
  async getActivities(
    @Query('locale') locale = LocalizationOption.en,
  ): Promise<ResultingActivity[]> {
    return this.suetaService.getAllActivities(locale);
  }
}
