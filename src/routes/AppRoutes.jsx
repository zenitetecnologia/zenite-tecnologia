import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import PrivacyPolicy from '../pages/PrivacyPolicy';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
