import React from 'react';
import Helmet from 'react-helmet';
import { useSelector } from 'react-redux';
import Drawer from './components/Drawer';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const title = useSelector((state) => state.app.pageTitle);
  const description = useSelector((state) => state.app.pageDescription);
  const pageTitle = (title ? `${title} | ` : '') + 'Eat Me';

  return (
    <div>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
      </Helmet>

      <Header />

      <Drawer position="right" />

      <div className="page"></div>

      <Footer />
    </div>
  );
}

export default App;
