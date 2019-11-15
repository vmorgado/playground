import {MarbleType} from './marble-type.enum';
import {MarbleInterface} from './marble.interface';

export class FireMarble implements MarbleInterface {
  static COLOR =  0xff4040;
  private type = MarbleType.FIRE;

  getType(): MarbleType {
    return this.type;
  }

  getColor(): number {
    return FireMarble.COLOR;
  }

  pop(): FireMarble {

    // some stuff to do
    return this;
  }
}
