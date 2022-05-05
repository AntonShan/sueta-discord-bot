import { PrismaService } from '../prisma.service';
import { Injectable } from '@nestjs/common';
import { Trial } from '@prisma/client';

@Injectable()
export class TrialsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getTrials(): Promise<Trial[]> {
    return this.prismaService.trial.findMany();
  }
}
