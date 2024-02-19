import './index.css'
import RefreshIcon from '@mui/icons-material/Refresh';
import PrintIcon from '@mui/icons-material/Print';
import TelegramIcon from '@mui/icons-material/Telegram';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

const data = [
    {id:1, channel:"img", orderno:"#TkN20203754", orederdate:"2022-05-04", city:"Lucknow", customername:"Abhisek Dixit", orderValue: "0.00", stauts:"Pending", operation: 'Action'},
    {id:2, channel:"img", orderno:"#TkN20203753", orederdate:"2022-05-04", city:"Lucknow", customername:"Abhisek Dixit", orderValue: "0.00", stauts:"Pending", operation: 'Action'},
    {id:3, channel:"img", orderno:"#TkN20203752", orederdate:"2022-05-04", city:"Lucknow", customername:"Abhisek Dixit", orderValue: "0.00", stauts:"Pending", operation: 'Action'}
 
];

function Table(){
    return(
        <div>
            <div className='button-container'>
                <div className='button-container-small'>
                    <button className='icon-with-button'>
                        <OpenInBrowserIcon />
                        <span>Import orders</span>
                        </button>
                    <button className='icon-with-button'>
                        <TelegramIcon/>
                        <span>Accept</span>
                        </button>
                    <button className='icon-with-button'>
                        <PrintIcon />
                        <span>Print</span>
                    </button>
                </div>
                <div>
                    <button className='refresh-button'>
                        <RefreshIcon className='icon' /> 
                        <span>Refresh</span>

                    </button>
                </div>
            </div>
            {/* below table */}
            <table>
                <thead>
                <tr>
                    <th><input type='checkbox'/></th>
                            <th className='channel'>Channel</th>
                        <th className='order-no'>Order No</th>
                        <th className='remaining-cells'>Order Date</th>
                        <th>City</th>
                        <th>Customer Name</th>
                        <th>Order Value</th>
                        <th className='remaining-cells'>Status</th>
                        <th className='remaining-cells'>Operation</th>
                        </tr>
                </thead>
                <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>+<input type='checkbox'/></td>
                                <td>
                                    <img className='image-content-table' src='https://e7.pngegg.com/pngimages/193/871/png-clipart-green-shopping-bag-illustration-shopify-logo-icons-logos-emojis-tech-companies-thumbnail.png' alt='channel'/>
                                </td>
                                <td className='order-number'>{item.orderno}</td>
                                <td>{item.orederdate}</td>
                                <td className='city-name'>{item.city}</td>
                                <td className='customer-name-content'>{item.customername}</td>
                                <td>{item.orderValue}</td>
                                <td><button className='pending-button'>{item.stauts}</button></td>
                                <td><button>{item.operation}</button></td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table;