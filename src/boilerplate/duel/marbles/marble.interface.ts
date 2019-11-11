import {MarbleType} from './marble-type.enum';

export interface MarbleInterface {

  getType(): MarbleType;
  pop(): MarbleInterface;
}
