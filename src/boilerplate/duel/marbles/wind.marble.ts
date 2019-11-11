import {MarbleInterface} from './marble.interface';
import {MarbleType} from './marble-type.enum';

export class WindMarble implements MarbleInterface {
  static COLOR = 0xf7fff7;
  private type = MarbleType.WIND;

  getType(): MarbleType {
    return this.type;
  }

  pop(): WindMarble {

    // some stuff to do
    return this;
  }
}
