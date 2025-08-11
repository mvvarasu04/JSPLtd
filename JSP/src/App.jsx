import { Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import Navbar from './components/Navbar';
import Home from './pages/home';
import Courses from './pages/Courses';
import Centers from './pages/Centers';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/centers' element={<Centers />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App
