import { Test, TestingModule } from '@nestjs/testing';
import { SpecialConditionsService } from './special-conditions.service';

describe('SpecialConditionsService', () => {
  let service: SpecialConditionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpecialConditionsService],
    }).compile();

    service = module.get<SpecialConditionsService>(SpecialConditionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
