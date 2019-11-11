import {MarbleInterface} from './marbles/marble.interface';
import 'phaser';
import {MarbleType} from './marbles/marble-type.enum';
import {GeneratorInterface} from './generator.interface';
import {inject, injectable} from 'inversify';

@injectable()
export class MarbleGenerator implements GeneratorInterface {

  private buffer: MarbleInterface[] = [];
  private marbleTypeArray = [];

  constructor(
    @inject('RANDOM_GENERATOR')
    private randomDataGenerator: Phaser.Math.RandomDataGenerator,
  ) {

    this.marbleTypeArray = [MarbleType.WATER, MarbleType.WIND, MarbleType.EARTH, MarbleType.FIRE];
    this.fillBuffer(500);
  }

  generate( quantity: number): MarbleInterface[] {

    if ( this.buffer.length < 100) {
      this.fillBuffer( quantity * 2 );
    }
    return this.randomDataGenerator.shuffle(this.buffer.slice(0, quantity));
  }

  private fillBuffer(quantity: number) {
    let marble = 0;

    while ( marble < quantity ) {

      const shuffleMe = this.randomDataGenerator.shuffle(this.marbleTypeArray);
      this.buffer.push(this.randomDataGenerator.pick(shuffleMe));

      marble++;
    }

    console.log(this.buffer);
  }
}
