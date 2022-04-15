import { Injectable } from '@nestjs/common';
import { SuetaOptionDto, suetasData } from './data/suetas.data';
import { Trial, trials } from './data/trials.data';
import { UtilsService } from './utils.service';
import { DifficultyCurve } from './types/difficulty-curve.type';
import { SuetaDto } from './data/sueta.dto';

@Injectable()
export class SuetaService {
  constructor(private readonly utilsService: UtilsService) {}

  roll(difficulty: DifficultyCurve): SuetaDto {
    const sueta = new SuetaDto();
    sueta.trial = this.rollTrial(difficulty);
    sueta.suetaList = this.rollSuetaList(difficulty);

    return sueta;
  }

  private rollTrial(difficulty: DifficultyCurve): Trial {
    const [trial] = this.utilsService.randomNoRepeats(trials, 1);
    return trial;
  }

  private rollSuetaList(difficulty: DifficultyCurve): SuetaOptionDto[] {
    return this.utilsService
      .randomNoRepeats(suetasData, difficulty)
      .map((action) => {
        const result = new SuetaOptionDto();
        result.name = action.name;
        result.description =
          typeof action.description === 'function' &&
          Array.isArray(action.mods) &&
          action.mods.length > 0
            ? action.description(
                this.utilsService.randomNoRepeats(action.mods, 1)[0],
              )
            : (action.description as string);

        return result;
      });
  }
}
