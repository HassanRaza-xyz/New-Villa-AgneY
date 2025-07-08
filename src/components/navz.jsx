import { NavLink } from 'react-router-dom';
import './navz.css';

function Navz() {
  return (
    <nav className="navbarr ">
      <div className="header">
        <div className="header-top">
          <div className="left-info">
            <span>
              <img src="/email.svg" alt="Email" className="info-icon" />
              info@company.com
            </span>
            <span>
              <img src="/map-fill.svg" alt="Location" className="info-icon" />
              Sunny Isles Beach, FL 33160
            </span>
          </div>

          <div className="right-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <img className="icon" src="/facebook.svg" alt="Facebook" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
              <img className="icon" src="/twitter.svg" alt="Twitter" />
            </a>
            <a href="https://www.messenger.com" target="_blank" rel="noreferrer">
              <img className="icon" src="/messenger.svg" alt="Messenger" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <img className="icon" src="/instagram.svg" alt="Instagram" />
            </a>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <NavLink className="navbar-brand logo text-white me-4" to="/">VILLA</NavLink>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">☰</span>
            </button>

            <div className="collapse navbar-collapse nav-links" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/">Home</NavLink>
                  </li>
               <li className='nav-item'>
                 <NavLink className ={({ isActive}) => isActive ? "nav-link active" : "nav-link "} to="/about" >Property</NavLink>
               </li>
             <li className="nav-item">
                  <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/PropertyDetails">Property Details</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/contact">Contact Us</NavLink>
                </li>
              </ul>
              <button className="visit-btn">Schedule a visit</button>
            </div>
          </div>
        </nav>
      </div>
    </nav>
  );
}

export default Navz;
