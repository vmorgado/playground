import 'phaser';
import {inject} from 'inversify';
import {INJECTION_TYPES} from './injection-types';
import 'reflect-metadata';
import {applicationContainer} from './application.container';
import {DuelScene} from './scenes/duel.scene';

// game class
export class Game extends Phaser.Game {

  constructor(
    @inject(INJECTION_TYPES.GameConfig)
    private readonly gameConfig: GameConfig,
    ) {
    super(gameConfig);

    const currentScene = applicationContainer.resolve<DuelScene>(DuelScene);
    this.scene.add('duel-scene', currentScene, true);
    console.log(currentScene);
  }

  // step(time: number, delta: number ) {}
}
