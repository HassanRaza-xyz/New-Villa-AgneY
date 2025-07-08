import './example.css';

const DevExample = () => {
  return (  <div>
      <nav className="navbar navbar-light"></nav>

      <ul className="nav ">
        <li className="nav-item">
          <a
            className="nav-link active"
            aria-current="page"
            href="mailto:info@company.com"
          >
            <img src="/email-icon.png" alt="Email Icon" /> <i> info@company.com</i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <img src="/email-icon.png" alt="Location" width="25" />{" "}
            <i> Sunny Isles Beach, FL 33160</i>
          </a>

          <a href="https://www.facebook.com" target="_blank">
            <img  className="pic" src="/facebook.svg" alt="/Facebook pic" />
          </a>

          <a href="https://www.messenger.com" target="_blank">
            <img className="pic" src="/messenger.svg" alt="/Messenger" />
          </a>

          <a href="https://www.twitter.com" target="_blank">
            <img className="pic" src="/twitter.svg" alt="Twitter" />
          </a>

          <a href="https://www.instagram.com" target="_blank">
            <img className="pic" src="/instagram.svg" alt="Instagram" />
          </a>
        </li>
      </ul>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="#"
            style={{
              fontSize: 'xx-large',
              fontFamily:
                "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif",
            }}
          >
            <p title="Scroll Down To show The Details of villa">VILLA</p>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Property
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Property Details
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact us
                </a>
              </li>
            </ul>
            <button className="aa">Schedule a visit</button>
          </div>
        </div>
      </nav>
      <img src="" alt="" />
    </div>
  );
};
export default DevExample