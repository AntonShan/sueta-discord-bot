import { Injectable } from '@nestjs/common';
import { UtilsService } from '../../common/utils.service';
import { Trial } from './trial.types';
import { DifficultyCurve } from '../../sueta/types/difficulty-curve.type';
import { AetherianArchive } from './trial.data';

@Injectable()
export class TrialService {
  constructor(private readonly utilsService: UtilsService) {}

  getTrial(difficulty: DifficultyCurve, allowedTrials: Set<Trial>): Trial {
    const [trial] = this.utilsService.randomNoRepeats([...allowedTrials], 1);

    return trial ?? AetherianArchive;
  }
}
