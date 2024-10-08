import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Career from './Components/Career/Career';
import ApplyForm from './Components/Career/ApplyForm';


function App() {
 

  return (
    <>
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/career" element={<Career/>} />
        <Route path="/applyform" element={<ApplyForm/>} />

      </Routes>
      <Footer/>
      
    </Router>


    

    </>
  )
}

export default App
