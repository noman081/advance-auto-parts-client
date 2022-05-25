import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "../src/Pages/Home/Home";
import Header from './Pages/Shared/Header';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import Purchase from './Pages/Purchase/Purchase';
import { ToastContainer } from 'react-toastify';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/User/MyOrders';
import AddReview from './Pages/Dashboard/User/AddReview';
import MyProfile from './Pages/Dashboard/User/MyProfile';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/purchase/:id' element={
          <RequireAuth><Purchase /></RequireAuth>
        }></Route>
        <Route path='dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>}>
          <Route index element={<MyOrders />}></Route>
          <Route path='myOrders' element={<MyOrders />}></Route>
          <Route path='review' element={<AddReview />}></Route>
          <Route path='myProfile' element={<MyProfile />}></Route>
        </Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
