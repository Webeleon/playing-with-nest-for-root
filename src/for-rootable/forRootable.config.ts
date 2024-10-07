import { Inject } from '@nestjs/common';

export interface ForRootableConfig {
  uniqueId: string;
}

export const configToken = Symbol('for-rootable-config');

export const InjectForRootableConfg = () => Inject(configToken);
