import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom'; 
import Header from './components/common/Header/Header.jsx';
import Footer from './components/common/Footer/Footer.jsx';
import Marketplace from './components/pages/MarketPlace/MarketPlace.jsx';
import Home from './components/pages/HomePage/HomePage.jsx';
import ContactUs from './components/pages/ContactUs/ContactUs.jsx';
import EFarmingPage from './components/pages/E-Farming/E-farming.jsx';
import LoginPage from './components/pages/Login/Login.jsx';
import RegisterPage from './components/pages/Registration/Register.jsx';
import UserDashboard from './components/pages/UserDashboard/UserDashboard.jsx';
import SellerProductForm from './components/pages/ProductForm/ProductForm.jsx';
import SellerHome from './components/pages/SellerHome/SellerHome.jsx';
import SellerDashboard from './components/pages/SellerDashboard/SellerDashboard.jsx';
import BusinessDetailsForm from './components/pages/BusinessDetail/BusinessDetail.jsx';

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
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/userdashboard' element={<UserDashboard />} />
        <Route path='/addproduct' element={<SellerProductForm />} />
        <Route path='/sellerhome' element={<SellerHome />} />
        <Route path='/sellerprofile' element={<SellerDashboard />} />
        <Route path='/businessdetailform' element={<BusinessDetailsForm/>} />
      </Routes>

      {location.pathname !== '/contactus' && <Footer />}
    </>
  );
}

export default App;
