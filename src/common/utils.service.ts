import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import MercenneTwister from 'mersenne-twister';

@Injectable()
export class UtilsService {
  private generator: MercenneTwister;

  constructor(private readonly configService: ConfigService) {
    this.generator = new MercenneTwister(configService.get('randomSeed'));
  }

  randomNoRepeats<T>(array: T[], n: number): T[] {
    const sliceEnd = Math.floor(this.generator.random() * array.length);
    return array
      .sort(() => Math.random() - Math.random())
      .slice(sliceEnd - n, sliceEnd);
  }
}
