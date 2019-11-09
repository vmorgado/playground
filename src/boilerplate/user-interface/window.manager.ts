import {WindowManagerInterface} from './window.manager.interface';
import {injectable} from 'inversify';

@injectable()
export class WindowManager implements WindowManagerInterface {

  private width = 800;
  private height = 600;

  private scene: Phaser.Scene;

  getWidth(): number {

    return this.width;
  }

  getHeight(): number {

    return this.height;
  }

  setScene(scene: Phaser.Scene): WindowManagerInterface {
    this.scene = scene;
    return this;
  }
}
