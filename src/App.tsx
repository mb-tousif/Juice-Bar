import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Loader from './Components/Loader/Loader';
import { CartContextProvider } from './Context/CartContext';
import About from './Pages/About/About';
import Login from './Pages/Authentication/Login';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Cart from './Pages/Shop/Cart';
import Store from './Pages/Store/Store';

function App() {
  const [loader, setLoader] = useState<Boolean>(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  return (
    <CartContextProvider>
      <Header />
      {loader ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      )}
      <Footer />
    </CartContextProvider>
  );
}

export default App;
