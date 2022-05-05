import { Module } from '@nestjs/common';
import { SpecialConditionsService } from './special-conditions/special-conditions.service';
import { PrismaService } from './prisma.service';
import { CommonModule } from '../common/common.module';
import { DatabaseController } from './database.controller';
import { TrialsService } from './trials/trials.service';

@Module({
  imports: [CommonModule],
  controllers: [DatabaseController],
  providers: [PrismaService, SpecialConditionsService, TrialsService],
  exports: [PrismaService, SpecialConditionsService, TrialsService],
})
export class DatabaseModule {}
