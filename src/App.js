import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home  from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import LoginRegister from './components/Login/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/login" element={<LoginRegister />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
