import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "../src/Pages/Home/Home";
import Header from './Pages/Shared/Header';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
