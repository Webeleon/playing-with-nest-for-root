import { Module } from '@nestjs/common';
import { ForRootableModule } from '../for-rootable/for-rootable.module';
import { SecondImporterForRootableController } from './second-importer-for-rootable.controller';

@Module({
  imports: [
    ForRootableModule.registerApiClient({
      config: {
        uniqueId: 'second-importer-for-root',
      },
    }),
  ],
  controllers: [SecondImporterForRootableController],
})
export class SecondImporterForRootableModule {}
