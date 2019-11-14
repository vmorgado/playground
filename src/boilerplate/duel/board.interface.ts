export interface BoardInterface {

  startGame(): BoardInterface;
  makePlay( ...args: any): BoardInterface;
}
