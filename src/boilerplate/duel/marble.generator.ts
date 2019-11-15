import {MarbleInterface} from './marbles/marble.interface';
import 'phaser';
import {GeneratorInterface} from './generator.interface';
import {inject, injectable} from 'inversify';
import {WaterMarble} from './marbles/water.marble';
import {WindMarble} from './marbles/wind.marble';
import {EarthMarble} from './marbles/earth.marble';
import {FireMarble} from './marbles/fire.marble';
import {INJECTION_TYPES} from '../injection-types';

@injectable()
export class MarbleGenerator implements GeneratorInterface {

  private buffer: MarbleInterface[] = [];
  private readonly marbleTypeArray = [];

  constructor(
    @inject(INJECTION_TYPES.RandomDataGenerator)
    private randomDataGenerator: Phaser.Math.RandomDataGenerator,
  ) {

    this.marbleTypeArray = [new WaterMarble(), new WindMarble(), new EarthMarble(), new FireMarble()];
    this.fillBuffer(500);
  }

  generate( quantity: number): MarbleInterface[] {

    if ( this.buffer.length < 100) {
      this.fillBuffer( quantity * 2 );
    }

    const shuffled = this.randomDataGenerator.shuffle(this.buffer);
    return shuffled.slice(0, quantity);
  }

  private fillBuffer(quantity: number) {
    let marble = 0;

    while ( marble < quantity ) {
      this.buffer.push(this.randomDataGenerator.pick(this.marbleTypeArray));

      marble++;
    }
  }
}
