import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import Chart from "./pages/Chart";
import Audio from "./pages/Audio";
import ArrythmiaPage from "./pages/operator/ArrythmiaPage";
import MyocardialPage from "./pages/operator/MyocardialPage";
import Dashboard from "./pages/admin/Dashboard";
import ApprovePage from "./pages/admin/ApprovePage";
import PenyakitPage from "./pages/admin/PenyakitPage";
import Register from "./pages/Register";
import HomePage from "./pages/user/HomePage";
import DataArrythmiaPage from "./pages/user/DataArrythmiaPage";
import DataMyocardialPage from "./pages/user/DataMyocardialPage";
import UploadPenyakitPage from "./pages/admin/TambahPenyakitPage";
import UploadOperatorPage from "./pages/admin/TambahPenggunaPage";
import UploadArrythmiaPage from "./pages/operator/UploadArrythmiaPage";
import UploadMyocardial from "./pages/operator/UploadMyocardial";
import EditArrythmiaPage from "./pages/operator/EditArrythmiaPage";
import EditMyocardial from "./pages/operator/EditMyocardial";
import PenggunaPage from "./pages/admin/PenggunaPage";
import DetailPenyakitPage from "./pages/admin/DetailPenyakitPage";
import TambahPenyakitPage from "./pages/admin/TambahPenyakitPage";
import TambahPenggunaPage from "./pages/admin/TambahPenggunaPage";
import OperatorPanyakitPage from "./pages/operator/OpratorPanyakitPage";
import OperatorTambahPenyakitPage from "./pages/operator/OperatorTambahPenyakitPage";
import ResearcherPenyakitPage from "./pages/user/ResearcherPenyakitPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/chart" element={<Chart />}></Route>
        <Route path="/audio" element={<Audio />}></Route>
        {/* Operator */}
        <Route path="/operator/:id" element={<OperatorPanyakitPage />}></Route>
        <Route
          path="/tambah-penyakit/:id"
          element={<OperatorTambahPenyakitPage />}
        ></Route>
        <Route path="/myocardial" element={<MyocardialPage />}></Route>
        <Route
          path="/upload-arrythmia"
          element={<UploadArrythmiaPage />}
        ></Route>
        <Route path="/upload-myocardial" element={<UploadMyocardial />}></Route>
        <Route path="/edit-arrythmia" element={<EditArrythmiaPage />}></Route>
        <Route path="/edit-myocardial" element={<EditMyocardial />}></Route>
        {/* Admin */}
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/pengguna" element={<PenggunaPage />}></Route>
        <Route path="/approve" element={<ApprovePage />}></Route>
        <Route path="/penyakit" element={<PenyakitPage />}></Route>
        <Route path="/penyakit/:id" element={<DetailPenyakitPage />} />
        <Route path="/tambah-penyakit" element={<TambahPenyakitPage />}></Route>
        <Route path="/tambah-pengguna" element={<TambahPenggunaPage />}></Route>
        <Route path="/edit-penyakit" element={<UploadPenyakitPage />}></Route>
        <Route path="/edit-operator" element={<UploadOperatorPage />}></Route>
        {/* User */}
        <Route path="/home" element={<HomePage />}></Route>
        <Route
          path="/researcher/penyakit"
          element={<ResearcherPenyakitPage />}
        ></Route>
        <Route
          path="/researcher/penyakit/:id"
          element={<DataMyocardialPage />}
        ></Route>
      </Routes>
    </Router>
  );
}
