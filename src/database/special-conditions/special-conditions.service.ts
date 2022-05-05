import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { LocalizationOption } from '../../sueta/types/localization-option';

@Injectable()
export class SpecialConditionsService {
  constructor(private prisma: PrismaService) {}

  async getSpecialConditions(locale: LocalizationOption) {
    const records = await this.prisma.specialCondition.findMany({
      where: { locale },
      include: {
        excludedBy: true,
        modifications: true,
        excludedTrials: true,
      },
    });

    return records;
  }
}
