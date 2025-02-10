import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router';
import ShareablePortfolioTemplate from './templates/ShareablePortfolioTemplate';
import LandingPage from './pages/LandingPage';
import Upload from './pages/Upload';
import DownloadPage from './pages/DownloadPage';
const App = () => {


  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/upload' element={<Upload />} />
      {/* <Route path='/download' element={<Template02 />}/> */}
      {/* <Route path='/download' element={<Template03 />}/> */}
      <Route path='/download' element={<DownloadPage />}/>
      {/* <Route path='/download' element={<Template04 />}/> */}

      <Route path='/:username' element={<ShareablePortfolioTemplate/>} />
    </Routes>
  );
};

export default App;
