export class Field {
    col: number;
    row: number;

    value: number = 0x000000;

    constructor(col: number, row: number) {
        this.col = col;
        this.row = row;
    }

    setValue(value: number) {
        this.value = value;
    }
}
