import { Routes, Route } from "react-router-dom";

import PublicSite from "./pages/PublicSite";
import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./pages/AdminPanel";
import ProtectedRoute from "./components/ProtectedRoute";
import TransmissionPage from "./pages/TransmissionPage";
import NotFound from "./pages/NotFound";

import BrandPage from "./pages/BrandPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicSite />} />

      <Route path="/remont-akpp/:brand" element={<BrandPage />} />

      <Route path="/admin" element={<AdminLogin />} />

      <Route
        path="/admin/panel"
        element={
          <ProtectedRoute>
            <AdminPanel />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFound />} />

      <Route
        path="/transmission/:transmission"
        element={<TransmissionPage />}
      />

      {/* <Route path="/transmissions" element={<TransmissionPage />} /> */}
    </Routes>
  );
}
