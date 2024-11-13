import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/layout";
import { LandingPage } from "./components/Home/landingPage";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/contact";
import { Skills } from "./components/Skills/skills";
import { Portfolio } from "./components/Portfolio/portfolio";
import { Dashboard } from "./components/Dashboard/dashboard";
import "./App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="skills" element={<Skills />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
