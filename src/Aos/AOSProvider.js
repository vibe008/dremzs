// src/contexts/AOSProvider.js
import React, { useEffect, createContext } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const AOSContext = createContext();

const AOSProvider = ({ children }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <AOSContext.Provider value={{ AOS }}>
      {children}
    </AOSContext.Provider>
  );
};

export default AOSProvider;
