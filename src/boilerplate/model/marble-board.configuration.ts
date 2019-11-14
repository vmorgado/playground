import {MarbleInterface} from '../duel/marbles/marble.interface';

export class MarbleBoardConfiguration {
  key: string;
  parent: string;
  grid: { key: string, rows: number, col: number };
  marbleSpots: {[key: string]: MarbleInterface };
}
