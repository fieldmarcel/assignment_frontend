import React from 'react';
import { useState, Suspense, lazy } from 'react';

const Navbar = lazy(() => import('./components/Navbar'));
const Home = lazy(() => import('./components/Home'));
const Cards = lazy(() => import('./components/Cards'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Join = lazy(() => import('./components/Join'));
const Footer = lazy(() => import('./components/Footer'));
const Form = lazy(() => import('./pages/Form'));
const Greet = lazy(() => import('./pages/Greet'));
const Table = lazy(() => import('./components/Table'));

import { BrowserRouter as Router, Routes } from 'react-router-dom';
const App = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [greetOpen, setgreetOpen] = useState(false);
  const [submit, setsubmit] = useState([]);

  const handleformsubmit = (data) => {
    setsubmit((prev) => [...prev, data]);
    setFormOpen(false);
    setgreetOpen(true);
  };

  return (
    <Router>
      <Suspense fallback={<div>Loading........</div>}>
        <Navbar setFormOpen={setFormOpen} />
        {formOpen && <Form setFormOpen={setFormOpen} setgreetOpen={setgreetOpen} onSubmit={handleformsubmit} />}
        {greetOpen && <Greet setgreetOpen={setgreetOpen} />}
        <Home setFormOpen={setFormOpen} />
        <Cards />
        <Testimonials />
        <Join />
        {!formOpen && <Table data={submit} />}
        <Footer />
        <Routes></Routes>
      </Suspense>
    </Router>
  );
};

export default App;
