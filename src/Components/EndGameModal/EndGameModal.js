import React, { useState,useEffect } from "react";
import Box from '@mui/material/Box';
import ReplayIcon from '@mui/icons-material/Replay';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate } from "react-router-dom";
import WinImage from '../../assets/images/trophy.png';
import BetterLuckImage from '../../assets/images/betterluck.jpg'

function EndGameModal(props){
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const imageSrc = props.isUserWon ? WinImage : BetterLuckImage ;
    const message  = props.isUserWon ? 'You Won' : 'Try Again' ;
    const duration = props.isUserWon ? 3000 : 0 ;

    const style = {
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width : props.width,
        height: "50vh",
        color : 'white',
        bgcolor: 'background.paper',
        borderRadius : '10px',
        border : '0px solid white',
        background : '#07004D',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        border:'3px solid #ffffff78'
    };

    useEffect(()=>{
        setTimeout(()=>{
            setOpen(true);
        },duration);
    },[]);

    function handleClose(event,reason){
        if (reason && reason === "backdropClick") {
            return;
        }
        setOpen(false);
    }
    
    function handleClick(){
      navigate('/pre_game');
    }

    function redirectMeu(){
      navigate('/');
    }

    return (
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <img  src={imageSrc} 
                    style={{
                      width : props.isUserWon ? '60%' : `70%`,
                      borderRadius: '10px'
                    }}/>
              <Typography id="modal-modal-title" 
                          variant="h4" 
                          style={{
                            width:'70%',
                            textAlign:'center',
                            position : 'absolute',
                            borderRadius : '50px',
                            top : '0%',
                            left: '50%',
                            transform: 'translate(-50%,-50%)',
                            background : '#07004D',
                            padding : '10px 0',
                            border:'3px solid #ffffff78'
                          }}>
              {message}
              </Typography>
              <Typography id="modal-modal-title" 
                          variant="h3" 
                          onClick={redirectMeu}
                          style={{
                            aspectRatio : 1,
                            padding :'10px',
                            textAlign:'center',
                            position : 'absolute',
                            top : '100%',
                            left: '25%',
                            transform: 'translate(-50%,-50%)',
                            background : '#07004D',
                            border:'3px solid #ffffff78',
                            display : 'flex',
                            alignItems : 'center',
                            justifyContent : 'center',
                            borderRadius : '50%',
                            zIndex : 2,
                            cursor : 'pointer',
                          }}>
               <WidgetsOutlinedIcon fontSize='inherit' color='string'/>
              </Typography>
              <Typography id="modal-modal-title" 
                          variant="h3" 
                          onClick={handleClick}
                          style={{
                            aspectRatio : 1,
                            padding :'10px',
                            textAlign:'center',
                            position : 'absolute',
                            top : '100%',
                            left: '75%',
                            transform: 'translate(-50%,-50%)',
                            background : '#07004D',
                            border:'3px solid #ffffff78',
                            display : 'flex',
                            alignItems : 'center',
                            justifyContent : 'center',
                            borderRadius : '50%',
                            zIndex : 2,
                            cursor : 'pointer',
                          }}>
               <ReplayIcon fontSize='inherit' color='string'/>
              </Typography>
            </Box>
          </Modal>
        </div>
      );
}
export default EndGameModal;
