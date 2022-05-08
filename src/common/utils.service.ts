import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import MercenneTwister from 'mersenne-twister';

@Injectable()
export class UtilsService {
  private generator: MercenneTwister;

  constructor(private readonly configService: ConfigService) {
    this.generator = new MercenneTwister(configService.get('randomSeed'));
  }

  randomSort<T>(array: Readonly<T[]>): T[] {
    return [...array].sort(
      () =>
        this.generator.random_long() * this.generator.random_long() -
        this.generator.random_long() * this.generator.random_long(),
    );
  }

  randomNoRepeats<T>(array: T[], n: number): T[] {
    const randomSliceEnd = Math.floor(this.generator.random() * array.length);
    const randomSliceStart = randomSliceEnd - n;
    const sliceStart = randomSliceStart < 0 ? 0 : randomSliceStart;
    const sliceEnd = sliceStart + n;
    const returnValue = this.randomSort(array).slice(sliceStart, sliceEnd);

    return returnValue;
  }
}
