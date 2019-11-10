import {WindowContainerConfiguration} from '../model/window.container.configuratio';
import {WindowManagerInterface} from '../user-interface/window.manager.interface';

export class ContainerFactory {

    static get( scene: Phaser.Scene, containerConfig: WindowContainerConfiguration, windowManager: WindowManagerInterface ): Phaser.GameObjects.Container {

        const windowConfig = { width: windowManager,  }
        const container = scene.add.container( containerConfig.START_X, containerConfig.START_Y);

        container.setDisplaySize(windowConfig * 3 / 16, 10);
        // container.setName(containerConfig.)

        return container;
    }
}
