import './card.css';
import { FaRegFileAlt, FaFileContract, FaMoneyBill, FaShieldAlt } from 'react-icons/fa';

const Card = () => {
  return (
    <div className="property-container">
      <div className="col-4 property-left">
        <img src="/featured.jpg" alt="room" className="property-image" />
        <div className="property-icon">
          <img style={{ backgroundColor: 'white' }} src="info-icon-01.png" alt="icon" />
        </div>
      </div>

      <div id='C4' className="col-4 property-middle">
        <p className="featured-text">| FEATURED</p>
        <h2 className="property-title">Best Apartment<br />& Sea View</h2>

        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Best useful links?
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Find all necessary documents and policies regarding purchase and ownership. Find all necessary services and 24/7.
              </div>
            </div>
          </div>

          <div className=" accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                How does this work?
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                You contact us, book a visit, finalize the paperwork and it’s yours. Find all necessary services and 24/7.
              </div>
            </div>
          </div>

          <div className=" accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Why is Villa Agency the best?
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                We provide exclusive listings with top-tier services and 24/7 support. Find all necessary services and 24/7.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-4 property-right">
        <div className="info-item">
          <FaRegFileAlt className="info-icon" />
          <div>
            <strong>250 m²</strong><br />
            <span>Total Flat Space</span>
          </div>
        </div>

        <div className="info-item">
          <FaFileContract className="info-icon" />
          <div>
            <strong>Contract</strong><br />
            <span>Contract Ready</span>
          </div>
        </div>

        <div className="info-item">
          <FaMoneyBill className="info-icon" />
          <div>
            <strong>Payment</strong><br />
            <span>Payment Process</span>
          </div>
        </div>

        <div className="info-item">
          <FaShieldAlt className="info-icon" />
          <div>
            <strong>Safety</strong><br />
            <span>24/7 Under Control</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
