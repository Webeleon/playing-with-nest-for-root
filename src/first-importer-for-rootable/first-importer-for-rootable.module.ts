import { Module } from '@nestjs/common';
import { ForRootableModule } from '../for-rootable/for-rootable.module';
import { FirstImporterForRootableController } from './first-importer-for-rootable.controller';

@Module({
  imports: [
    ForRootableModule.registerApiClient({
      config: {
        uniqueId: 'first-importer-for-root',
      },
    }),
  ],
  controllers: [FirstImporterForRootableController],
})
export class FirstImporterForRootableModule {}
