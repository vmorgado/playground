import { Board } from '../board/board';
import { Player } from '../entities/player.entity';

export class ResultChecker {

    private finished: boolean = false;
    private draw: boolean = false;
    private winner: Player;

    getWinner(): Player | undefined {

        return this.finished ? this.winner
                             : undefined;
    }

    isDraw() {
        return this.draw;
    }

    isFinished() {
        return this.finished;
    }

    check(board: Board, round: number): ResultChecker {

        const isEmpty = (value) => value === 0x000000;

        const fields = board.fields;

        fields.forEach((rowFields, rowIndex) => {

            // if they are all the same row

            console.log('horizontal');
            console.log(rowFields);
            if (rowFields.every((val, i, arr) => val.value === arr[0].value && !isEmpty(arr[0].value))) {
                this.winner = board.getCurrentPlayer();
                this.finished = true;

                return this;
            }
            if (rowIndex === 0) {
                rowFields.forEach((field, fieldIndex) => {

                    console.log('vertical');
                    if ( !isEmpty(field.value)
                               && field.value === fields[rowIndex + 1][field.col].value
                               && field.value === fields[rowIndex + 2][field.col].value) {

                        this.winner = board.getCurrentPlayer();
                        this.finished = true;

                        return this;
                    }

                });
            }

        });

        const isLeftDiagonal = () =>  !isEmpty(fields[0][0].value)
                                        && fields[0][0].value === fields[1][1].value
                                        && fields[0][0].value === fields[2][2].value;

        const isRightDiagonal = () =>  !isEmpty(fields[0][2].value)
                                        && fields[0][2].value === fields[2][0].value
                                        && fields[0][2].value === fields[1][1].value;

        console.log('diagonal');
        if ( isLeftDiagonal() || isRightDiagonal() ) {

            this.winner = board.getCurrentPlayer();
            this.finished = true;

            return this;
        }

        if (round === 9) {
            this.finished = true;
            this.draw = true;
        }

        return this;
    }
}
