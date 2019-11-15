import {MarbleInterface} from './marbles/marble.interface';
import {BoardInterface} from './board.interface';

export class TurnResult {
  turn: number;
  poppedMarble: MarbleInterface;
  newMarble: MarbleInterface;
  board: BoardInterface;

  constructor(turn: number, poppedMarble: MarbleInterface, newMarble: MarbleInterface, board: BoardInterface) {
    this.turn = turn;
    this.poppedMarble = poppedMarble;
    this.newMarble = newMarble;
    this.board = board;
  }
}
