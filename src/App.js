import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RobotSearch from './Component/RobotSearch';
import UserDetails from './Component/UserDetails';

function HomePage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RobotSearch />} />
        <Route path="/user/:firstName/:email" element={<UserDetails />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default HomePage;