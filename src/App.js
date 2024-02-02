// import './App.css';
import Companies from './components/Companies/Companies';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import GetStarted from './components/GetStarted/GetStarted';
import Header from './components/Headers/Header';
import Hero from './components/Hero/Hero';
import AboutPg from './components/Links/AboutPg';
import Residence from './components/Residences/Residence';
import Value from './components/Value/Value';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/head' element={<Header />} />
          <Route path='/hero' element={<Hero />} />

          <Route path='/companies' element={<Companies />} />
          <Route path='/residence' element={<Residence />} />
          <Route path='/values' element={<Value />} />
          <Route path='/us' element={<Contact />} />
          <Route path='/getstart' element={<GetStarted />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='/abt' element={<AboutPg />} />


        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
