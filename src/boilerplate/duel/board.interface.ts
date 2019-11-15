import {WindowManagerInterface} from '../user-interface/window.manager.interface';
import {TurnResult} from './turn.result';

export interface BoardInterface {
  get(key: string): any;
  getBoardMap(): {[key: string]: any};
  setWindowManager(windowManager: WindowManagerInterface): BoardInterface;
  startGame(): BoardInterface;
  makePlay( ...args: any): TurnResult;
}
