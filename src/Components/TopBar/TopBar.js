import React from "react";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { useNavigate } from "react-router-dom";
import './TopBar.css'

function TopBar(props){
    const navigate = useNavigate();

    function onBackButtonPressed(){
        if(props.backButtonRoute){
            navigate(props.backButtonRoute);
        }
    }
    return (
            <div className="TopBar">
                <KeyboardDoubleArrowLeftIcon  
                            style={{fontSize:'3rem'}}
                            color='primary'
                            className='TopBar_BackButton'
                            onClick={onBackButtonPressed}/>
            </div>
    );
}

export default TopBar;