import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginUser from './pages/LoginUser/LoginUser';
import RegisterUser from './pages/RegisterUser/RegisterUser';
import Home from './pages/Home/Home';
import {ProtectedRoutes} from './component/ProtectedRoute';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Appointment from './pages/Appoinment/Appointment';
import Blog from './pages/Blog/Blog';
import {PublicRoutes} from "./component/ProtectedRoute"


function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route exact path='/' element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
          <Route exact path='/about' element={<ProtectedRoutes><About /></ProtectedRoutes>} />
          <Route exact path='/services' element={<ProtectedRoutes><Services /></ProtectedRoutes>} />
          <Route exact path='/appointment' element={<ProtectedRoutes><Appointment /></ProtectedRoutes>} />
          <Route exact path='/blog' element={<ProtectedRoutes><Blog/></ProtectedRoutes>} />
          <Route exact path='/register' element={<PublicRoutes><RegisterUser /></PublicRoutes>} />
          <Route exact path='/login' element={<PublicRoutes><LoginUser /></PublicRoutes>} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
