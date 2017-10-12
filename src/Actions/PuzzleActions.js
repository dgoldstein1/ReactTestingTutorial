// PuzzleActions.js

export const SET_SQUARE_VALUE = 'SET_SQUARE_VALUE';
export function setSquareValue(id, newValue) {
  return {
    type : SET_SQUARE_VALUE,
    id : id,
    newValue : newValue
  }
}
