import {MarbleBoard} from '../duel/marble.board';

export class MarbleBoardConfiguration {
  key: string;
  parent: string;
  board: MarbleBoard;

  constructor(key: string, parent: string, board: MarbleBoard) {
    this.key = key;
    this.parent = parent;
    this.board = board;
  }
}
