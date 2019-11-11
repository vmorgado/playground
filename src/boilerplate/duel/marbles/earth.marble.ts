import {MarbleType} from './marble-type.enum';
import {MarbleInterface} from './marble.interface';

export class EarthMarble implements MarbleInterface {

  static COLOR =  0xffe66d;
  private type = MarbleType.EARTH;

  getType(): MarbleType {
    return this.type;
  }

  pop(): EarthMarble {

    // some stuff to do
    return this;
  }
}
