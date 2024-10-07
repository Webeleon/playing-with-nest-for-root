import { Inject, Injectable } from '@nestjs/common';
import {
  configToken,
  ForRootableConfig,
  InjectForRootableConfg,
} from './forRootable.config';

@Injectable()
export class ForRootableService {
  uuid: string;

  constructor(@Inject(configToken) private readonly config: ForRootableConfig) {
    console.log('config', config);
  }

  returnUniqueId() {
    return this.config;
  }
}
