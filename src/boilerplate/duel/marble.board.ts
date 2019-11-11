import {MarbleGenerator} from './marble.generator';
import {inject, injectable} from 'inversify';
import {BoardInterface} from './board.interface';
import {INJECTION_TYPES} from '../injection-types';
import {MarbleInterface} from './marbles/marble.interface';
import {WindowManagerInterface} from '../user-interface/window.manager.interface';

// key =  row x col
@injectable()
export class MarbleBoard implements BoardInterface {
    static UNITS_WIDTH_COL = 7;
    static UNITS_HEIGHT_ROW = 8;

    private board: {[key: string]: MarbleInterface};

    constructor(
      @inject(INJECTION_TYPES.MarbleGenerator)
      private readonly marbleGenerator: MarbleGenerator,
      @inject(INJECTION_TYPES.WindowManagerInterface)
      private readonly windowManager: WindowManagerInterface,
    ) {
        this.buildBoard();
    }

    public startGame() {
        const renderingCoinfig = this.buildBoard();
        const renderedBoard = this.windowManager.build(renderingCoinfig)
    }

    private respawnMarble(key: string): MarbleInterface {
        const marble = this.marbleGenerator.generate(1)[0];
        this.board[key] = marble;
        return marble;
    }

    makePlay(key): MarbleBoard {

        const poppedMarble = this.popMarble(key);
        const newMarble = this.respawnMarble(key);

        return this;
    }

    popMarble(key: string): MarbleInterface {
        return this.board[key];
    }

    private getPositionByKey(key: string) {
        const splitted = key.split('-');
        return { row: splitted[0], col: splitted[1] };
    }

    private buildBoard() {
        this.board = {};
        let row = 0;
        let col = 0;

        const marbleSpots = [];

        while ( row < MarbleBoard.UNITS_HEIGHT_ROW ) {
            while ( col < MarbleBoard.UNITS_WIDTH_COL ) {
                const key = `${row}-${col}`;
                const marble = this.marbleGenerator.generate(1)[0];

                this.board[key] = marble;
                marbleSpots.push({
                    key,
                    position: this.getPositionByKey(key),
                    marble,
                });

                col++;
            }

            row++;
        }

        return {
            key: 'marble-board',
            parent: '',
            grid: {},
            marbleSpots,
        };
    }
}
