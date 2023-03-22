import './PageNotFound.css';
import TopBar from '../../Components/TopBar/TopBar';

function PageNotFound(props){

    return (
        <div className='PageNotFound'>
            <TopBar backButtonRoute='/'/>
            <div className='PageNotFound_Bottom'>
                <span>Page Not Found</span>
            </div>
        </div>
    );
}

export default PageNotFound;