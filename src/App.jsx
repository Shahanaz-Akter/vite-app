import { useState } from "react";
import viteLogo from "/vite.svg";
// import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Asidebar from './Components/Asidebar/Asidebar';
import Home from './Components/Pages/Home';
import Support from './Components/Support/Support';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <>
      {/* All Components will be here one by one*/}
      <Navbar />
      <Asidebar />
      <Home />
      <Support />
      <Footer />
    </>
  );
}

export default App;
