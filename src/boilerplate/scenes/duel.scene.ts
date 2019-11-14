import {inject, injectable} from 'inversify';
import { INJECTION_TYPES } from '../injection-types';
import { WindowManagerInterface } from '../user-interface/window.manager.interface';
import 'reflect-metadata';
import {SceneInterface} from './scene.interface';
import {SceneConfiguration} from '../model/scene.configuration';
import {duelSceneConfiguration} from '../duel/config';
import {BoardInterface} from '../duel/board.interface';

@injectable()
export class DuelScene extends Phaser.Scene implements SceneInterface {

  private readonly sceneConfiguration: SceneConfiguration;

  constructor(
    @inject(INJECTION_TYPES.MarbleBoard)
    private board: BoardInterface,
    @inject(INJECTION_TYPES.WindowManagerInterface)
    private windowManager: WindowManagerInterface,
  ) {
    super({
      key: 'duel-scene',
    });

    this.sceneConfiguration = duelSceneConfiguration;
  }

  preload() {}

  create() {
    this.windowManager.setScene(this);
    this.windowManager.initialize(this.sceneConfiguration);
    this.board.startGame();
  }

  update(time: number, delta: number) {}
}
