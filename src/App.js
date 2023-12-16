import React from 'react';
import Home from './routes/home/home.component';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
}
