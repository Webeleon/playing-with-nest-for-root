import { Test, TestingModule } from '@nestjs/testing';
import { SecondImporterForRootableController } from './second-importer-for-rootable.controller';

describe('SecondImporterForRootableController', () => {
  let controller: SecondImporterForRootableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SecondImporterForRootableController],
    }).compile();

    controller = module.get<SecondImporterForRootableController>(SecondImporterForRootableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
