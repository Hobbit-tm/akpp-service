import { Routes, Route } from "react-router-dom";

import PublicSite from "./pages/PublicSite";
import BrandsIndex from "./pages/BrandsIndex";
import BrandPage from "./pages/BrandPage";
import ServicePage from "./pages/ServicePage";
import TransmissionPage from "./pages/TransmissionPage";
import AdminLogin from "./pages/AdminLogin";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

import { services } from "./data/services";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicSite />} />

      <Route path="/remont-akpp" element={<BrandsIndex />} />
      <Route path="/remont-akpp/:brand" element={<BrandPage />} />

      {services.map((service) => (
        <Route
          key={service.slug}
          path={`/${service.slug}`}
          element={<ServicePage service={service} />}
        />
      ))}

      <Route
        path="/transmission/:transmission"
        element={<TransmissionPage />}
      />

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
    </Routes>
  );
}
