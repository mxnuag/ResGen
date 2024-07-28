// src/App.js
import React, { useState } from 'react';
import { ResumeProvider } from './Context';
import './App.css';
import Header from './components/Layouts/Header';
import Navbar from './components/Layouts/Navbar';
import Footer from './components/Layouts/Footer';
import Main from './components/Main';
import Preloader from './components/Preloader';
import ContactUsModal from './components/ContactUsModal'; // Import the ContactUsModal
import { ChakraProvider } from '@chakra-ui/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false); // State to manage the modal visibility

  const handleLoaded = () => {
    setIsLoaded(true);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <ChakraProvider>
      <ResumeProvider>
        <ToastContainer />
        {!isLoaded && <Preloader onLoaded={handleLoaded} />}
        <div className={`main-content ${isLoaded ? 'visible' : ''}`}>
          <Navbar onOpenModal={handleOpenModal} /> {/* Pass the function to Navbar */}
          <Header />
          <Main />
          <Footer onOpenModal={handleOpenModal} /> {/* Pass the function to Footer */}
          <ContactUsModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
      </ResumeProvider>
    </ChakraProvider>
  );
}

export default App;
