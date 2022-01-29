import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Views/Home';
import Exchange from './Views/Exchange';
import Tutorials from './Views/Tutorials';
import Wallets from './Views/Wallets';
import LoggedOutLayout from './Layouts/LoggedOutLayout';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoggedOutLayout />} >
            <Route path="/" element={<Home />} />
            <Route path="/exchange" element={<Exchange />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/wallets" element={<Wallets />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  );
}

export default App;
