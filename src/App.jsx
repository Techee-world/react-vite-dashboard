import React from 'react'
import NavBar from './component/NavBar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './routeset/HomePage';
import FrameWorksPage from './routeset/FrameWorksPage';
import './App.css'
import About from './component/page/about/About';
import AboutPage from './routeset/AboutPage';
import HistoryPage from './routeset/HistoryPage';
import FoundPage from './routeset/foundPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex md:flex-row flex-col h-full ">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/frameworks" element={<FrameWorksPage />} />
            <Route path="/founders" element={<FoundPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/history" element={<HistoryPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App


// https://spectrum.ieee.org/the-top-programming-languages-2023
// https://www.stackscale.com/blog/most-popular-programming-languages/
// https://devskiller.com/blog/history-of-programming-languages/