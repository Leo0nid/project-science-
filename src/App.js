import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/libs/app.scss';
import Header from './components/Header';
import Main from './components/pages/Main';
import News from './components/pages/News';
import Library from './components/pages/Library';
import Contacts from './components/pages/Contacts';
import AboutUs from './components/pages/AboutUs';
import Footer from './components/Footer';
import NotFound from './components/NotFound/index';
import Profile from './components/pages/Profile';
import MyServices from './components/pages/MyServices';
import LoginPage from './components/pages/LoginPage/index';
import RegisterPage from './components/pages/RegisterPage/index';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<Main />} />
        <Route path="/news" element={<News />} />
        <Route path="/library" element={<Library />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/myServices" element={<MyServices />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
