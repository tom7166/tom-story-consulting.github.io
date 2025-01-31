import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../components/pages/Home';
import NotFound from '../components/pages/NotFound';
import { securitySystem } from '../security/intrusion-prevention';

const Router = () => {
  // Security check on route change
  const handleRouteChange = (location) => {
    if (securitySystem.detectIntrusion(location)) {
      securitySystem.handleIntrusion();
      return false;
    }
    return true;
  };

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
