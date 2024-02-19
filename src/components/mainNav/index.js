import './index.css'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import GTranslateIcon from '@mui/icons-material/GTranslate';

function MainBav() {
    return(
        <div className='container-of-nav-main'>
            <div>
                <div>
                    <img className='comapny-logo' src='https://thumbs.dreamstime.com/b/shopping-logo-letter-s-concept-204397380.jpg' alt='Company Logo'/>
                </div>
            </div>
            <div className='icons-container-main'>
                <DarkModeIcon />
                <NotificationsIcon />
                <GTranslateIcon/>
            </div>
        </div>
    )
}

export default MainBav;