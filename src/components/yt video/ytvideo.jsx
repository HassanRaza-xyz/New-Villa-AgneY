import { redirect } from "react-router-dom";
import "./ytvideo.css";

const Ytvideo = () => {
  return (
    <>
      <div className="viodeo section">
        <div className="container">
          <div className="roww">
            <div className="col-lg-4 offset-lg-4 text-center">
              <h6 className="small-heading">| Video View</h6>
              <h2 className="fonttext">Get Closer View & Different Feelings</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="viideo-content">
        <div className="container">
          <div className="roww">
            <div className="col-lg-10 offset-lg-1">
              <div className="video-frame">
                <img  src="/video-frame.jpg" alt="Picture " className="pikl" />
                <a href="https://youtube.com" target="_blank">
                  <img className="yt" src="/youtube.svg" alt="Youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fun-facts">
        <div className="container">
          <div className="roww">
            <div className="col-lg-12">
              <div className="wrapper">
                <div className="roww text-center">
                  <div className="col-lg-4">
                    <div className="counter">
                      <h2 className="count-title-count-number">34</h2>
                      <p className="count-text">Buildings <br /> Finished Now!</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="counter">
                      <h2 className="count-title-count-number">12</h2>
                      <p className="count-text">Years <br /> Experience</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="counter">
                      <h2 className="count-title-count-number">24</h2>
                      <p className="count-text">Awards <br /> Won 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ytvideo;
