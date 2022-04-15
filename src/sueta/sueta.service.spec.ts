import { Test, TestingModule } from '@nestjs/testing';
import { SuetaService } from './sueta.service';

describe('SuetaService', () => {
  let service: SuetaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuetaService],
    }).compile();

    service = module.get<SuetaService>(SuetaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
