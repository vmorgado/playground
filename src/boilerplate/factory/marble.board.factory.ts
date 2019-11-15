import {MarbleBoard} from '../duel/marble.board';
import {MarbleInterface} from '../duel/marbles/marble.interface';
import {MarbleBoardConfiguration} from '../model/marble-board.configuration';
import {SceneInterface} from '../scenes/scene.interface';
import {WindowManagerInterface} from '../user-interface/window.manager.interface';

export class MarbleBoardFactory {
  static get(
    scene: SceneInterface,
    windowManager: WindowManagerInterface,
    marbleBoardConfiguration: MarbleBoardConfiguration) {
    const parentContainer = windowManager.getContainer(marbleBoardConfiguration.parent);

    const cellSize = 700 / MarbleBoard.UNITS_HEIGHT_ROW;

    const boardMap = marbleBoardConfiguration.board.getBoardMap();
    Object.keys(boardMap).map((key: string) => {
      const position = MarbleBoard.getPositionByKey(key);
      const startingMarble: MarbleInterface = marbleBoardConfiguration.board.get(key);

      const posX = -cellSize * position.col + cellSize / 2 * (MarbleBoard.UNITS_WIDTH_COL - 1);
      const posY = -cellSize * position.row + cellSize / 2 * (MarbleBoard.UNITS_HEIGHT_ROW - 1);

      const rectangle = scene.add.rectangle(
        posX,
        posY,
        cellSize,
        cellSize,
        startingMarble.getColor(),
        1);

      rectangle.setInteractive();

      rectangle.on('pointerover', (event) => {
        rectangle.setAlpha(0.4);

      });

      rectangle.on('pointerout', (event) => {
        rectangle.setAlpha(1);
      });

      rectangle.on('pointerdown', (event) => {
        const turnResult = marbleBoardConfiguration.board.makePlay(key);
        rectangle.setFillStyle(turnResult.newMarble.getColor());

      });

      parentContainer.add(rectangle);
    });
  }
}
