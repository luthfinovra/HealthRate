import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const role = localStorage.getItem("role"); // Ambil role dari localStorage
  const location = useLocation(); // Untuk melacak lokasi pengguna saat ini

  // Jika tidak ada role, arahkan ke halaman login
  if (!role) {
    return <Navigate to="/" replace />;
  }

  // Jika role tidak termasuk dalam daftar role yang diizinkan
  if (!allowedRoles.includes(role)) {
    // Redirect berdasarkan role
    if (role === "admin") {
      return <Navigate to="/admin/dashboard" replace />;
    }
    if (role === "operator") {
      return <Navigate to="/operator/penyakit" replace />;
    }
    if (role === "user") {
      return <Navigate to="/home" replace />;
    }
  }

  // Jika role diizinkan, tampilkan konten anak
  return children;
};

export default ProtectedRoute;
