import { WINNER_COMBOS } from "../constants";

const useCheck = () => {

  const checkWinner = (boardToCheck) => {
    for( const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;

      if(
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c] 
      ) {
        return boardToCheck[a];
      }
    }
    return null;
  };

  const checkEndGame = (newBoard) => {
    return newBoard.every( (square) => square !== null)
  }

  return {
    checkWinner,
    checkEndGame
  }
}

export default useCheck;