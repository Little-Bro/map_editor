let saveButton, loadButton;

let dim; // grid dimension
let grid; // grid of cells
let textGrid; // 0 = nothting, # = wall

// loading map file
function preload() {
  textGrid = loadStrings('./blank_map.txt', format);
}

// generating text grid from text file
function format(array) {
  for (let i = 0; i < 20; i++) {
    textGrid[i] = array[i].split(",");
  }
  return textGrid;
}

function setup() {
  createCanvas(401, 401);
  dim = 20;

  saveButton = createButton('save map');
  loadButton = createButton('load map');

  // generating grid
  grid = make2Darray(dim, dim);
  for (let i = 0; i < dim; i++) {
    for (let j = 0; j < dim; j++) {
      grid[i][j] = new Cell(i, j);
    }
  }
}

function draw() {
  // drawing the cells
  for (let i = 0; i < dim; i++) {
    for (let j = 0; j < dim; j++) {
      grid[i][j].show(textGrid);
    }
  }

  saveButton.mousePressed(() => {
    let fileName = prompt('enter file name');
    save(textGrid, `${fileName}.txt`);
  });

  loadButton.mousePressed(() => {
    let fileName = prompt('enter map name');
    textGrid = loadStrings(`${fileName}.txt`, format);
  });
}

function make2Darray(cols, rows) {
  let tab = new Array(cols);
  for (let i = 0; i < tab.length; i++) {
    tab[i] = new Array(rows);
  }
  return tab;
}


function mouseDragged() {
  drawOnGrid();
}

function mousePressed() {
  drawOnGrid();
}

function drawOnGrid() {
  for (let i = 0; i < dim; i++) {
    for (let j = 0; j < dim; j++) {
      if (mouseX > grid[i][j].x && mouseX < grid[i][j].x + grid[i][j].size) {
        if (mouseY > grid[i][j].y && mouseY < grid[i][j].y + grid[i][j].size) {
          if (mouseButton == LEFT)
            textGrid[j][i] = '#';
          else if (mouseButton == RIGHT)
            textGrid[j][i] = '0';
        }
      }
    }
  }
}