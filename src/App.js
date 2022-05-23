import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "../src/Pages/Home/Home";
import Header from './Pages/Shared/Header';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;