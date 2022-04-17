import { Test, TestingModule } from '@nestjs/testing';
import { SuetaController } from './sueta.controller';

describe('SuetaController', () => {
  let controller: SuetaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuetaController],
    }).compile();

    controller = module.get<SuetaController>(SuetaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
