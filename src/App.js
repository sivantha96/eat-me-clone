import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Drawer from './components/Drawer';
import Footer from './components/Footer';
import Header from './components/Header';
import Shop from './feature/Shop';

function App() {
  const title = useSelector((state) => state.app.pageTitle);
  const description = useSelector((state) => state.app.pageDescription);
  const pageTitle = (title ? `${title} | ` : '') + 'EatMe';

  return (
    <HelmetProvider>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
      </Helmet>

      <Header />

      <Drawer position="right" />

      <div className="page">
        <Routes>
          <Route path="/" element={<Shop />} />
        </Routes>
      </div>

      <Footer />
    </HelmetProvider>
  );
}

export default App;
