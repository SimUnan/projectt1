import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css';
import { Sidebar } from './components/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import Activity from './pages/Activity/Activity';
import Schedule from './pages/Schedule/Schedule';
import SettingPage from './pages/SettingsPage/SettingPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <div className='Display'>
        <Navbar />
          <Routes>
            <Route path='/' element={<Dashboard />}/>
            <Route path='/activity' element={<Activity />}/>
            <Route path='/schedule' element={<Schedule />}/>
            <Route path='/setting' element={<SettingPage />}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
