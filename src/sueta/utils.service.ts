import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilsService {
  randomNoRepeats<T>(array: T[], n: number): T[] {
    return array.sort(() => Math.random() - Math.random()).slice(0, n);
  }
}
