import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import Header from './components/common/Header/Header.jsx';
import Footer from './components/common/Footer/Footer.jsx';
import Marketplace from './components/pages/MarketPlace/MarketPlace.jsx';
import Home from './components/pages/HomePage/HomePage.jsx';

function App() {
  return (
    <>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/marketplace" element={<Marketplace />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
