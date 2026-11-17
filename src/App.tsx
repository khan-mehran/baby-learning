import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Backdrop from './components/Backdrop';
import HomePage from './pages/HomePage';
import GeneralKnowledgePage from './pages/GeneralKnowledgePage';
import LearningPage from './pages/LearningPage';

export default function App() {
  return (
    <BrowserRouter>
      <Backdrop />
      <Routes>
        <Route path="/"               element={<HomePage />} />
        <Route path="/gk"             element={<GeneralKnowledgePage />} />
        <Route path="/learn/:topicId" element={<LearningPage />} />
        <Route path="*"               element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
