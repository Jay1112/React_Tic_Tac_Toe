import React, { useEffect, useState } from 'react';
import './GameScene.css';
import UserImage from '../../assets/images/user.jpg';
import RedJelly from '../../assets/images/red.png';
import ComputerImage from '../../assets/images/robot.jpg';
import GreenJelly from '../../assets/images/green.png';
import { useAppContext } from '../../hooks/useAppConntext';
import TopBar from '../../Components/TopBar/TopBar';
import PlayerSprite from '../../Components/PlayerSprite/PlayerSprite';
import GridItem from '../../Components/GridItem/GridItem';
import { AppActions } from '../../constants/actionTypes';
import { findBestMove } from '../../utilities/BestMove';
import { Move } from '../../utilities/BestMove';
import { getGridToLinear } from '../../utilities/GridMapping';
import { useNavigate } from 'react-router-dom';
import { checkWinStates } from '../../utilities/CheckWinner';
import EndGameModal from '../../Components/EndGameModal/EndGameModal';
import Confetti from 'react-confetti';

function GameScene(props){
    const {state,dispatch} = useAppContext();
    const navigate = useNavigate();
    const [isUserTurn,setUserTurn] = useState(true);
    const [refreshCheck,setRefreshCheck] = useState(state.isGameOver);
    const [gameEndMessage,setGameEndMessage] = useState('');
    const [width,setWidth] = useState(0);
    const [height,setHeight] = useState(0);
    const [isUserWon,setUserWon] = useState(false);

    useEffect(()=>{
        // generating random number [1,10]
        const random = Math.floor(Math.random() * 10) + 1;
        if(random <= 5){
            setUserTurn(false);
        }else{
            setUserTurn(true);
        }
        setWidth(document.querySelector(".game_scene_page").offsetWidth);
        setHeight(document.querySelector(".game_scene_page").offsetHeight);
    },[]);

    useEffect(()=>{
        if(refreshCheck){
            navigate('/pre_game');
        }
    },[refreshCheck])

    useEffect(()=>{
        if(state.userTurnSymbol === null){
            dispatch({ type : AppActions.SELECTED_TURN_SYMBOL, payload : 1 });
        }
    },[dispatch,state.userTurnSymbol]);

    function getCurrentTurnSymbol(){
        if(isUserTurn){
            if(state && state.userTurnSymbol === 1){
                return {src : RedJelly, srcType : 'x'};
            }
        }else{
            if(state && state.userTurnSymbol !== 1){
                return {src : RedJelly, srcType : 'x'};
            }
        }
        return {src : GreenJelly, srcType : 'o'};
    }

    useEffect(()=>{
        if(!state.isGameOver && !isUserTurn){
            function doAITurn(){
                let aiTurn = new Move();
                aiTurn = findBestMove(state.gameGrid);
                const aiIndex = getGridToLinear(aiTurn.row,aiTurn.col);
                doTurnOnGrid(aiIndex);
            }
            setTimeout(()=>{
                doAITurn();
            },1000);
        }
    },[isUserTurn,state.isGameOver,state.gameGrid]);

    function doTurnOnGrid(index){
        const gridData = state.gameGrid ; 

        if(!isNaN(index) && !gridData[index]){
            let newData = [] ; 
            let counter = 0 ;
            for(let ind = 0; ind < gridData.length; ind++){
                if(index === ind){
                    const symbol = getCurrentTurnSymbol();
                    newData.push(symbol);
                }else{
                    newData.push(gridData[ind]);
                }

                if(newData[ind]){
                    counter++;
                }
            }

            if(counter >= 0 && counter < 9 ){
                dispatch({ type : AppActions.UPDATE_GRID, payload : {
                    updatedGrid : newData,
                    isGameOver : false,
                } });
                const isWinner = checkWinStates(newData);
                if(isWinner){
                    let message = 'Better Luck Next Time';
                    if(isUserTurn){
                        message = 'You Won';
                        setUserWon(true);
                    }
                    setGameEndMessage(message);
                    dispatch({ type : AppActions.END_GAME});
                    // doAlert(message);
                }else{
                    changeTurn();
                }  
            }else{
                dispatch({ type : AppActions.UPDATE_GRID, payload : {
                    updatedGrid : newData,
                    isGameOver : true,
                } });
                const isWinner = checkWinStates(newData);
                let message = "Game Finished!!!" ;
                if(isWinner){
                    message = 'Better Luck Next Time';
                    if(isUserTurn){
                        message = 'You Won';
                        setUserWon(true);
                    }
                }
                setGameEndMessage(message);
                dispatch({ type : AppActions.END_GAME});
                // doAlert(message);    
            }
        }
    }

    console.log(state.isGameOver && isUserWon);

    function changeTurn(){
        setUserTurn(!isUserTurn);
    }

    const applyBorder = {
        border : '2px solid white',
    };

    return (
        <div className='game_scene_page'>
            {  state.isGameOver && isUserWon &&
                <Confetti   width={width}
                            height={height}/>
            }
            {   state.isGameOver ? 
                <EndGameModal   message={gameEndMessage}
                                width={width - 50}
                                isUserWon={isUserWon}
                /> : null
            }
            <TopBar backButtonRoute={props.backButtonRoute}/>
            <div className='game_scene_mid_bar'>
                    <PlayerSprite   isPlayerTurn={isUserTurn}
                                    applyBorder={applyBorder}
                                    playerImage={UserImage}
                                    playerName='User'
                                    playerTurnSymbol={
                                        (state && state.userTurnSymbol === 1) ? 
                                        RedJelly : GreenJelly
                                    }/>
                    <PlayerSprite   isPlayerTurn={!isUserTurn}
                                    applyBorder={applyBorder}
                                    playerImage={ComputerImage}
                                    playerName='AI'
                                    playerTurnSymbol={
                                        (state && state.userTurnSymbol !== 1) ? 
                                        RedJelly : GreenJelly
                                    }/>
            </div>
            <div className='game_scene_bottom_bar'>
                <div className='game_grid'>
                    {
                        state && state.gameGrid &&
                        state.gameGrid.map((item,index)=>{
                            return <GridItem    key={index}
                                                identifier={index}
                                                turnSymbol={item ? item.src : null}
                                                isUserTurn={isUserTurn}
                                                changeTurn={changeTurn}
                                                doTurnOnGrid={doTurnOnGrid}
                                                 />
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default GameScene;