import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/home.jsx';
import About from './Pages/about.jsx';
import Contact from './Pages/contact.jsx';
import PropertyDetails from './Pages/PropertyDetails.jsx';
function App() {
  return (
    <div>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/PropertyDetails" element={<PropertyDetails />} />

      </Routes>

    </div>
  );
}

export default App;
