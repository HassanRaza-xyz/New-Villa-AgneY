import "./dummy.css";
import Button from "react-bootstrap/Button";
  
  const Dummy = () => {
    return (
      
      <div className="best-deal-section container mt-5">
        
        <div id="ch4" className="row align-items-center">
          <div className="best-deal-section container mt-5">
            <div className="row align-items-center">
              <div className="col-8 md-4 txtt  ">
                <p className="smalltext">| Best Deal</p>
                <span>
                  Find Your Best Deal <br /> Right Now!{" "}
                </span>
              </div>
              <div className="col-4 md-5">
                <button className="btn btn-primary me-md-2 bttn" type="button">
                  <span className="tt">Apartment</span>
                </button>
                <button className="btn btn-primary bttn" type="button">
                  <span className="t">Villa House</span>
                </button>
                <button className="btn btn-primary me-md-2 bttn" type="button">
                  <span className="t">Pent House</span>
                </button>

                <br />
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-md-4 mb-4 p-4  total-body">
                <div className="mb-4 info-roww">
                  <span className=" namee">Total Flat surface</span>
                  <strong className="valee">185 m2</strong>
                </div>

                <div className="mb-4 info-roww">
                  <span className="namee">Floor no </span>
                  <strong className="valee">26th</strong>
                </div>

                <div className="mb-4 info-roww">
                  <span className="namee">No of rooms</span>
                  <strong className="valee">4</strong>
                </div>

                <div className="mb-4 info-roww">
                  <span className="namee">Parking Avaliable</span>
                  <strong className="valee">Yes</strong>
                </div>

                <div className="mb-4 info-roww">
                  <span className="namee">Payment Process</span>
                  <strong className="valee">Bank</strong>
                </div>
              </div>

              <div className="col-md-4 mb-4 mt-5 infoo-boody">
                <img
                  className="IMAGINE"
                  src="/deal-01.jpg"
                  alt="property image"
                />
              </div>

              <div id="C5" className="col-md-4 TAZT">
                <h5>HELLO THERE</h5>
                <p className="TEXTTTT">
                  Lorem ipsum dolor sit amet consectetur <br /> <br /> adipisicing
                  elit. <br /> Perspiciatis ea vitae facilis deleniti olor sit
                  amet consectetur <br /> adipisicing elit. <br />
                  <br />
                  Perspiciatis ea vitae facilis deleniti commodi. Non cum iure
                  sint delectus facilis. <br />
                  Sed ipsam incidunt esse aspernatur sint provident quidem laborum
                  voluptatum <br />
                  <br />
                  .commodi. Non cum iure sint delectus facilis. Sed ipsam incidunt
                  esse aspernatur sint provident <br />
                  <br /> quidem laborum voluptatum.
                </p>
                <Button className="BUTTOON" variant="secondary">
                  Secondary
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Dummy;
