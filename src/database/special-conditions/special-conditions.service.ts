import { Injectable } from '@nestjs/common';
import { SpecialCondition } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { DifficultyCurve } from '../../sueta/types/difficulty-curve.type';
import { LocalizationOption } from '../../sueta/types/localization-option';

@Injectable()
export class SpecialConditionsService {
  constructor(private prisma: PrismaService) {}

  async getSpecialConditionsForDifficulty(
    difficulty: DifficultyCurve,
    locale: LocalizationOption,
  ): Promise<SpecialCondition[]> {
    const records = await this.prisma.specialCondition.findMany({
      where: {
        difficultyGrade: {
          lt: difficulty,
        },
      },
      include: {
        modifications: true,
        translations: {
          where: { locale: typeof locale },
        },
        excludedTrials: {
          where: {
            trial: {
              difficultyGrade: { lt: difficulty },
            },
          },
        },
      },
    });

    return records;
  }
}
