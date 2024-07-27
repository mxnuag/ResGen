import React, { useState } from 'react';
import { ResumeProvider } from './Context';
import './App.css';
import Header from './components/Layouts/Header';
import Navbar from './components/Layouts/Navbar';
import Footer from './components/Layouts/Footer';
import Main from './components/Main';
import Preloader from './components/Preloader';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <>
      <ResumeProvider>
        {!isLoaded && <Preloader onLoaded={handleLoaded} />}
        <div className={`main-content ${isLoaded ? 'visible' : ''}`}>
          <Navbar />
          <Header />
          <Main />
          <Footer />
        </div>
      </ResumeProvider>
    </>
  );
}

export default App;
