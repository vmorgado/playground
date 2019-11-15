import {SceneConfiguration} from '../model/scene.configuration';
import {SceneInterface} from '../scenes/scene.interface';

export interface WindowManagerInterface {
  getWidth(): number;
  getHeight(): number;
  setScene(scene: SceneInterface): WindowManagerInterface;
  initialize(sceneConfiguration: SceneConfiguration): WindowManagerInterface;
  getContainers(): Phaser.GameObjects.Container[];
  getContainer(key: string): Phaser.GameObjects.Container;
  build( configuration: any ): any;
}
