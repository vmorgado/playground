import {DictionaryInterface} from './dictionary.interface';
import {injectable} from 'inversify';

@injectable()
export class Dictionary implements DictionaryInterface {
  [key: string]: any;

  constructor(props: {[key: string]: any }) {
    Object.keys(props).forEach(
      (key: string) => {
        this[key] = props[key];
      });
  }

  get(key: string): any {
    return this[key];
  }

  set(key: string, value: any): Dictionary {
    this[key] = value;

    return this;
  }
}
