import {inject, injectable} from 'inversify';
import { ColorIdentifier } from '../entity/enums/color-identifier.enum';
import { INJECTION_TYPES } from '../injection-types';
import { WindowManagerInterface } from '../user-interface/window.manager.interface';
import 'reflect-metadata';
import {SceneInterface} from './scene.interface';

@injectable()
export class DuelScene extends Phaser.Scene implements SceneInterface{

  constructor(
    @inject(INJECTION_TYPES.WindowManagerInterface)
    private windowManager: WindowManagerInterface,
  ) {
    super({
      key: 'duel-scene',
    });

    // this.windowManager.setScene(this);
  }

  preload() {
    console.log('scene - preload');
    // load the window intergace
  }

  create() {
    console.log('scene - create');
    const grid = this.add.grid(0, 0, 1366, 768, 1366 / 16, 768 / 9, ColorIdentifier.WHITE, 1, ColorIdentifier.BLACK, 1);
  }

  update(time: number, delta: number) {
    console.log('scene - update');
  }
}
