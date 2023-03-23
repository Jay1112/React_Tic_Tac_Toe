import { useEffect, useState } from 'react';
import SplashScreenPage from './Pages/SplashPage/SplashPage';
import MenuPage from './Pages/MenuPage/MenuPage';
import PrePlayGame from './Pages/PrePlayGamePage/PrePlayGamePage';
import GameScene from './Pages/GameScene/GameScene';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import GameStatsPage from './Pages/GameStatsPage/GameStatsPage';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { LOCAL_DATA_KEY } from './constants/extra';
import AboutPage from './Pages/AboutPage/AboutPage';

Chart.register(CategoryScale);

function App(props) {
  const timeOut = 3000; 
  const [isSplashScreen,setSplashScreenLoading] = useState(true);

  useEffect(()=>{
    if(isSplashScreen){
      setTimeout(()=>{
        setSplashScreenLoading(false);
      },timeOut);
    }
  },[isSplashScreen,timeOut]);

  useEffect(()=>{
      if(!localStorage.getItem(LOCAL_DATA_KEY)){
          localStorage.setItem(LOCAL_DATA_KEY,JSON.stringify({
              won : 0,
              lose : 0,
              draw : 0
          }));
      }
  },[]);

  return (
    <BrowserRouter>
    <div className='App'>
    <Routes>
      { isSplashScreen  && <Route path='*' element={<SplashScreenPage/>}/>}
      { !isSplashScreen && <Route exact path='/' element={<MenuPage/>}/>}
      { !isSplashScreen && <Route exact   
                                  path='/game_stats' 
                                  element={<GameStatsPage backButtonRoute='/' />}  /> }
      { !isSplashScreen && <Route exact   
                                  path='/pre_game' 
                                  element={<PrePlayGame backButtonRoute='/'
                                                        nextButtonRoute='/game_scene'/>}  /> }
      { !isSplashScreen && <Route exact 
                                  path='/game_scene' 
                                  element={<GameScene backButtonRoute='/'/>}/>}
      { !isSplashScreen && <Route exact path='/about' element={<AboutPage/>}/>}
      { !isSplashScreen  && <Route path='*' element={<PageNotFound backButtonRoute='/' />}/>}
     
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
