import {MarbleType} from './marble-type.enum';

export interface MarbleInterface {
  getColor(): number;
  getType(): MarbleType;
  pop(): MarbleInterface;
}
