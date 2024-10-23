import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import Chart from "./pages/Chart";
import Audio from "./pages/Audio";
import ArrythmiaPage from "./pages/operator/ArrythmiaPage";
import MyocardialPage from "./pages/operator/MyocardialPage";
import Dashboard from "./pages/admin/Dashboard";
import OperatorPage from "./pages/admin/OperatorPage";
import ApprovePage from "./pages/admin/ApprovePage";
import PenyakitPage from "./pages/admin/PenyakitPage";
import Register from "./pages/Register";
import HomePage from "./pages/user/HomePage";
import DataArrythmiaPage from "./pages/user/DataArrythmiaPage";
import DataMyocardialPage from "./pages/user/DataMyocardialPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/chart" element={<Chart />}></Route>
        <Route path="/audio" element={<Audio />}></Route>
        {/* Operator */}
        <Route path="/arrythmia" element={<ArrythmiaPage />}></Route>
        <Route path="/myocardial" element={<MyocardialPage />}></Route>
        {/* Admin */}
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/operator" element={<OperatorPage />}></Route>
        <Route path="/approve" element={<ApprovePage />}></Route>
        <Route path="/penyakit" element={<PenyakitPage />}></Route>
        {/* User */}
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/data-arrythmia" element={<DataArrythmiaPage />}></Route>
        <Route path="/data-myocardial" element={<DataMyocardialPage />}></Route>
      </Routes>
    </Router>
  );
}
