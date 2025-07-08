import "./newcards.css";

const Newcards = () => {
  return (
    <div className="container  ">
      <div className=" text-center">
        <h6 className="smallheading">| Video View</h6>
        <h2 className="textabovecard">
          We Provide <br /> The best Property <br /> You Like
        </h2>
      </div>

      <div className="row ok">
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
          <div className="card  ">
            <img
              src="/property-01.jpg"
              className="card-img"
              alt="Property Pic"
            />
            <div>
              {" "}
              <p className="luxury">Luxury Villa</p>
            </div>
            <div className="card-body">
              <h4 className="card-title">34 Beach Street, Miami, OR 42680</h4>
              <p className="card-text">
                Bedrooms: <b>8</b> &nbsp; Bathrooms: <b>8</b>
                <br />
                <br />
                Area: <b>545m²</b> &nbsp; Floor: <b>3</b>
                <br />
                <br />
                Parking: <b>6 spots</b>
              </p>
              <p className="text-muted">Schedule a Visit</p>
            </div>
          </div>
        </div>

        <div id="#C5" className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
          <div className="card">
            <img
              src="/property-02.jpg"
              className="card-img"
              alt="Property Pic"
            />
            <div>
              {" "}
              <p className="luxury">Beach House</p>
            </div>
            <div className="card-body">
              <h4 className="card-title">54 Ocean Avenue, \ OR 42680</h4>
              <p className="card-text">
                Bedrooms: <b>6</b> &nbsp; Bathrooms: <b>5</b>
                <br />
                <br />
                Area: <b>450m²</b> &nbsp; Floor: <b>2</b>
                <br />
                <br />
                Parking: <b>4 spots</b>
              </p>
              <p className="text-muted">Schedule a Visit</p>
            </div>
          </div>
        </div>

        <div id="#C5" className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4">
          <div className="card">
            <img
              src="/property-02.jpg"
              className="card-img"
              alt="Property Pic"
            />
            <div>
              <p className="luxury">Pent House</p>
            </div>
            <div className="card-body">
              <h4 className="card-title">54 Ocean Avenue, Miami, OR 42680</h4>
              <p className="card-text">
                Bedrooms: <b>6</b> &nbsp; Bathrooms: <b>5</b>
                <br />
                <br />
                Area: <b>450m²</b> &nbsp; Floor: <b>2</b>
                <br />
                <br />
                Parking: <b>4 spots</b>
              </p>
              <p className="text-muted">Schedule a Visit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newcards;
