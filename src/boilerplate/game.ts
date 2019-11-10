import 'phaser';
import {Container} from 'inversify';

// game class
export class Game extends Phaser.Game {

  constructor(
    private readonly gameConfig: GameConfig,
    private readonly applicationContainer: Container,
    ) {
    super(gameConfig);
  }

  // step(time: number, delta: number ) {}
}
