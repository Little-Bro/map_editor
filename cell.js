class Cell {
  constructor(indexI, indexJ) {
    this.size = 20;
    this.i = indexI;
    this.j = indexJ;
    this.x = this.i * this.size;
    this.y = this.j * this.size;
  }

  show(tGrid) {
    let textSymbol = tGrid[this.j][this.i];
    if (textSymbol == "0") {
      fill(255);
    } else if (textSymbol == "#") {
      fill(0);
    }
    rect(this.x, this.y, this.size, this.size);
  }
}