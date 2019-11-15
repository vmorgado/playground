import {MarbleGenerator} from './marble.generator';
import {inject, injectable} from 'inversify';
import {BoardInterface} from './board.interface';
import {INJECTION_TYPES} from '../injection-types';
import {MarbleInterface} from './marbles/marble.interface';
import {WindowManagerInterface} from '../user-interface/window.manager.interface';
import {MarbleBoardConfiguration} from '../model/marble-board.configuration';
import {TurnResult} from './turn.result';

// key =  row x col
@injectable()
export class MarbleBoard implements BoardInterface {
    static UNITS_WIDTH_COL = 7;
    static UNITS_HEIGHT_ROW = 8;

    private turn = 0;

    private boardMap: {[key: string]: MarbleInterface};
    private windowManager: WindowManagerInterface;

    constructor(
      @inject(INJECTION_TYPES.MarbleGenerator)
      private readonly marbleGenerator: MarbleGenerator,
    ) {}

    public get(key: string): MarbleInterface {
        return this.boardMap[key];
    }

    public getBoardMap(): {[key: string]: MarbleInterface} {
        return this.boardMap;
    }

    public setWindowManager(windowManager: WindowManagerInterface): MarbleBoard {
        this.windowManager = windowManager;
        return this;
    }

    public startGame(): MarbleBoard {
        const renderingConfig = this.buildBoard();
        const renderedBoard = this.windowManager.build(renderingConfig);
        return this;
    }

    private respawnMarble(key: string): MarbleInterface {
        const marble = this.marbleGenerator.generate(1)[0];
        this.boardMap[key] = marble;
        return marble;
    }

    public makePlay(key: string): TurnResult {
        this.turn++;
        const poppedMarble = this.popMarble(key);
        const newMarble = this.respawnMarble(key);
        this.boardMap[key] = newMarble;
        return new TurnResult(this.turn, poppedMarble, newMarble, this);
    }

    private popMarble(key: string): MarbleInterface {
        return this.boardMap[key];
    }

    static getPositionByKey(key: string): { row: number, col: number} {
        const split = key.split('-');
        return { row: Number(split[0]), col: Number(split[1]) };
    }

    private buildBoard(): MarbleBoardConfiguration {
        this.boardMap = {};
        const marbleSpots = [];
        let row = 0;

        while ( row < MarbleBoard.UNITS_HEIGHT_ROW ) {
            let col = 0;
            while ( col < MarbleBoard.UNITS_WIDTH_COL ) {
                const key = `${row}-${col}`;
                const marble = this.marbleGenerator.generate(1)[0];

                this.boardMap[key] = marble;
                col++;
            }

            row++;
        }

        return new MarbleBoardConfiguration( 'marble-boardMap', 'container-main',  this);
    }
}
