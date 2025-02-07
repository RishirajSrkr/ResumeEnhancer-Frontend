import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router';
import Template02 from './templates/Template02';
import Template03 from './templates/Template03';
import Template04 from './templates/Template04';
import LandingPage from './pages/LandingPage';
import Upload from './pages/Upload';
const App = () => {


  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/upload' element={<Upload />} />
      <Route path='/download' element={<Template02 />}/>
      {/* <Route path='/download' element={<Template03 />}/> */}
      {/* <Route path='/download' element={<Template04 />}/> */}
    </Routes>
  );
};

export default App;
