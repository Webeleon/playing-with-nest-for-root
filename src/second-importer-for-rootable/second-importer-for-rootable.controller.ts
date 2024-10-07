import { Controller, Get } from '@nestjs/common';
import { ForRootableService } from '../for-rootable/for-rootable.service';

@Controller('second')
export class SecondImporterForRootableController {
  constructor(private readonly service: ForRootableService) {}

  @Get()
  a() {
    return this.service.returnUniqueId();
  }
}
