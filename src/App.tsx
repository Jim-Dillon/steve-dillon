import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Link } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ExhibitionsPage from './pages/ExhibitionsPage';
import ShowcasePage from './pages/ShowcasePage';
import ContactPage from './pages/ContactPage';


const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path='/steve-dillon' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />}>
        </Route>
        <Route path='/exhibitions' element={<ExhibitionsPage />} />
        <Route path='/showcase' element={<ShowcasePage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

export default App
