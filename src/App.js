import { useEffect, useState } from 'react';
import SplashScreenPage from './Pages/SplashPage/SplashPage';
import MenuPage from './Pages/MenuPage/MenuPage';
import PrePlayGame from './Pages/PrePlayGamePage/PrePlayGamePage';
import GameScene from './Pages/GameScene/GameScene';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(props) {
  const timeOut = 3000; 
  const [isSplashScreen,setSplashScreenLoading] = useState(false);

  useEffect(()=>{
    if(isSplashScreen){
      setTimeout(()=>{
        setSplashScreenLoading(false);
      },timeOut);
    }
  },[isSplashScreen,timeOut]);

  return (
    <BrowserRouter>
    <div className='App'>
    <Routes>
      { isSplashScreen  && <Route path='*' element={<SplashScreenPage/>}/>}
      { !isSplashScreen && <Route exact path='/' element={<MenuPage/>}/>}
      { !isSplashScreen && <Route exact   
                                  path='/pre_game' 
                                  element={<PrePlayGame backButtonRoute='/'
                                                        nextButtonRoute='/game_scene'/>}  /> }
      { !isSplashScreen && <Route exact 
                                  path='/game_scene' 
                                  element={<GameScene backButtonRoute='/'/>}/>}
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
