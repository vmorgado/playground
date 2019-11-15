import {WindowContainerConfiguration} from '../model/window.container.configuration';
import {WindowManagerInterface} from '../user-interface/window.manager.interface';
import {WindowManager} from '../user-interface/window.manager';
import {SceneInterface} from '../scenes/scene.interface';

export class ContainerFactory {

    static get( scene: SceneInterface,
                windowManager: WindowManagerInterface,
                containerConfig: WindowContainerConfiguration,
    ): Phaser.GameObjects.Container {

        const windowConfig = { width: windowManager.getWidth(), height: windowManager.getHeight() };

        const containerWidth = WindowManager.TILE_WIDTH(windowConfig.width) * containerConfig.X_TILES;
        const containerHeight = WindowManager.TILE_HEIGHT(windowConfig.height) * containerConfig.Y_TILES;
        const horizontalPadding = WindowManager.TILE_WIDTH(windowConfig.width) * containerConfig.START_X + containerWidth / 2;
        const verticalPadding = containerHeight / 2;
        const container = scene.add.container(horizontalPadding, verticalPadding);

        const containerBackground = scene.add.rectangle(
          0,
          0,
          containerWidth,
          containerHeight,
          containerConfig.backgroundColor,
          1);
        containerBackground.setFillStyle(containerConfig.backgroundColor, 1);
        container.add(containerBackground);

        container.setName(containerConfig.key);
        // container.setDisplaySize(containerWidth, containerHeight);
        // container.setX(horizontalPadding);
        // container.setY(verticalPadding);´

        return container;
    }
}
