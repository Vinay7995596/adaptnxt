import './index.css'

function Navbar() {
    return(
        <div>
            <nav>
                <ul>
                    <li className='separate-pending'>Pending</li>
                    <li>Accepted</li>
                    <li>AWB Created</li>
                    <li>Ready to ship</li>
                    <li>Shipped</li>
                    <li>Completed</li>
                    <li>Cancelled</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar