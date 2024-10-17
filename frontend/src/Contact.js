import React, { useState } from 'react';
import './Contact.css';
import logo from './logo.png'; 

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    submitted:false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);

    setFormData({
      ...formData,
      submitted: true,
    });

  };

  return (
    
    <div className="contact-page">
      <header className="contact-header">
      <div className="logo-container">
      <img src={logo} alt="Hotel Reservations App" className="home-logo" />
      </div>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <h1>Contact Us</h1>
      </header>
      <main className="contact-main">
        <section className="contact-info">
        <h2>Get in Touch</h2>
      <p>If you have any questions, feel free to reach out to us using the form below or contact us directly.</p>
      <ul>
        <li>
          <span className="contact-icon">📞</span> +1 234 567 890
        </li>
        <li>
          <span className="contact-icon">✉️</span> info@example.com
        </li>
        <li>
          <span className="contact-icon">📍</span> 11th October Street, Skopje, Macedonia
        </li>
      </ul>
        </section>

        <section className="contact-map">
  <h2>Our Location</h2>
  <div className="map-container">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2960.7965004658943!2d21.427833915495777!3d41.99734637921417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135415f7b7c5a36d%3A0x4fda9bc6a9fe8e78!2s11th%20October%20Street%2C%20Skopje!5e0!3m2!1sen!2smk!4v1697530141234!5m2!1sen!2smk"
      width="100%"
      height="450"
      allowFullScreen=""
      loading="lazy"
      aria-hidden="false"
      tabIndex="0"
      title="Our Location"
    ></iframe>
  </div>
</section>

<section className="social-media">
  <h2>Connect With Us</h2>
  <div className="social-icons">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-facebook-f"></i>
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-twitter"></i>
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-instagram"></i>
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin-in"></i>
    </a>
  </div>
</section>



<section className="faq">
  <h2>Frequently Asked Questions</h2>
  <br></br>
  <details>
    <summary>❓ What are your check-in and check-out times?</summary>
    <p>Check-in is at 3:00 PM and check-out is at 11:00 AM.</p>
  </details>
  <details>
    <summary>📶 Do you offer free Wi-Fi?</summary>
    <p>Yes, we offer complimentary Wi-Fi in all our hotels.</p>
  </details>
  <details>
    <summary>🛠️ Can I cancel or modify my reservation?</summary>
    <p>Yes, you can cancel or modify your reservation up to 24 hours before check-in.</p>
  </details>
  <details>
    <summary>🚗 Is parking available at the hotel?</summary>
    <p>Yes, we offer free parking for all guests.</p>
  </details>
  <details>
    <summary>🍽️ Do you have an on-site restaurant?</summary>
    <p>Yes, we have a restaurant that serves breakfast, lunch, and dinner.</p>
  </details>
  <details>
    <summary>🐾 Are pets allowed in the hotel?</summary>
    <p>Yes, we are a pet-friendly hotel. Additional charges may apply.</p>
  </details>
  <details>
    <summary>💳 What payment methods do you accept?</summary>
    <p>We accept all major credit cards, debit cards, and cash payments.</p>
  </details>
  <details>
    <summary>🛏️ Can I request an extra bed in my room?</summary>
    <p>Yes, extra beds are available upon request and subject to availability.</p>
  </details>
  <details>
    <summary>🚭 Is smoking allowed in the hotel?</summary>
    <p>Our hotel is a non-smoking facility. Smoking is permitted in designated areas outside.</p>
  </details>
  <details>
    <summary>🌐 Do you offer room service?</summary>
    <p>Yes, room service is available 24/7 for your convenience.</p>
  </details>
</section>


        <section className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <br></br>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email</label>
            <br></br>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="message">Message</label>
            <br></br>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
          {formData.submitted && <p className="form-confirmation">Thank you for your message! We will get back to you soon.</p>}
        </section>
     

<section className="newsletter-signup">
  <h2>Stay Updated</h2>
  <p>Subscribe to our newsletter for the latest news and exclusive offers.</p>
  <form>
    <input type="email" placeholder="Enter your email" required />
    <button type="submit">Subscribe</button>
  </form>
</section>

 </main>


      <footer className="about-footer">
        <p>&copy; 2024 CheckInn. All rights reserved.</p>
        <p>Website by <a href="#">Anja Stevkovska</a></p>
      </footer>
    </div>
  );
}
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
export default Contact;