import './GameStatsPage.css';
import TopBar from '../../Components/TopBar/TopBar';
import PieChart from '../../Components/PieChart/PieChart';
import { LOCAL_DATA_KEY } from '../../constants/extra';
import { useEffect, useState } from 'react';

function Stripe({keyName,value}){
    return (
            <div className='data_item'>
                <span className='key_item'>{keyName}</span>
                <span className='value_item'>{value}</span>
            </div>
    );
}

function GameStatsPage(props){
    const [fields,setFieldsData] = useState(null);
    const [chartData,setChartData] = useState(null);
    const [won,setWonCount] = useState(0);
    const [lose,setLoseCount] = useState(0);
    const [draw,setDrawCount] = useState(0);
    const title = "Pie Chart";

    useEffect(()=>{
        if(localStorage.getItem(LOCAL_DATA_KEY)){
            const data = JSON.parse(localStorage.getItem(LOCAL_DATA_KEY));
            if(data){
                setFieldsData(Object.keys(data));
                setChartData(Object.keys(data).map((item)=>data[item]));
                if(data && data.hasOwnProperty("won")){
                    setWonCount(data["won"]);
                }
                if(data && data.hasOwnProperty("lose")){
                    setLoseCount(data["lose"]);
                }
                if(data && data.hasOwnProperty("draw")){
                    setDrawCount(data["draw"]);
                }
            }
        }
    },[]);

    return (
        <div className='GameStatsPage'>
            <TopBar backButtonRoute='/'/>
            <div className='GameStatsPage_Bottom'>
                <div className='GameStatsPage_Title'>
                    <span>Game Statistics</span>
                </div>
                <div className='GameStatsPage_Stats'>
                    <Stripe keyName="Won" value={won} />
                    <Stripe keyName="Lose" value={lose} />
                    <Stripe keyName="Draw" value={draw} />
                    <Stripe keyName="Total" value={won + lose} />
                </div>
                <div className='GameStatsPage_Chart'>
                    {
                        chartData ?
                    
                    <PieChart data={chartData}
                              labels={fields}
                              title={title}/>  :null
                    }
                </div>
            </div>
        </div>
    );
}

export default GameStatsPage;