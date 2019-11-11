import 'phaser';
import { InputManager } from './input/input.manager';

// game class
export class Game extends Phaser.Game {

  private inputManager: Phaser.Input.InputManager;

  constructor(
    config: GameConfig,

  ) {
    console.log('game built');
    super(config);

    this.inputManager = new InputManager(this, {});
  }

}
