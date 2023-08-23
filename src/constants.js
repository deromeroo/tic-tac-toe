const TURNS = {
  X : '❌',
  O : '⚪'
};

const WINNER_COMBOS = [
  //Filas
  [0,1,2],
  [3,4,5],
  [6,7,8],
  //columnas
  [0,3,6],
  [1,4,7],
  [2,5,8],
  //Diagonales
  [2,4,6],
  [0,4,8],
];

export {TURNS, WINNER_COMBOS}