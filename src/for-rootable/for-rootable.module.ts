import { DynamicModule, Module } from '@nestjs/common';
import { ForRootableService } from './for-rootable.service';
import { configToken, ForRootableConfig } from './forRootable.config';

@Module({
  providers: [ForRootableService],
  exports: [ForRootableService],
})
export class ForRootableModule {
  public static registerApiClient(params: {
    config: ForRootableConfig;
  }): DynamicModule {
    return {
      module: ForRootableModule,
      providers: [
        {
          provide: configToken,
          useValue: params.config,
        },
      ],
    };
  }
}
