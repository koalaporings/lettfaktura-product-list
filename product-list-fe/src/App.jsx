import Sidebar from './components/jsx/Sidebar.jsx'
import Table from './components/jsx/Table.jsx'
import Navbar from './components/jsx/Navbar.jsx'
import SearchBar from './components/jsx/SearchBar.jsx'
import './App.css'


function App() {

    return (
        <div className='app-container'>
            <div className='navbar-container'>
                <Navbar/>
            </div>
            <div className='main-container'>
                <div className='sidebar-container'>
                    <Sidebar/>
                </div>
                <div className='content-container'>
                    <div className='header-container'>
                        <div className='searchbar-container'>
                            <SearchBar/>
                            <SearchBar/>
                        </div>
                        <div className='button-container'>
                            <button>Add Product</button>
                            <button>Remove Product</button>
                            <button>Export</button>
                        </div>
                    </div>
                    <Table/>
                </div>
            </div>
        </div>
    )
}

export default App;
