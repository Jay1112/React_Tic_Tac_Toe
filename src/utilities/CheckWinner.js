export function checkWinStates(gameboard){
    let board = [...gameboard];
    for(let index = 0 ; index < 9 ; index++){
        if(board[index] === null){
            board[index] = '_';
        }else{
            board[index] = board[index].srcType;
        }
    }

    let isWinner = false;

    if(board[0] !== '_' && board[1] !== '_' && board[2] !== '_' && board[0] === board[1] && board[1] === board[2]){
        isWinner = true;
    }
    else if(board[3] !== '_' && board[4] !== '_' && board[5] !== '_' && board[3] === board[4] && board[4] === board[5]){
        isWinner = true;
    }
    else if(board[6] !== '_' && board[7] !== '_' && board[8] !== '_' && board[6] === board[7] && board[7] === board[8]){
        isWinner = true;
    }
    else if(board[0] !== '_' && board[3] !== '_' && board[6] !== '_' && board[0] === board[3] && board[3] === board[6]){
        isWinner = true;
    }
    else if(board[1] !== '_' && board[4] !== '_' && board[7] !== '_' && board[1] === board[4] && board[4] === board[7]){
        isWinner = true;
    }
    else if(board[2] !== '_' && board[5] !== '_' && board[8] !== '_' && board[2] === board[5] && board[5] === board[8]){
        isWinner = true;
    }
    else if(board[0] !== '_' && board[4] !== '_' && board[8] !== '_' && board[0] === board[4] && board[4] === board[8]){
        isWinner = true;
    }
    else if(board[2] !== '_' && board[4] !== '_' && board[6] !== '_' && board[2] === board[4] && board[4] === board[6]){
        isWinner = true;
    }
    return isWinner;
}