import './slider.css';


const Slider = () => {
  return (
    <div style={{ margin: '10px' }}>
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">

          <div className="carousel-item active">
            <img src="/banner-01.jpg" className="d-block w-100" alt="Toronto Villa" />
            <div className="carousel-caption d-none d-md-block text-start" style={{ left: '20%', bottom: '30%' }}>
              <p className="location-badge">Toronto, <span style={{ color: 'orangered' }}>Canada</span></p>
              <h1 className="slider-heading">HURRY!<br />GET THE BEST<br />VILLA FOR YOU</h1>
            </div>
          </div>

          <div className="carousel-item">
            <img src="/banner-02.jpg" className="d-block w-100" alt="Melbourne Villa" />
            <div className="carousel-caption d-none d-md-block text-start" style={{ left: '20%', bottom: '30%' }}>
              <p className="location-badge">Melbourne, <span style={{ color: 'orangered' }}>Australia</span></p>
              <h1 className="slider-heading">BE QUICK !<br />GET THE BEST<br />VILLA IN TOWN</h1>
            </div>
          </div>

          <div className="carousel-item">
            <img src="/banner-03.jpg" className="d-block w-100" alt="Miami Villa" />
            <div className="carousel-caption d-none d-md-block text-start" style={{ left: '20%', bottom: '30%' }}>
              <p className="location-badge">Miami, <span style={{ color: 'orangered' }}>Florida</span></p>
              <h1 className="slider-heading">ACT NOW!<br />GET THE HIGHEST<br />LEVEL PENTHOUSE</h1>
            </div>
          </div>

        </div>

        <button className="carousel-control-prev slider-button" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next slider-button" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
