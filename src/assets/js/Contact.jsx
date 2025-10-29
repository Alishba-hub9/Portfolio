import ContactImg from "../images/contact-img.svg";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-heading text-center">GET IN TOUCH</h2>

        <div className="row align-items-end align-items-lg-center justify-content-center gy-5">
          <div className="col-lg-10 col-md-12 col-10">
            <div className="row align-items-end align-items-lg-center gx-lg-5">
              <div className="col-md-7 col-12">
                <form className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your full name" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Type your message..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-submit">
                    Send Message
                  </button>
                </form>
              </div>

              <div className="col-md-5 d-none d-md-block">
                <div className="contact-image">
                  <img src={ContactImg} alt="Contact" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
