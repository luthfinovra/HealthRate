import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import Chart from './pages/Chart';
import Audio from './pages/Audio';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/chart" element={<Chart />}></Route>
        <Route path="/audio" element={<Audio />}></Route>
      </Routes>
    </Router>
  );
}
