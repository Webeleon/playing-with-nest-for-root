import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirstImporterForRootableModule } from './first-importer-for-rootable/first-importer-for-rootable.module';
import { SecondImporterForRootableModule } from './second-importer-for-rootable/second-importer-for-rootable.module';

@Module({
  imports: [FirstImporterForRootableModule, SecondImporterForRootableModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
