const body = document.querySelector('body');
let id = 1;
let step = 0;

class Game {
    constructor(size) {
        this.gameSize = size;

        this.createGrid();
        this.createCells();
    }

    createGrid() {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.style.width = this.gameSize * 150 + 'px';
        grid.style.height = this.gameSize * 150 + 'px';
        grid.style.margin = '0 auto';
        grid.style.marginTop = '150px';
        grid.style.display = 'flex';
        grid.style.flexWrap = 'wrap';

        body.append(grid);
    }

    createCells() {
        const grid = document.querySelector('.grid');

        for (let row = 0; row < this.gameSize * this.gameSize; row++) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.id = `${id}`;
            id++;

            grid.append(cell);
        }
    }

    choseAWinner(){

    }

    makeAStep(cell) {
        if (step === 0 & (cell.className !== 'cell x' & cell.className !== 'cell y')) {
            cell.style.backgroundColor = 'red';
            step = 1;
            cell.classList.add('x');
        }else if (step === 1 & (cell.className !== 'cell x' & cell.className !== 'cell y')) {
            cell.style.backgroundColor = 'blue';
            step = 0;
            cell.classList.add('y');
        }
    }
}

const newGame = new Game(3);

const cells = document.querySelectorAll('.cell');

for (let item of cells) {
    item.addEventListener('click', function (event) {
        newGame.makeAStep(item);
    });
}