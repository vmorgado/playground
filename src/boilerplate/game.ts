import 'phaser';
import {Container, inject, injectable} from 'inversify';
import {INJECTION_TYPES} from './injection-types';
import 'reflect-metadata';

// game class
export class Game extends Phaser.Game {

  constructor(
    @inject(INJECTION_TYPES.GameConfig)
    private readonly gameConfig: GameConfig,
    ) {
    super(gameConfig);
  }

  // step(time: number, delta: number ) {}
}
