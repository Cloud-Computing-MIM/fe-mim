import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from './admin/context/AuthContext';
import MainPage from "./MainPage";
import Foro from "./pages/Foro";
import Horarios from "./pages/Horarios";
import Salones from "./pages/Salones";
import Talleres from "./pages/Talleres";
import Mural from "./pages/Mural";
import Calendar from "./pages/Calendar";
import Dashboard from "./admin/Dashboard";
import Login from './admin/Login';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

const AppRoutes: React.FC = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/foro" element={<Foro />} />
      <Route path="/horarios" element={<Horarios />} />
      <Route path="/salones" element={<Salones />} />
      <Route path="/talleres" element={<Talleres />} />
      <Route path="/mural" element={<Mural />} />
      <Route path="/calendario" element={<Calendar />} />
      <Route 
        path="/login" 
        element={user ? <Navigate to="/admin" replace /> : <Login />} 
      />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
};

export default App;

