import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/layout';
import LandingPage from './components/Home/landingPage';
import About from './components/About/About';
import Contact from './components/Contact/contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<LandingPage />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
