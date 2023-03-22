import React from "react";
import { useNavigate } from "react-router-dom";
import './MenuItem.css';

function MenuItem(props){
    const navigate = useNavigate();

    function changeRoute(){
        if(props.route){
            navigate(props.route);
        }
    }

    const styleObj = {
        ...props.styleObj
    };

    return (
        <div    className='menu_item' 
                style={{...styleObj}}
                onClick={changeRoute}>
                <span>{props.text}</span>
        </div>
    );
}

export default MenuItem;