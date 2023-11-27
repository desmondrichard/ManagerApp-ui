import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/dashboard' element={<Header />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
