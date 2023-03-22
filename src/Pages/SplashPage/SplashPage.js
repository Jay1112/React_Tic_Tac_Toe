import React, { useEffect } from "react";
import './SplashPage.css'
import SplashScreen from "../../Components/SplashScreen/SplashScreen";
import { useAppContext } from "../../hooks/useAppConntext";
import { AppActions } from "../../constants/actionTypes";

function SplashScreenPage(){
    const {dispatch} = useAppContext();

    useEffect(()=>{
        dispatch({ type : AppActions.SELECTED_TURN_SYMBOL, payload : null });
        dispatch({ type : AppActions.CLEAR_GAME_GRID} );
        dispatch({ type : AppActions.END_GAME} );
    },[dispatch]);

    return (
        <div className='splash_screen_page'>
            <SplashScreen />
        </div>
    );
}

export default SplashScreenPage;