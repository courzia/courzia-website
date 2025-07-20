import React from 'react';
import AppHome from './App-Home';
import TermsAndCondition from './tnc-page';
import GetBook from "./get-book"
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppHome />} />
      <Route path="/tnc" element={<TermsAndCondition />} />
      <Route path="/get-book" element={<GetBook />} />
    </Routes>
  );
};

export default App;
