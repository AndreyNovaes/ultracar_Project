import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthProvider';
import Layout from './Layout';
import ServicesPage from './pages/ServicePage';

export default function AppRoutes() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h1>Home</h1>} />
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/register" element={<h1>Register</h1>} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
