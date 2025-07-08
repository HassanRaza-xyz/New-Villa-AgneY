import './header.css'
const Header = () => {
  return (
    <div className="header">
      <div className="header-top">
    <div className="left-info">
  <span>
    <img src="/email.svg" alt="Email Icon" className="info-icon" />
    info@company.comD
  </span>
  <span>
    <img src="/map-fill.svg" alt="Location Icon" className="info-icon" />
    Sunny Isles Beach, FL 33160
  </span>
</div>

        <div className="right-icons">
       <a href="https://www.facebook.com" target="_blank">
  <img className='icon' src="/facebook.svg" alt="Facebook" />
</a>
<a href="https://www.twitter.com" target="_blank" >
  <img className='icon' src="/twitter.svg" alt="Twitter" />
</a>
<a href="https://www.messenger.com" target="_blank">
  <img className='icon' src="/messenger.svg" alt="Messenger" />
</a>
<a href="https://www.instagram.com" target="_blank">
  <img className='icon' src="/instagram.svg" alt="Instagram" />
</a>
  </div>
      </div>

      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <div className="logo">VILLA</div>

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
              <li className="active nav-item ">Home</li>
            <a href="#C4">  <li className="nav-item">Properties</li></a>
            <a href="#C5">     <li className="nav-item">Property Details</li></a>
             <a href="#C6">    <li className="nav-item">Contact Us</li></a>
            </ul>
            <button className="visit-btn">Schedule a visit</button>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header