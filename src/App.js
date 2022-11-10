import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className='max-w-8xl mx-auto px-12 bg-white'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="appointment" element={<Appointment></Appointment>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div >
  );
}

export default App;
