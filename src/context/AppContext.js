import { createContext, useReducer} from "react";
import { AppActions } from "../constants/actionTypes";
import { NULL_GRID } from "../constants/extra";

export const AppContext = createContext();

export const appReducer = function(state,action){
    switch(action.type){
        case AppActions.SELECTED_TURN_SYMBOL : 
            return {
                ...state,
                userTurnSymbol : action.payload
            }
        case AppActions.CLEAR_GAME_GRID : 
            return {
                ...state,
                gameGrid : NULL_GRID,
                isGameOver : true,
            }
        case AppActions.UPDATE_GRID : 
            return {
                ...state,
                gameGrid : action.payload.updatedGrid,
                isGameOver : action.payload.isGameOver
            }

        case AppActions.START_GAME : 
            return {
                ...state,
                isGameOver : false,
            }

        case AppActions.END_GAME : 
            return {
                ...state,
                isGameOver : true,
            }
        default : return state ; 
    }
}

export function AppContextProvider({children}){
    const [state,dispatch] = useReducer(appReducer,{
        userTurnSymbol : null,
        gameGrid : NULL_GRID,
        isGameOver : true,
    });

    return (
        <AppContext.Provider value={{state,dispatch}}>
            {children}
        </AppContext.Provider>
    );
}