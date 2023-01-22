// Input: 
// 1. first line of input is upper-right coordinates; lower-left coordinates are 0,0
// 2. rover's position (0, 0, N)
// 3. series of instructions telling the rover where to move (L, R, M)

// *Each rover will be finished sequentially, which means that the second rover won't start to move until the first one has finished moving.

// Output (print): final coordinates and heading/direction

// Test Input:
// 5 5 <-upper-right coordinates 

// 1 2 N <- R1 initial position
// LMLMLMLMM <- instructions for R1

// 3 3 E <- R2 initial position
// MMRMMRMRRM <- instructions for R2

// Expected Output:
// 1 3 N
// 5 1 E

class Plateau {
    constructor(boundX, boundY) {
        this.boundX = boundX;
        this.boundY = boundY;
    }
}

class Rover {
    constructor(plateau, x, y, direction) {
        this.plateau = plateau;
        this.x = x;
        this.y = y;
        this.direction = direction;
    }

    moveRover(input) {
        const roverActions = input.split("");
        roverActions.forEach((action) => {
            if (action === 'M') {
                this.move();
            } else if (action === 'L') {
                this.left();
            } else if (action === 'R') {
                this.right();
            }
        })
    }
    move() {
        // if this.x or this.y > 5, return this.x or this.y // apply onto 'N' and 'E'
        // if this.x or this.y === 0, return this.x or this.y // apply to 'S' and 'W'
        // M - move forward one grid point and maintain same direction
        if ((this.direction === 'N') && (this.y < this.plateau.boundY)) {
            this.y = this.y + 1
        } else if ((this.direction === 'S') && (this.y > 0)){
            this.y = this.y - 1
        } else if ((this.direction === 'E') && (this.x < this.plateau.boundX)) {
            this.x = this.x + 1
        } else if ((this.direction === 'W') && (this.y > 0)) {
            this.x = this.x - 1
        }
    }
    left() {
        // L - spin 90 deg left
        if (this.direction === 'N') {
            this.direction = 'W'
        } else if (this.direction === 'W') {
            this.direction = 'S'
        } else if (this.direction === 'S') {
            this.direction = 'E'
        } else if (this.direction === 'E') {
            this.direction = 'N'
        }
    }
    right() {
        // R - spin 90 deg right
        if (this.direction === 'N') {
            this.direction = 'E'
        } else if (this.direction === 'E') {
            this.direction = 'S'
        } else if (this.direction === 'S') {
            this.direction = 'W'
        } else if (this.direction === 'W') {
            this.direction = 'N'
        }
    }
}
const plateau = new Plateau(10, 10);
const roverOne = new Rover(plateau, 1, 2, 'N');
const roverTwo = new Rover(plateau, 3, 3, 'E');

console.log(roverOne.moveRover('LMLMLMLMM')) // executing movement
console.log(Object.values(roverOne)) //  1 3 N

console.log(roverTwo.moveRover('MMRMMRMRRM'))
console.log(Object.values(roverTwo)) //  5 1 E