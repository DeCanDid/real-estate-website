import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Headers/Header';
import Hero from './components/Hero/Hero';
import './App.css'
import Companies from './components/Companies/Companies';
import Value from './components/Value/Value';
import Contact from './components/Contact/Contact';
import GetStarted from './components/GetStarted/GetStarted';
import Footer from './components/Footer/Footer';
import Residence from './components/Residences/Residence';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='App'>
      <div>
        <div className='white-gradient' />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residence />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
      <App />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
