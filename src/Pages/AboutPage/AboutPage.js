import './AboutPage.css';
import TopBar from '../../Components/TopBar/TopBar';

function AboutPage(props){

    return (
        <div className='AboutPage'>
            <TopBar backButtonRoute='/'/>
            <div className='AboutPage_Bottom'>
                <span>About</span>
            </div>
        </div>
    );
}

export default AboutPage;