
import Card from "../Card/Card.js"
import './Grid.css'
import { useCallback,useState } from "react"
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import isWinner from '../../utils/isWinner.js'


function Grid({numberOfCards}){
    
    const [turn, setTurn] = useState(true);
    const [board,setBoard] = useState(Array(numberOfCards).fill(""))
    const [winner,setWinner] = useState(null)
    const play = useCallback(function playCallback(index){
      console.log("Move played "+index)
      if(turn == true){
        board[index] = 'O'
      }else{
        board[index] = 'X'
      }
      const win = isWinner(board,turn ? 'O':'X');
      if(win){
        setWinner(win);
        toast.success("Congratulation you won the game")
      }
      setBoard([...board]);
      setTurn(!turn)

    },[turn]); 
    function reset(){
      setBoard(Array(numberOfCards).fill(""))
      setWinner(null)
    }
    return (
      <>
         {winner && (
          <>
         <h1 className="turn-highlight">Winner is {winner}</h1>
         <button className="reset-button" onClick={reset}>Reset Game</button>
         <ToastContainer position="top-center"/>
         </>
         )}
         <h1 className="turn-highlight">Current Turn: {(turn)? 'O': 'X' }</h1>
         <div className="grid">
          {board.map((el,indx)=>{
            return <Card  gameEnd = {winner?true:false} onPlay = {play} key={indx} player= {el} index={indx}/>
          })}

        
        </div>
      </>
     
      

    )

}

export default Grid;