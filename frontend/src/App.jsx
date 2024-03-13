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
import Modal from './components/Modal';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
 return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/floor0" element={<ProtectedRoute><Floor0 /></ProtectedRoute>} />
        <Route path="/floor1" element={<ProtectedRoute><Floor1 /></ProtectedRoute>} />
        <Route path="/floor2" element={<ProtectedRoute><Floor2 /></ProtectedRoute>} />
      </Routes>
    </>
  );
}

export default App;
