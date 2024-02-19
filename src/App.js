import './App.css';
import Table from './components/table';
import Navbar from './components/navBar';
import Sidebar from './components/sideBar';
import MainBav from './components/mainNav';

function App() {
  return (
    <div className="app">
      <MainBav />
      <div className='total-container'>
        <div>
          <Sidebar />
        </div>
        <div>
          <Navbar />
          <Table />
        </div>
      </div>

    </div>
  );
}

export default App;
