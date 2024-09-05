import React from 'react';
import './AboutUs.css';
import logo from './logo.png';
import { useEffect } from 'react'; 

const AboutUs = () => {
  

  useEffect(() => {
    
    const handleSmoothScroll = (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.addEventListener('click', handleSmoothScroll));

    
    return () => {
      links.forEach(link => link.removeEventListener('click', handleSmoothScroll));
    };
  }, []); 

  useEffect(() => {
    
    const handleScroll = () => {
      const scrollTopButton = document.querySelector('.scroll-to-top');
      if (window.scrollY > 200) {
        scrollTopButton.classList.add('show');
      } else {
        scrollTopButton.classList.remove('show');
      }
    };

    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <div className="about-us">
      <div className="logo-container">
        <img src={logo} alt="Hotel Reservations App" className="home-logo" />
      </div>
      <br /><br />
      <section className="hero-section">
        <h1>About Us</h1>
        <p>Discover our journey and what drives us.</p>
      </section>

      <section id="our-story" className="our-story">
  <h2>Our Story</h2>
  <p>
    🌟 <strong>Established in 2024, CheckInn</strong> was born from a passion for travel and hospitality. Our mission is to make hotel booking <strong>seamless</strong> and <strong>enjoyable</strong> for everyone.
  </p>
  <p>
    🌐 We understand that finding the perfect place to stay can sometimes be overwhelming. That’s why we’ve created a platform that simplifies the process. At CheckInn, we bring together a wide range of accommodations, from <strong>luxury resorts</strong> to <strong>budget-friendly options</strong>, ensuring that every traveler can find the perfect match for their needs and preferences.
  </p>
  <p>
    🛏️ Our user-friendly interface allows you to <strong>explore</strong>, <strong>compare</strong>, and <strong>book hotels</strong> with ease, offering transparent pricing and personalized recommendations. We are committed to providing <strong>exceptional customer service</strong>, and our team is always ready to assist you with any questions or special requests.
  </p>
  <p>
    🌍 Whether you're planning a <strong>family vacation</strong>, a <strong>business trip</strong>, or a <strong>quick weekend getaway</strong>, CheckInn is your trusted partner in finding the best accommodations. With a focus on <strong>quality</strong>, <strong>reliability</strong>, and <strong>convenience</strong>, we aim to elevate your travel experience, making it more enjoyable and stress-free.
  </p>
  <p>
    ✨ Join us on your next adventure and discover the world with CheckInn, where your <strong>comfort</strong> and <strong>satisfaction</strong> are our top priorities.
  </p>
</section>

<section id="mission-statement" className="mission-statement">
  <h2>Our Mission</h2>
  <p>To deliver unparalleled hospitality experiences, ensuring our guests feel valued, comfortable, and inspired at every touchpoint.</p>
</section>


<section id="our-values" className="our-values">
  <h2>Our Values</h2>
  <div className="values-container">
    <div className="value-item">
      <span className="emoji">👥</span>
      <h3>Customer First</h3>
      <p>We prioritize our customers’ needs above all else, ensuring their satisfaction is our top priority. Our dedicated support team is always ready to assist you and address any concerns promptly.</p>
    </div>
    <div className="value-item">
      <span className="emoji">🌍</span>
      <h3>Innovation</h3>
      <p>We constantly innovate to enhance your experience, integrating the latest technologies to provide seamless and efficient solutions. Our goal is to make booking and travel as effortless as possible.</p>
    </div>
    <div className="value-item">
      <span className="emoji">❤️</span>
      <h3>Passion</h3>
      <p>Our team is passionate about hospitality and service, dedicated to creating memorable experiences for every guest. We believe in going the extra mile to ensure that your stay is exceptional and enjoyable.</p>
    </div>
    <div className="value-item">
      <span className="emoji">🤝</span>
      <h3>Integrity</h3>
      <p>We conduct our business with honesty and transparency, building trust through clear communication and ethical practices. Our commitment to integrity ensures that every interaction is genuine and respectful.</p>
    </div>
    <div className="value-item">
      <span className="emoji">💼</span>
      <h3>Professionalism</h3>
      <p>We maintain the highest standards of professionalism in all our interactions. Our team is skilled, knowledgeable, and dedicated to providing top-notch service, ensuring a reliable and efficient experience.</p>
    </div>
  </div>
</section>
    

      <section id="team-section" className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-container">
          <div className="team-member">
            <img src="path-to-image" alt="Team Member" />
            <h3>Anja Stevkovska</h3>
            <p>Founder & CEO</p>
            <p>Anja is dedicated to providing an exceptional travel experience through innovative solutions and customer-focused services. With a background in computer science and a passion for design, Anja leads CheckInn with a vision of excellence.</p>
          </div>
          {/* Add more team members as needed */}
          <div className="team-member">
            <img src="path-to-image" alt="Team Member" />
            <h3>John Doe</h3>
            <p>CTO</p>
            <p>John brings extensive experience in technology and software development to the team. His expertise ensures that CheckInn’s platform is cutting-edge and user-friendly.</p>
          </div>
          <div className="team-member">
            <img src="path-to-image" alt="Team Member" />
            <h3>Jane Smith</h3>
            <p>Head of Customer Service</p>
            <p>Jane is dedicated to delivering exceptional customer service. Her role involves ensuring that every guest has a smooth and satisfying experience.</p>
          </div>
        </div>
      </section>


<section id="virtual-tour" className="virtual-tour">
  <h2>Take a Virtual Tour</h2>
  <video controls>
    <source src="virtual-tour.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</section>


      <section id="call-to-action" className="call-to-action">
  <h2>Ready to Experience the Best?</h2>
  <p>Join our community of satisfied customers and start your unforgettable journey with us today!</p>
  <a href="/contact" className="cta-button">Get in Touch</a>
</section>



      <footer className="about-footer">
        <p>&copy; 2024 CheckInn. All rights reserved.</p>
        <p>Website by <a href="#">Anja Stevkovska</a></p>
      </footer>

      <button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        ↑
      </button>
    </div>
  );
};

export default AboutUs;