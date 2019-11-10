import {SceneConfiguration} from '../model/scene.configuration';

export interface WindowManagerInterface {
  getWidth(): number;
  getHeight(): number;
  setScene(scene: Phaser.Scene): WindowManagerInterface;
  initialize(sceneConfiguration: SceneConfiguration): WindowManagerInterface;
}
