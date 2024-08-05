"use client";
//use client
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html>
      <body>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <main style={{ flex: 1, padding: '1rem' }}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default Layout;
