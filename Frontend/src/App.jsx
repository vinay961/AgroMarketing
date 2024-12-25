import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom'; 
import Header from './components/common/Header/Header.jsx';
import Footer from './components/common/Footer/Footer.jsx';
import Marketplace from './components/pages/MarketPlace/MarketPlace.jsx';
import Home from './components/pages/HomePage/HomePage.jsx';
import ContactUs from './components/pages/ContactUs/ContactUs.jsx';
import EFarmingPage from './components/pages/E-Farming/E-farming.jsx';

function App() {
  const location = useLocation(); // Hook to get the current location (URL)

  return (
    <>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/marketplace" element={<Marketplace />} /> 
        <Route path="/contactus" element={<ContactUs />} />
        <Route path='efarming' element={<EFarmingPage />} />
      </Routes>

      {/* Conditionally render Footer based on the current route */}
      {location.pathname !== '/contactus' && <Footer />}
    </>
  );
}

export default App;
