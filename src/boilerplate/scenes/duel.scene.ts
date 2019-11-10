import {inject, injectable} from 'inversify';
import { INJECTION_TYPES } from '../injection-types';
import { WindowManagerInterface } from '../user-interface/window.manager.interface';
import 'reflect-metadata';
import {SceneInterface} from './scene.interface';
import {SceneConfiguration} from '../model/scene.configuration';
import {duelSceneConfiguration} from '../duel/config';

@injectable()
export class DuelScene extends Phaser.Scene implements SceneInterface {

  private sceneConfiguration: SceneConfiguration;

  constructor(
    @inject(INJECTION_TYPES.WindowManagerInterface)
    private windowManager: WindowManagerInterface,
  ) {
    super({
      key: 'duel-scene',
    });

    this.sceneConfiguration = duelSceneConfiguration;

    this.windowManager.setScene(this);
  }

  preload() {
    console.log('scene - preload');
    // load the window intergace
  }

  create() {
    console.log('Window Manager will now take control.');

    this.windowManager.initialize(this.sceneConfiguration);
  }

  update(time: number, delta: number) {
    console.log('scene - update');
  }
}
