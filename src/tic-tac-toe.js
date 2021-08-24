class TicTacToe {
    constructor() {
        this.fields =[[null,null,null],[null,null,null],[null,null,null]];
        this.player="x";
    }

    getCurrentPlayerSymbol() {
        return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.fields[rowIndex][columnIndex]){
            return;
        }else{
            this.fields[rowIndex][columnIndex]= this.player;
            this.player = this.player === 'x' ? 'o' : 'x';
        }


    }

     isFinished =() => !(this.getWinner() === null) || this.isDraw() ?  true : false;

    

    getWinner() {
        for (let k = 0; k < 3; k++){
            if(this.fields[k][0] === this.fields[k][1] && this.fields[k][0] === this.fields[k][2]){
                return this.fields[k][0];
            } else if(this.fields[0][k] === this.fields[1][k] && this.fields[0][k] === this.fields[2][k]){
                return this.fields[0][k];
            }
        }
            if(this.fields[0][0] === this.fields[1][1] && this.fields[0][0] === this.fields[2][2]){
                return this.fields[0][0];
            } else if(this.fields[0][2] === this.fields[1][1] && this.fields[0][2] === this.fields[2][0]){
                return this.fields[0][2];
            }
            return null;
    }

    noMoreTurns() {
        for (let k = 0; k < this.fields.length; k++) {
            for (let l = 0; l < this.fields[k].length; l++) {
              if (this.fields[k][l] === null) return false;
            }
          } return true;
    }


    isDraw=()=>(this.noMoreTurns() && this.getWinner() === null) ? true: false;
    

    getFieldValue(rowIndex, colIndex) {
        return this.fields[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
