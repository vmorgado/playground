import {MarbleType} from './marble-type.enum';
import {MarbleInterface} from './marble.interface';

export class WaterMarble implements MarbleInterface {
  static COLOR = 0x4ecdc4;
  private type = MarbleType.WATER;


  getType(): MarbleType {
    return this.type;
  }
  getColor(): number {
    return WaterMarble.COLOR;
  }

  pop(): WaterMarble {

    // some stuff to do
    return this;
  }

}
