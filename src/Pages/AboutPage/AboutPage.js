import './AboutPage.css';
import TopBar from '../../Components/TopBar/TopBar';
import MyImage from '../../assets/images/dev.jpeg';
import {about} from '../../utilities/AboutData';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

function AboutPage(){

    return (
        <div className='AboutPage'>
            <TopBar backButtonRoute='/'/>
            <div className='AboutPage_Bottom'>
                <div className='AboutPage_Image'>
                    <img src={MyImage} alt='Dev Pic' />
                </div>
                <div className='AboutPage_Name'>
                    <span>{about.name}</span>
                </div>
                <div className='AboutPage_Profile'>
                    <span>{about.profile}</span>
                </div>
                <div className='AboutPage_Contact'>
                    <div className='icon'>
                        <Link to={`${about.github.link}`}>
                            <GitHubIcon id='github' sx={{ fontSize: "80px", color : 'white' }} />
                        </Link>
                    </div>
                    <div className='icon'>
                        <Link to={`${about.linkedIn.link}`}>
                            <LinkedInIcon id='linkedin' sx={{ fontSize: "90px", color : 'white' }} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;