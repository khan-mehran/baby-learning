import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ClassSelectionPage from './pages/ClassSelectionPage';
import SubjectSelectionPage from './pages/SubjectSelectionPage';
import LearningPage from './pages/LearningPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"                           element={<ClassSelectionPage />} />
        <Route path="/class/:classId"             element={<SubjectSelectionPage />} />
        <Route path="/class/:classId/:subject"    element={<LearningPage />} />
        <Route path="*"                           element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
