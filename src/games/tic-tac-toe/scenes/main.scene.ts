import { Board } from '../board/board';
import { Player } from '../entities/player.entity';
import { Field } from '../board/Field';
import { RectangleFactory } from '../factory/rectangle.factory';

export class MainScene extends Phaser.Scene {

  private background: Phaser.GameObjects.Image;

  private board: Board;
  private players: Player[] = [];

  constructor() {
    super({
      key: 'main-scene',
    });

    this.players.push(new Player(0, 'Red', 0xff0000));
    this.players.push(new Player(1, 'Blue', 0x0000ff));
  }

  preload() {
    console.log('scene-preload');
    this.load.image('grid', './src/boilerplate/assets/store/grid.gif');
  }

  create() {

    console.log('scene-create');
    this.background = this.add.image(250, 250, 'grid');

    this.board = new Board(this.players);
    const rectangles: Phaser.GameObjects.Rectangle[] = [];

    for (let row = 0; row <= 2; row ++ ) {

      const rowFields: Field[] = [];

      for (let col = 0; col <= 2; col ++) {

        const field = new Field(col, row);
        const rectangle = RectangleFactory.get(this, this.board, col, row);
        rectangles.push(rectangle);
        rowFields.push(field);
      }

      console.log(rowFields);
      this.board.fields.push(rowFields);
    }

  }

  update(time: number, delta: number) {

    // console.log(`Scena - ${time} - ${delta}`);
  }
}
