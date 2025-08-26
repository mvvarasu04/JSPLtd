import { Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import Navbar from './components/Navbar';
import Home from './pages/home';
import Courses from './pages/Courses';
import Centers from './pages/Centers';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer  from './components/Footer';
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
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
