import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/layout';
import LandingPage from './components/Home/landingPage';
import About from './components/About/About';
import Contact from './components/Contact/contact';
import Portfolio from './components/Portfolio/portfolio';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<LandingPage />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='portfolio' element={<Portfolio />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
