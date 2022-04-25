import { Module } from '@nestjs/common';
import { SpecialConditionsService } from './special-conditions/special-conditions.service';
import { PrismaService } from './prisma.service';
import { CommonModule } from '../common/common.module';

@Module({
  imports: [CommonModule],
  providers: [PrismaService, SpecialConditionsService],
  exports: [PrismaService, SpecialConditionsService],
})
export class DatabaseModule {}
