import React, { useState } from 'react' //importing useState from react

//Bellow is the importing of board.js, message.js and refresh.js files
import Board from './board'
import Message from './message'
import Refresh from './refresh'

//We are cheking patterns of winning
const isWon = (board) => {
    //list of postion that is winning
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    /* checking each of the postition seeing if the combination is there
    if it does return the True
    /else return false*/
    for (let index=0; index< lines.length; index++) {
        let [a, b, c] = lines[index];
        //console.log(board[a] === board[b] && board[a] === board[c])
        if (board[a]!=="" &&board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}

const Game = () => {
    // this is for board
    // default values for all the array elements is "" or null
    const [board, setBoard] = useState(Array(9).fill("")); 
    // first player is "X"
    // if the game is over put "" as player
    const [isPlayer, setIsPlayer] = useState("X");
    const [message, setMessage] = useState("Current Player: X");
    
    /*When Clicking Refresh button, array elements should be "" and 
    current player should reset to X*/
    const refresh  = () => {
        setBoard(Array(9).fill("")); 
        setMessage("Current Player: X");
        setIsPlayer("X");  
    }
 

    const handleInput = (pos) => {    
        if (isPlayer === "" || board[pos] !== "") {
            //is the game is over don't play
            // if the box has been clocked already then return
            return;
        }
          
        const boardCopy = [...board];
        boardCopy[pos] = isPlayer;
        setBoard(boardCopy); // updating board for current player         

        if (isWon(boardCopy)){
            // once game is over
            setMessage(`Winner is: ${isPlayer}`)
            // since the game is over putting "" 
            setIsPlayer("");
            return;
        }

        if (boardCopy.indexOf("")=== -1){
            // if no more moves game is draw
            setMessage("DRAW")
            setIsPlayer("");
        } else {
            let nextPlayer = (isPlayer === "X") ? "O" : "X"
            setIsPlayer(nextPlayer); // updating player
            setMessage(`Current Player: ${nextPlayer}`)
        }
    }

    return (<div>
             <Message value={message} />
            <Board onClick={handleInput} value={board} /> 
            <Refresh onClick={refresh} value={'Refresh'} />
        </div>)
}

export default Game;