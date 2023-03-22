import './PlayerSprite.css';
import React from 'react';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { useAppContext } from '../../hooks/useAppConntext';

function PlayerSprite(props){
    const {state} = useAppContext();
    return (
                <div className='player_sprite_turn' style={(state && !state.isGameOver && props.isPlayerTurn) ? props.applyBorder : null}>
                    {   
                        state && !state.isGameOver && props.isPlayerTurn ?
                        <div className='player_sprite_indicator'>
                            <ExpandCircleDownIcon fontSize='large' style={{color:'white'}} />
                        </div> : null
                    }
                    <div className='player_sprite_profile'>
                        <img src={props.playerImage} alt='player_sprite'/>
                    </div>
                    <div className='player_sprite_name'>
                        {props.playerName}
                    </div>
                    <div className='player_sprite_symbol'>
                        <img src={props.playerTurnSymbol} alt='user_symbol'/>
                    </div>
                </div>
    );
}

export default PlayerSprite;