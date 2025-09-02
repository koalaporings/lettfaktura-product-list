import Sidebar from './components/jsx/Sidebar.jsx'
import Table from './components/jsx/Table.jsx'
import './App.css'

function App() {

    return (
        <div className='app-container'>
            <div className='navbar'></div>
            <div className='sidebar'>
                <Sidebar/>
            </div>
            <div className='main'>
                <Table/>
            </div>
        </div>
    )
}

export default App
