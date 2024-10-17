import React ,{useState} from 'react'
import Square from './Square'

export default function Board() {
        const[board,setBoard] = useState(Array(9).fill(null));
        const[isXturn,setTurn] = useState(true);
        

        const winningPattern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

        function isAnyWinner(){
            for(let pattern of winningPattern){
                console.log(pattern)
                console.log (board[pattern[0]]+"-"+board[pattern[1]]+"-"+board[pattern[2]])
                if(board[board[pattern[0]]!=null && pattern[0]]===board[pattern[1]] && board[pattern[0]]===board[pattern[2]]){
                    return board[pattern[0]];
                }
            }
            return false;   
        }        

        function onClick(currSquare){
            const boardcpy = [...board]
            if(boardcpy[currSquare]==null){
                boardcpy[currSquare] = isXturn ? 'X' : 'O';
                setBoard(boardcpy);
                setTurn(!isXturn);
            }
            
        }


        const winner = isAnyWinner();
        

  return (
        <>
        {winner ?   <div>
                        <h1>{winner} Won the Game</h1>
                        <button onClick={()=>setBoard(Array(9).fill(null))}>Play Again</button>
                    </div> :
        <div> 
            <h1>Player {isXturn ? 'X' : 'O'} Please Move </h1>
            <div className='board'>
                <Square value={board[0]} onClick = {()=> onClick(0)}/>
                <Square value={board[1]} onClick = {()=> onClick(1)}/>
                <Square value={board[2]} onClick = {()=> onClick(2)}/>
                <Square value={board[3]} onClick = {()=> onClick(3)}/>
                <Square value={board[4]} onClick = {()=> onClick(4)}/>
                <Square value={board[5]} onClick = {()=> onClick(5)}/>
                <Square value={board[6]} onClick = {()=> onClick(6)}/>
                <Square value={board[7]} onClick = {()=> onClick(7)}/>
                <Square value={board[8]} onClick = {()=> onClick(8)}/>
        </div>
        </div>

        }
        </>
  )}