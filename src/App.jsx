import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import { isLoggedIn } from './utils/auth';

// Login na thakle Home e dhukte dibe na, Register page e pathabe
function ProtectedRoute({ children }) {
  return isLoggedIn() ? children : <Navigate to="/register" replace />;
}

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/register" replace />} />
    </Routes>
  );
}