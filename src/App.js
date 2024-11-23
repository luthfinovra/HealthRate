import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
// import MyocardialPage from "./pages/operator/MyocardialPage";
import Dashboard from "./pages/admin/Dashboard";
import ApprovePage from "./pages/admin/ApprovePage";
import PenyakitPage from "./pages/admin/PenyakitPage";
import Register from "./pages/Register";
import HomePage from "./pages/user/HomePage";
// import UploadArrythmiaPage from "./pages/operator/UploadArrythmiaPage";
import PenggunaPage from "./pages/admin/PenggunaPage";
import DetailPenyakitPage from "./pages/admin/DetailPenyakitPage";
import TambahPenyakitPage from "./pages/admin/TambahPenyakitPage";
import TambahPenggunaPage from "./pages/admin/TambahPenggunaPage";
import ResearcherPenyakitPage from "./pages/user/ResearcherPenyakitPage";
import ProtectedRoute from "./middleware/ProtectedRoute";
import EditPenggunaPage from "./pages/admin/EditPenggunaPage";
import EditPenyakitPage from "./pages/admin/EditPenyakitPage";
import RecordPenyakitPage from "./pages/operator/RecordPenyakitPage.jsx";
import TambahRecordPenyakitPage from "./pages/operator/TambahRecordPenyakitPage.jsx";
import EditRecordPenyakitPage from "./pages/operator/EditRecordPenyakitPage.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman Login dan Register */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <PenggunaPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/users/detail/:id"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <EditPenggunaPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/persetujuan-peneliti"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <ApprovePage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/penyakit"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <PenyakitPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/penyakit"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <PenyakitPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/penyakit/edit-penyakit/:id"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <EditPenyakitPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/penyakit/detail-penyakit/:id"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <DetailPenyakitPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/tambah-users"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <TambahPenggunaPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/tambah-penyakit"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <TambahPenyakitPage />
            </ProtectedRoute>
          }
        />

        {/* Operator Routes */}
        <Route
          path="/operator/record-penyakit/:id"
          element={
            <ProtectedRoute allowedRoles={["operator"]}>
              <RecordPenyakitPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/operator/tambah-record/:id"
          element={
            <ProtectedRoute allowedRoles={["operator"]}>
              <TambahRecordPenyakitPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/operator/edit-record/:id/:id_record"
          element={
            <ProtectedRoute allowedRoles={["operator"]}>
              <EditRecordPenyakitPage />
            </ProtectedRoute>
          }
        />

        {/* User Routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute allowedRoles={["user"]}>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/researcher/penyakit"
          element={
            <ProtectedRoute allowedRoles={["user"]}>
              <ResearcherPenyakitPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}
