import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcoming from './components/welcoming';
import FirstPage from './components/firstpage'; // Import the next page component
import NoPage from './components/no';
import SorryPage from './components/sorry';
import Yay from './components/yay';
import LovePage from './components/loveu';
import Lover from './components/lover';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/welcome" element={<Welcoming />} />
        <Route path="/no" element={<NoPage />} />
        <Route path="/sorry" element={<SorryPage />} />
        <Route path="/yay" element={<Yay />} /> 
        <Route path="/love" element={<LovePage />} />
        <Route path="/lover" element={<Lover />} /> {/* Define the route for the next page */}
      </Routes>
    </Router>
  );
}

export default App;