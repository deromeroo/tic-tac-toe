/* eslint-disable react/prop-types */
import {Square} from './components/Square';
import { WinnerModal } from "./components/WinnerModal";
import { Turn } from "./components/Turn";
import useBoard from './hooks/useBoard';

function App() {

  const {
    board,
    turn,
    winner,
    updateBoard,
    resetGame,
  } = useBoard();

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button
        onClick={resetGame}
      >Reiniciar
      </button>
      <section className="game">
        {
          board.map( (square, index) => (
            <Square 
              key={index}
              index={index} 
              updateBoard={updateBoard}
            >
              {square}
            </Square>
          ))
        }
      </section>
      <Turn turn={turn} />
      <WinnerModal winner={winner} resetGame={resetGame}/>
    </main>
  )
}

export default App
