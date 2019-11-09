import 'phaser';
import {Container} from 'inversify';
import {DuelScene} from './scenes/duel.scene';
import {INJECTION_TYPES} from './injection-types';

// game class
export class Game extends Phaser.Game {

  constructor(
    private readonly gameConfig: GameConfig,
    private readonly applicationContainer: Container,
    ) {
    super(gameConfig);

    const windowMannager = {
      width: gameConfig.width,
      height: gameConfig.height,
    };

    // this.scene.bringToTop(applicationContainer.get<DuelScene>(INJECTION_TYPES.DuelScene));
  }

  // step(time: number, delta: number ) {}
}
