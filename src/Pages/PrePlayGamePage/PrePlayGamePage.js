import React, { useEffect, useState } from "react";
import './PrePlayGamePage.css';
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { AppActions } from "../../constants/actionTypes";
import { useAppContext } from "../../hooks/useAppConntext";
import RedJelly from '../../assets/images/red.png';
import GreenJelly from '../../assets/images/green.png';
import TopBar from "../../Components/TopBar/TopBar";

function PrePlayGamePage(props){
    const navigate = useNavigate();
    const [selectedSymbol,setSelectedSymbol] = useState(1);
    const {dispatch} = useAppContext();

    function onSymbolClick(event){
        if(event.target.getAttribute("value") && event.target.getAttribute("value") === '1'){
            setSelectedSymbol(1);
        }else if(event.target.getAttribute("value") && event.target.getAttribute("value") === '0'){
            setSelectedSymbol(0);
        }
    }

    function onStartGameButtonPressed(){
        dispatch({ type : AppActions.SELECTED_TURN_SYMBOL, payload : selectedSymbol });
        if(props.nextButtonRoute){
            dispatch({ type : AppActions.START_GAME});
            setTimeout(()=>{
                navigate(props.nextButtonRoute);
            },0);
        }
    }

    const overRideStyle={
        border : '5px solid white',
    }

    useEffect(()=>{
        dispatch({ type : AppActions.CLEAR_GAME_GRID} );
        dispatch({ type : AppActions.END_GAME});
    },[dispatch]);

    return (
        <div className="PrePlayGamePage">
            <TopBar backButtonRoute={props.backButtonRoute}/>
            <div className="PrePlayGamePage_Middle">
                <div className="PrePlayGamePage_SelectTurnSymbolBox">
                    <div className="PrePlayGamePage_X_SymbolBox"
                         style={selectedSymbol !== 0 ? overRideStyle : null}
                         value="X">
                        <div>
                            <img    onClick={(e)=>onSymbolClick(e)}
                                    src={RedJelly} 
                                    alt='red_jelly'
                                    value={1} />
                        </div>
                    </div>
                    <div className="PrePlayGamePage_0_SymbolBox"
                         style={selectedSymbol === 0 ? overRideStyle : null}
                         value="0">
                        <div>
                            <img    onClick={(e)=>onSymbolClick(e)}
                                    src={GreenJelly} 
                                    alt='green_jelly'
                                    value={0} />
                        </div>
                    </div>
                </div>
                <div className="PrePlayGamePage_Start_Game">
                    <Button variant="contained"
                            size="large"
                            color="warning"
                            onClick={onStartGameButtonPressed}
                    >
                        Start Game
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default PrePlayGamePage;

