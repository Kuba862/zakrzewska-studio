import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header";

import StudioPage from './Pages/StudioPage';
import ContactPage from './Pages/ContactPage';
import OfferPage from './Pages/OfferPage';
import ProjectsPage from "./Pages/ProjectsPage";

function App() {
  return (
    <>
      <Router>
        <Header 
          home="/"
          projects="projekty"
          studio="studio"
          offer="oferta"
          contact_btn="kontakt" 
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projekty" element={<ProjectsPage />} />
          <Route path="/studio" element={<StudioPage />} />
          <Route path="/oferta" element={<OfferPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
