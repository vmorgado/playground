import { Field } from './Field';
import { Player } from '../entities/player.entity';
import { ResultChecker } from '../rules/result.checker';

export class Board {

    private currentPlayer: Player = null;
    private history = [];
    public fields: Field[][] = [];
    private round = 1;
    private resultChecker: ResultChecker;

    constructor(
        private players: Player[] = [],
    ) {
        this.currentPlayer = players[0];
        this.resultChecker = new ResultChecker();
    }

    isFieldEmpty(col: number, row: number) {
        return this.fields[row][col].value === 0x000000;
    }

    makePlay( col: number, row: number): ResultChecker {

        if (this.fields[row][col].value !== 0x000000 ) {

            return this.resultChecker.check(this, this.round);
        }

        this.fields[row][col].setValue(this.currentPlayer.color);

        this.history.push(`Round ${this.round}: ${this.currentPlayer} played on : ${row} . ${col}`);

        return this.resultChecker.check(this, this.round);
    }

    nextPlayer() {
        this.currentPlayer = this.currentPlayer === this.players[0]
                                                  ? this.players[1]
                                                  : this.players[0];
    }

    getCurrentPlayer(): Player {
        return this.currentPlayer;
    }
}
