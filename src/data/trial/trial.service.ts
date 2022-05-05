import { Injectable } from '@nestjs/common';
import { UtilsService } from '../../common/utils.service';
import { Trial } from './trial.types';
import { TrialsService } from '../../database/trials/trials.service';

@Injectable()
export class TrialService {
  constructor(
    private readonly utilsService: UtilsService,
    private readonly trialsService: TrialsService,
  ) {}

  async getTrial(): Promise<Trial> {
    const trials = await this.trialsService.getTrials();
    const [trial] = this.utilsService.randomNoRepeats([...trials], 1);
    return trial.name;
  }
}
