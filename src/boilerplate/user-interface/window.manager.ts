import {WindowManagerInterface} from './window.manager.interface';
import {injectable} from 'inversify';
import {ColorIdentifier} from '../entity/enums/color-identifier.enum';
import {ContainerFactory} from '../factory/container.factory';
import {SceneConfiguration} from '../model/scene.configuration';
import {WindowContainerConfiguration} from '../model/window.container.configuratio';
import {MarbleBoardConfiguration} from '../model/marble-board.configuration';

@injectable()
export class WindowManager implements WindowManagerInterface {
  static HORIZONTAL_TILES = 16;
  static VERTICAL_TILES = 9;
  static TILE_WIDTH = (width: number) => width / WindowManager.HORIZONTAL_TILES;
  static TILE_HEIGHT = (height: number) => height / WindowManager.VERTICAL_TILES;

  private width = 1366;
  private height = 768;

  private grid: Phaser.GameObjects.Grid;

  private scene: Phaser.Scene;

  private containersConfiguration: WindowContainerConfiguration[] = [];
  private containers: Phaser.GameObjects.Container[] = [];


  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }

  public getContainers(): Phaser.GameObjects.Container[] {
    return this.containers;
  }

  setScene(scene: Phaser.Scene): WindowManagerInterface {
    this.scene = scene;
    return this;
  }

  initialize(sceneConfiguration: SceneConfiguration): WindowManagerInterface {
    this.containersConfiguration = sceneConfiguration.containers;

    const buildContainers = (
      containers: Phaser.GameObjects.Container[],
      containerConfig: any ): Phaser.GameObjects.Container[]  => {
        const builtContainer = ContainerFactory.get(this.scene, containerConfig, this);
        containers.push(builtContainer);

        return containers;
    };
    this.containers = this.containersConfiguration.reduce(buildContainers, []);
    return this;
  }

  build( configuration: any ): any {
    switch (true) {
      case configuration instanceof SceneConfiguration:
        break;
      case configuration instanceof WindowContainerConfiguration:
        const buildContainers = (
          containers: Phaser.GameObjects.Container[],
          containerConfig: any ): Phaser.GameObjects.Container[]  => {
          const builtContainer = ContainerFactory.get(this.scene, containerConfig, this);
          containers.push(builtContainer);

          return containers;
        };

        return this.containersConfiguration.reduce(buildContainers, []);

      case configuration instanceof MarbleBoardConfiguration:

        break;
    }

    return undefined;
  }
}
