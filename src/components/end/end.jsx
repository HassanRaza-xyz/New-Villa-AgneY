import "./end.css";

const End = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center align-items-start">
        <div className="endpic1">
          <img style={{width:"100%"}} className="" src="video-bg.jpg" alt="" />
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            translateX: "-50%",
            translateY: "-50%"
          }} className="col-lg-4 offset-lg-4 text-center ">
            <p className="us">| Contact us</p>
            <h5 className="agent">
              Get In Touch With <br /> Our Agents
            </h5>
          </div>
        </div>
        <div id="ch7" className="col-md-6 mb-4">
          <div className="contact-form">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Your Name..." />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Your E-mail..." />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="Subject..." />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Your Message"></textarea>
            </div>
            <button className="submit-btn">Send Message</button>
          </div>
        </div>

        <div id="C6" className=" col-md-6 mb-4">
          <div className="Mapandform">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108818.74077868038!2d72.9337087094065!3d33.68442035381065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf7b52c11213%3A0xd5e3b9e4422e0e3d!2sIslamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1687110573626!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="contact-info ">
        <img src="email-icon.png" alt="email" />
        <div>
          <strong>info@villa.co</strong> <br />
          Business Email
        </div>
      </div>

      <div className="contact-info">
        <img src="phone-icon.png" alt="phone" />
        <div>
          <strong>010-020-0340</strong> <br />
          Phone Number
        </div>
      </div>
    </div>
  );
};

export default End;
