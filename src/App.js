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
import ResearcherDetailPenyakitPage from "./pages/user/ResearcherDetailPenyakitPage.jsx";
import AuthRedirect from "./middleware/AuthRedirect.js";
import NotFound from "./components/404/NotFound.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman 404 */}
        <Route path="*" element={<NotFound />} />
        {/* Halaman Login dan Register */}
        <Route
          path="/"
          element={
            <AuthRedirect>
              <Login />
            </AuthRedirect>
          }
        />
        <Route
          path="/register"
          element={
            <AuthRedirect>
              <Register />
            </AuthRedirect>
          }
        />

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
          path="/peneliti/home"
          element={
            <ProtectedRoute allowedRoles={["peneliti"]}>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/peneliti/penyakit"
          element={
            <ProtectedRoute allowedRoles={["peneliti"]}>
              <ResearcherPenyakitPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/peneliti/detail-penyakit/:id"
          element={
            <ProtectedRoute allowedRoles={["peneliti"]}>
              <ResearcherDetailPenyakitPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}
