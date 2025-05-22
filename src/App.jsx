import  { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cards from './components/Cards'
import Testimonials from './components/Testimonials'
import Join from './components/Join'
import Footer from './components/Footer'
import Form from './pages/Form'
import Greet from './pages/Greet'
import Table from "./components/Table";
const App = () => {
    const [formOpen, setFormOpen] = useState(false);
    const [greetOpen, setgreetOpen] = useState(false);
      const [submit, setsubmit] = useState([]);

  return (
    <Router>
      <Navbar setFormOpen={setFormOpen} />
      {formOpen && <Form setFormOpen={setFormOpen} setgreetOpen={setgreetOpen}/>}
{greetOpen && <Greet setgreetOpen={setgreetOpen} />}
      <Home/>
      <Cards/>
      <Testimonials/>
      <Join/>
      <Footer/>
      <Routes>

      </Routes>
    </Router>
  )
}

export default App
