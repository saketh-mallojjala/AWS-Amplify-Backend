
import { ModelInit, MutableModel, PersistentModelConstructor } from '@aws-amplify/datastore';

export declare class Email {
  readonly id: string;
  readonly address: string;
  constructor(init: ModelInit<Email>);
}

export declare type _Email = {
  readonly id: string;
  readonly address: string;
};
