import { Injectable } from '@nestjs/common';
import { UtilsService } from '../../common/utils.service';
import { Trial } from './trial.types';
import { trials } from './trial.data';

@Injectable()
export class TrialService {
  constructor(private readonly utilsService: UtilsService) {}

  getTrial(): Trial {
    const [trial] = this.utilsService.randomNoRepeats([...trials], 1);
    return trial;
  }
}
