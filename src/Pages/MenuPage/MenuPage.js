import React, {useEffect} from "react";
import './MenuPage.css';
import MenuItem from "../../Components/MenuItem/MenuItem";
import logo from '../../assets/images/logo.png';
import { AppActions } from "../../constants/actionTypes";
import { useAppContext } from "../../hooks/useAppConntext";

function MenuPage(){
    const {dispatch} = useAppContext();

    useEffect(()=>{
        dispatch({ type : AppActions.SELECTED_TURN_SYMBOL, payload : null });
        dispatch({ type : AppActions.CLEAR_GAME_GRID} );
    },[dispatch]);

    const styleObj = {
        background: "linear-gradient(135deg, rgba(215,42,141,1) 38%, rgba(171,50,235,1) 78%)",
    }

    return (
        <div className='menu_screen_page'>
            <div className="top_menu_page">
                <div className="menu_logo">
                    <img  src={logo} alt='logo'/>
                </div>
            </div>
            <div className="bottom_menu_page">
                <div className="menu_item_box">
                    <MenuItem text="Play With AI" styleObj={styleObj} route='/pre_game' />
                    <MenuItem text="Game Statistics" styleObj={styleObj} route='/game_stats' />
                    <MenuItem text="About" styleObj={styleObj} route='/about'/>
                </div>
            </div>
        </div>
    );
}

export default MenuPage;