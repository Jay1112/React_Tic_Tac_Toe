import './GridItem.css';
import React from 'react';
import { useAppContext } from '../../hooks/useAppConntext';
import RedJelly from '../../assets/images/red.png';
import GreenJelly from '../../assets/images/green.png';
import { AppActions } from '../../constants/actionTypes';
import { checkWinStates } from '../../utilities/CheckWinner';

function GridItem(props){
    const {state,dispatch} = useAppContext();

    function doTurnOnGrid(index){
        props.doTurnOnGrid(index);
    }
    
    function doPlayerTurn(e){
        if(!props.isUserTurn){
            return ;
        }
        const element = e.target ;
        if(element && element.getAttribute("identifier")){
            const index = Number(element.getAttribute("identifier"));
            doTurnOnGrid(index);
        }
    }

    return(
        <div className='grid_item' identifier={props.identifier} onClick={doPlayerTurn}>
            {   props.turnSymbol && 
                <img  src={props.turnSymbol} alt='turn' />
            }
        </div>
    );
}

export default GridItem;