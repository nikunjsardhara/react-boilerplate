import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Views/Home';
import Exchange from './Views/Exchange';
import Tutorials from './Views/Tutorials';
import Wallets from './Views/Wallets';
import LoggedOutLayout from './Layouts/LoggedOutLayout';
import { Provider } from 'react-redux';
import { store } from './store';
function App() {
  return (
    <>
      <Provider store={store}>
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
      </Provider>
    </>
  );
}

export default App;
