import {MarbleInterface} from '../duel/marbles/marble.interface';

export class MarbleBoardConfiguration {
  key: string;
  parent: string;
  grid: {};
  marbleSpots: {[key: string]: MarbleInterface };
}
