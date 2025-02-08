import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const AuthRedirect = ({ children }) => {
  const token = Cookies.get("token");
  const role = localStorage.getItem("role"); // Ambil role dari localStorage

  if (token) {
    // Arahkan berdasarkan role
    if (role === "admin") {
      return <Navigate to="/admin/dashboard" replace />;
    }
    if (role === "operator") {
      return (
        <Navigate
          to={`/operator/record-penyakit/${localStorage.getItem("disease_id")}`}
          replace
        />
      );
    }
    if (role === "peneliti") {
      return <Navigate to="/peneliti/penyakit" replace />;
    }
  }

  // Jika tidak ada token, render halaman anak (Login/Register)
  return children;
};

export default AuthRedirect;
