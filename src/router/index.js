import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Login from '../views/auth/login';
import Register from '../views/auth/register';
import ForgotPassword from '../views/auth/forgotPassword';

import Home from '../views/home/index';
import Search from '../views/search';
import BookingDetail from '../views/bookingDetail';
import FlightDetail from '../views/flightDetail';

import MyBooking from '../views/myBooking';
import Profile from '../views/profile';

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />

          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/booking" element={<BookingDetail />} />
          <Route path="/flight" element={<FlightDetail />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/mybooking" element={<MyBooking />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Router;
