import './index.css'
import SpeedIcon from '@mui/icons-material/Speed';
import FireTruckIcon from '@mui/icons-material/FireTruck';
import ListIcon from '@mui/icons-material/List';
import ShareIcon from '@mui/icons-material/Share';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

function Sidebar() {
    return(
        <div>
            <div className='side-bar-main-container'>
                <ul className='list-container-total'>
                    <li className='list-container'>
                        <SpeedIcon/>
                        <span>Dashboard</span>
                    </li>
                    <li className='list-container'>
                        <LocalOfferIcon/>
                        <span>Inventory</span>
                    </li>
                    <li className='list-container'>
                        <ListIcon/>
                        <span>Orders</span>
                    </li>
                    <li className='list-container'>
                        <FireTruckIcon/>
                        <span>Shipping</span>
                        </li>
                    <li className='list-container'>
                        <ShareIcon/>
                        <span>Channel</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;