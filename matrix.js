// let m = new Matrix(3,2);


class Matrix {
    constructor(rows, cols) {
      this.rows = rows;
      this.cols = cols;
      this.data = Array(this.rows).fill().map(() => Array(this.cols).fill(0));
    }
  
    copy() {
      let m = new Matrix(this.rows, this.cols);
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {
          m.data[i][j] = this.data[i][j];
        }
      }
      return m;
    }
  
    static fromArray(arr) {
      return new Matrix(arr.length, 1).map((e, i) => arr[i]);
    }
  
    static subtract(a, b) {
      if (a.rows !== b.rows || a.cols !== b.cols) {
        console.log('Columns and Rows of A must match Columns and Rows of B.');
        return;