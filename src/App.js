import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home  from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import LoginRegister from './components/Login/Login';
import Registration from "./components/Login/Registration"
import UserPage from "./components/Login/User"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/userPage" element={<UserPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
