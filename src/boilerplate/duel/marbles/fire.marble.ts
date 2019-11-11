import {MarbleType} from './marble-type.enum';
import {MarbleInterface} from './marble.interface';

export class FireMarble implements MarbleInterface {
  static COLOR =  0xffe66d;
  private type = MarbleType.FIRE;

  getType(): MarbleType {
    return this.type;
  }

  pop(): FireMarble {

    // some stuff to do
    return this;
  }
}
