import 'phaser';
import { Board } from '../board/board';

export class RectangleFactory {

    static PADDING_TOP = 22;
    static PADDING_LEFT = 20;
    static FIELD_SIZE = 145;
    static OFFSET_COL = 85;
    static OFFSET_ROW = 80;
    static DEFAULT_COLOR = 0xffffff;
    static DEFAULT_ALPHA = 1;

    static get(scene: Phaser.Scene, board: Board, col: number, row: number): any {

        const rectangle = scene.add.rectangle(
            (RectangleFactory.PADDING_LEFT + RectangleFactory.FIELD_SIZE) * col + RectangleFactory.OFFSET_COL,
            (RectangleFactory.PADDING_TOP + RectangleFactory.FIELD_SIZE) * row + RectangleFactory.OFFSET_ROW,
            RectangleFactory.FIELD_SIZE,
            RectangleFactory.FIELD_SIZE,
            RectangleFactory.DEFAULT_COLOR,
            RectangleFactory.DEFAULT_ALPHA);

        rectangle.setInteractive();

        rectangle.on('pointerover', () => {
            if (board.isFieldEmpty(col, row)) {

                rectangle.setFillStyle(board.getCurrentPlayer().color);
                rectangle.setAlpha(0.5);
            }

        });

        rectangle.on('pointerout', () => {
            if (board.isFieldEmpty(col, row)) {

                rectangle.setFillStyle(RectangleFactory.DEFAULT_COLOR);
                rectangle.setAlpha(RectangleFactory.DEFAULT_ALPHA);
            }
        });

        rectangle.on('pointerdown', () => {
            console.log({row, col});
            if (board.isFieldEmpty(col, row)) {
                rectangle.setFillStyle(board.getCurrentPlayer().color);
                const result = board.makePlay(col, row);

                if (result.isFinished()) {
                    if (result.isDraw()) {
                        alert('DRAW');
                        return;
                    }

                    alert(`The winer was ${result.getWinner().name}`);

                    return;
                }

                board.nextPlayer();
            }
        });

        return rectangle;
    }
}
