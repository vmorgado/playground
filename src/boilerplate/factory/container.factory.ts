import {WindowContainerConfiguration} from '../model/window.container.configuratio';
import {WindowManagerInterface} from '../user-interface/window.manager.interface';
import {WindowManager} from '../user-interface/window.manager';

export class ContainerFactory {

    static get( scene: Phaser.Scene,
                containerConfig: WindowContainerConfiguration,
                windowManager: WindowManagerInterface,
    ): Phaser.GameObjects.Container {

        const windowConfig = { width: windowManager.getWidth(), height: windowManager.getHeight() };

        const containerWidth = WindowManager.TILE_WIDTH(windowConfig.width) * containerConfig.X_TILES;
        const containerHeight = WindowManager.TILE_HEIGHT(windowConfig.height) * containerConfig.Y_TILES;
        const horizontalPadding = WindowManager.TILE_WIDTH(windowConfig.width) * containerConfig.START_X + containerWidth / 2;
        const verticalPadding = containerHeight / 2;

        const containerBackground = scene.add.rectangle(
          horizontalPadding,
          verticalPadding,
          containerWidth,
          containerHeight,
          containerConfig.backgroundColor,
          1);
        containerBackground.setFillStyle(containerConfig.backgroundColor, 1);

        const container = scene.add.container( 0, 0);
        // container.add(containerBackground);

        console.log('FROOOOOOODOOO');

        container.setName(containerConfig.key);
        // container.setDisplaySize(containerWidth, containerHeight);
        // container.setX(horizontalPadding);
        // container.setY(verticalPadding);´

        return container;
    }
}
