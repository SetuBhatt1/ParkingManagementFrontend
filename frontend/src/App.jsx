import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Floor0 from './pages/Floor0';
import Floor1 from './pages/Floor1';
import Floor2 from './pages/Floor2';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      {/* Shared UI */}
      <Navbar />
      <Routes>
        {/* any one of the route will be executed at a time */}
        <Route index element={<Home />} />
        <Route path='/floor0' element={<Floor0 />} />
        <Route path='/floor1' element={<Floor1 />} />
        <Route path='/floor2' element={<Floor2 />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
