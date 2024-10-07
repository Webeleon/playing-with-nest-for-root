import { Test, TestingModule } from '@nestjs/testing';
import { FirstImporterForRootableController } from './first-importer-for-rootable.controller';

describe('FirstImporterForRootableController', () => {
  let controller: FirstImporterForRootableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FirstImporterForRootableController],
    }).compile();

    controller = module.get<FirstImporterForRootableController>(FirstImporterForRootableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
