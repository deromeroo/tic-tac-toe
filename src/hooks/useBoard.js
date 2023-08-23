import { useState } from "react";
import { TURNS } from "../constants";
import useCheck from "./useCheck";
import confetti from "canvas-confetti";
import { resetGameStorage, saveGameToStorage } from "../utils";

const useBoard = () => {

  const {checkWinner, checkEndGame} = useCheck();

  const [board, setBoard] =  useState(() => {
    const boardFromStorage = window.localStorage.getItem('board');
    return boardFromStorage 
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null) 
  });

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn');
    return turnFromStorage ?? TURNS.X
  });

  const [winner, setWinner] = useState(null); // null = no hay ganador --- false = empate

  const updateBoard = (index) => {
    if(board[index] || winner) return; //No actualizar si ya existe
  
    //Actualizar Board
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
  
    //Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    //Guardar partida
      saveGameToStorage({
        board: newBoard,
        turn: newTurn
      })
  
    //Revisar el ganador
    const newWinner = checkWinner(newBoard)
    if(newWinner) {
      confetti()
      setWinner(newWinner) //winner
    } else if(checkEndGame(newBoard)) {
      setWinner(false) //empate
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    resetGameStorage();
  }

  return {
    board,
    setBoard,
    turn,
    setTurn,
    winner,
    setWinner,
    updateBoard,
    resetGame
  }
}

export default useBoard;