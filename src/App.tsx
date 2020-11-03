import React from 'react';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="content">Main Content</div>
        <Footer />
      </div>
    </>
  );
};

export default App;
