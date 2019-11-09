export class Field {
    static UNITS_WIDTH_COL = 7;
    static UNITS_HEIGHT_ROW = 8;

    private slots = [];

    getSlotValue( row: number, col: number ): any {

        return this.slots[row][col];
    }

    setSlotValue( row: number, col: number, value: any): Field {

        this.slots[row][col] = value;
        return this;
    }

}
