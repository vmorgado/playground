import {decorate, inject, injectable} from 'inversify';
import {INJECTION_TYPES} from '../injection-types';
import {WindowManagerInterface} from '../user-interface/window.manager.interface';
import {SceneInterface} from './scene.interface';

@injectable()
export class MainScene extends Phaser.Scene implements SceneInterface {

  constructor(
    @inject(INJECTION_TYPES.WindowManagerInterface)
    private windowManager: WindowManagerInterface,
    ) {
    super({
      key: 'main-scene',
    });
  }

  preload() {}

  create() {}

  update(time: number, delta: number) {}
}
