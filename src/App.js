import React, { useState, useEffect } from 'react';
import { ResumeProvider } from './Context';
import './App.css';
import Header from './components/Layouts/Header';
import Navbar from './components/Layouts/Navbar';
import Footer from './components/Layouts/Footer';
import Main from './components/Main';
import Preloader from './components/Preloader';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hideSidebar, setHideSidebar] = useState(true);

  const handleLoaded = () => {
    setIsLoaded(true);
    setHideSidebar(false); // Show sidebar after loading
  };

  useEffect(() => {
    if (isLoaded) {
      document.body.classList.remove('hide-sidebar');
    }
  }, [isLoaded]);

  return (
    <>
      <ResumeProvider>
        <div className={hideSidebar ? 'hide-sidebar' : ''}>
          {!isLoaded && <Preloader onLoaded={handleLoaded} />}
          <div className={`main-content ${isLoaded ? 'visible' : ''}`}>
            <Navbar />
            <Header />
            <Main />
            <Footer />
          </div>
        </div>
      </ResumeProvider>
    </>
  );
}

export default App;
