import { Trial } from './trials.data';
import { SuetaOptionDto } from './suetas.data';

export class SuetaDto {
  trial: Trial;
  suetaList: SuetaOptionDto[] = [];
}
