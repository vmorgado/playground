import {WindowManagerInterface} from './window.manager.interface';
import {injectable} from 'inversify';
import {ColorIdentifier} from '../entity/enums/color-identifier.enum';
import {ContainerFactory} from '../factory/container.factory';
import {duelSceneConfiguration} from '../duel/config';
import {SceneConfiguration} from '../model/scene.configuration';
import {WindowContainerConfiguration} from '../model/window.container.configuratio';

@injectable()
export class WindowManager implements WindowManagerInterface {

  private width = 800;
  private height = 600;

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

  getContainers(): Phaser.GameObjects.Container[] {
    return this.containers;
  }

  setScene(scene: Phaser.Scene): WindowManagerInterface {
    this.scene = scene;
    return this;
  }

  initialize(sceneConfiguration: SceneConfiguration): WindowManagerInterface {
    this.renderGrid();
    this.containersConfiguration = sceneConfiguration.containers;

    const buildContainers = (
      containers: Phaser.GameObjects.Container[],
      containerConfig: any ): Phaser.GameObjects.Container[]  => {
        const builtContainer = ContainerFactory.get(this.scene, containerConfig,);
        containers.push(builtContainer);

        return containers;
    };

    this.containers = this.containersConfiguration.reduce(buildContainers, []);
    return this;
  }

  private renderGrid() {
    this.grid = this.scene.add.grid(1366 / 2, 768 / 2, 1366, 768, 1366 / 16, 768 / 9, ColorIdentifier.WHITE, 1, ColorIdentifier.BLACK, 1);
  }
}
