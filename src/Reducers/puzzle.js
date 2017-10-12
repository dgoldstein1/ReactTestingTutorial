// puzzle.js

const defaultState = {
  puzzle : [-1, -1, -1, -1, 8, 1, 4, -1, -1,
   -1, -1, -1, 9, 5, -1, 7, -1, -1, 
   -1, -1, -1, -1, -1, 4, 8, 9, 2,
   -1, -1, -1, -1, -1, -1, 1, -1, 9,
    5, -1, -1, 7, -1, 3, -1 -1, 6,
    6, -1, 3, -1, -1, -1, -1, -1, -1, 
    9, 1, 8, 5, -1, -1, -1, -1, -1,
   -1, -1, 2, -1, 4, 9, -1, -1, -1, 
   -1, -1, 5, 1, 2, -1, -1, -1, -1],
  gameFinished : false,
};

const puzzle = (state = defaultState, action) => {
  return defaultState;
}

export default puzzle