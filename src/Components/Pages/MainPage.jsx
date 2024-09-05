import React from 'react';
import Navbar from '../Navbar/Navbar';
import Asidebar from '../Asidebar/Asidebar';
import Home from './Home';
import Support from '../Support/Support';
import Footer from '../Footer/Footer';

function MainPage() {

  return (
    <>
      <Navbar />
      <Asidebar />
      <Home />
      <Support />
      <Footer />
    </>
  );
}

export default MainPage;
