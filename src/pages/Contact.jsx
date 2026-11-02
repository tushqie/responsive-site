import './Contact.css';

function Contact() {
return (
<main className="contact-page">

  <section className="contact-header">
    <h1>Contact Us</h1>
    <p>Have a question or need assistance? We'd love to hear from you.</p>
  </section>

  <section className="contact-container">

    {/* Contact Information */}

    <div className="contact-info">

      <h2>Get In Touch</h2>

      <p>
        Feel free to contact us. Our team is always ready
        to help you with your questions and enquiries.
      </p>

      <div className="contact-detail">
        <h3>📍 Address</h3>
        <p>Lagos, Nigeria</p>
      </div>

      <div className="contact-detail">
        <h3>📧 Email</h3>
        <p>info@mysite.com</p>
      </div>

      <div className="contact-detail">
        <h3>📞 Phone</h3>
        <p>+234 800 000 0000</p>
      </div>

    </div>

    {/* Contact Form */}

    <div className="contact-form-wrapper">

      <h2>Send Us a Message</h2>

      <form className="contact-form">

        <div className="form-group">
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label>Subject</label>
          <input
            type="text"
            placeholder="Enter subject"
            required
          />
        </div>

        <div className="form-group">
          <label>Your Message</label>
          <textarea
            rows="5"
            placeholder="Write your message..."
            required
          ></textarea>
        </div>

        <button type="submit" className="contact-btn">
          Send Message
        </button>

      </form>

    </div>

  </section>

</main>

);
}

export default Contact;