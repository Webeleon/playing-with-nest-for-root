import { Test, TestingModule } from '@nestjs/testing';
import { ForRootableService } from './for-rootable.service';

describe('ForRootableService', () => {
  let service: ForRootableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ForRootableService],
    }).compile();

    service = module.get<ForRootableService>(ForRootableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
