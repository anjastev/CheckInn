import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css';
import logo from './logo.png'; 
import image from './SLN-Blog-8Destinations-1537x952-1.jpg';

function HomePage() {
  const navigate = useNavigate();


  const handleLogout = () => {

    navigate('/'); 
  };


 

  return (
    <div className="home-page">
      <header className="home-header">
        <img src={logo} alt="Hotel Reservations App" className="home-logo" />
        <nav className="home-nav">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/explore">Explore Hotels</Link></li>
            <li><Link to="/bookings">Your Bookings</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>


        <div className
        ="profile-icons">
        <a href="/profile" className
        ="profile-icon">
            <img src="pictures/icons8-male-user-48.png" alt="Profile"/>
        </a>
        <a href="/settings" className="settings-icon">
            <img src="pictures/icons8-settings-48.png" alt="Settings"/>
        </a>
        <a href="/logout" className
        ="logout-icon" onClick={handleLogout}>
            <img src="pictures/icons8-log-out-48.png" alt="Log Out"/>
        </a>
    </div>

        <h1>Welcome to CheckInn</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search for hotels, destinations..." />
          <button type="button">Search</button>
        </div>
        <br></br><br></br>
      </header>

<img src={image} alt="Background" className="image" /> 
      <section className="hero-section">
      
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Discover Your Next Adventure</h1>
          <p>Find the best places to stay and book your dream vacation today.</p>
          <Link to="/explore" className="hero-button">Book Now</Link>
        </div>
      </section>
      

      <div className="testimonials-section">
        <h2 className='testimonials-section-h2'>What Our Customers Say</h2>
        <div className="testimonials-carousel">
          <div className="testimonial-item">
            <p>"This service was amazing! It made our trip so much easier and enjoyable."</p>
            <div className="customer-info">
              <img src="pictures/4814961.png" alt="Customer 1" />
              <span>John Doe</span>
            </div>
          </div>
          <div className="testimonial-item">
            <p>"I couldn't be happier with the booking process. It was smooth and simple."</p>
            <div className="customer-info">
              <img src="pictures/customer-icon.png" alt="Customer 2" />
              <span>Jane Smith</span>
            </div>
          </div>
          <div className="testimonial-item">
            <p>"This service was amazing! It made our trip so much easier and enjoyable."</p>
            <div className="customer-info">
              <img src="pictures/4814961.png" alt="Customer 1" />
              <span>John Doe</span>
            </div>
          </div>
          <div className="testimonial-item">
            <p>"I couldn't be happier with the booking process. It was smooth and simple."</p>
            <div className="customer-info">
              <img src="pictures/customer-icon.png" alt="Customer 2" />
              <span>Jane Smith</span>
            </div>
          </div>
          <div className="testimonial-item">
            <p>"This service was amazing! It made our trip so much easier and enjoyable."</p>
            <div className="customer-info">
              <img src="pictures/4814961.png" alt="Customer 1" />
              <span>John Doe</span>
            </div>
          </div>
          <div className="testimonial-item">
            <p>"I couldn't be happier with the booking process. It was smooth and simple."</p>
            <div className="customer-info">
              <img src="pictures/customer-icon.png" alt="Customer 2" />
              <span>Jane Smith</span>
            </div>
          </div>
          


        </div>
      </div>
    

      <main className="home-main">
        <section className="home-section">
          <h2>Explore Our Hotels</h2>
          <p>Discover the best places to stay at the best prices.</p>
          <br></br>
          <Link to="/explore" className="home-button">Explore Hotels</Link>
        </section>
        <section className="home-section">
          <h2>Your Bookings</h2>
          <p>Manage your bookings with ease.</p>
          <br></br>
          <Link to="/bookings" className="home-button">View Bookings</Link>
        </section>
       
        <section className="popular-destinations">
  <h2>Popular Destinations</h2>
  <div className="destinations-grid">
    <div className="destination-item">
      <img src="pictures/download (1).jpg" alt="Japan" />
      <div className="overlay">
        <h3>Japan</h3>
        <p>Explore the rich culture and modern wonders of Japan.</p>
      </div>
    </div>
    <div className="destination-item">
      <img src="pictures/download (2).jpg" alt="Russia" />
      <div className="overlay">
        <h3>Russia</h3>
        <p>Discover the vast landscapes and historical landmarks of Russia.</p>
      </div>
    </div>
    <div className="destination-item">
      <img src="pictures/download (3).jpg" alt="India" />
      <div className="overlay">
        <h3>India</h3>
        <p>Experience the vibrant culture and diverse traditions of India.</p>
      </div>
    </div>
  </div>
  <br />
  <div className="destinations-grid">
    <div className="destination-item">
      <img src="pictures/download (4).jpg" alt="Finland" />
      <div className="overlay">
        <h3>Finland</h3>
        <p>Embrace the stunning natural beauty and serenity of Finland.</p>
      </div>
    </div>
    <div className="destination-item">
      <img src="pictures/download (5).jpg" alt="Las Vegas" />
      <div className="overlay">
        <h3>Las Vegas</h3>
        <p>Experience the excitement and glamour of Las Vegas.</p>
      </div>
    </div>
    <div className="destination-item">
      <img src="pictures/download (6).jpg" alt="Egypt" />
      <div className="overlay">
        <h3 >Egypt</h3>
        <p>Explore the ancient history and wonders of Egypt.</p>
      </div>
    </div>
  </div>
</section>

      </main>

      
      <footer className="home-footer">
  <div className="footer-content">
    <div className="social-media">
      <i className="fab fa-facebook-f"></i>
      <i className="fab fa-twitter"></i>
      <i className="fab fa-instagram"></i>
    </div>

    <div className="newsletter">
      <h4>Subscribe to our Newsletter</h4><br></br>
      <form>
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
    
    <div className="footer-nav">
      <ul>
        <li><Link to="/privacy">Privacy Policy</Link></li>
        <li><Link to="/terms">Terms of Service</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>

    <div className="footer-bottom">
      <p>&copy; 2024 CheckInn. All rights reserved.</p>
      <p className='pf'>Website by <a href="https://my-cv-app-omega.vercel.app/">Anja Stevkovska</a></p>
    </div>
  </div>
</footer>

  {/* <div className={`chat-widget ${isChatOpen ? 'open' : ''}`}>
        <div className="chat-header" onClick={toggleChat}>
          <span>Live Chat Support</span>
          <span className="chat-toggle-icon">{isChatOpen ? '-' : '+'}</span>
        </div>
        {isChatOpen && (
          <div className="chat-body">
            <div id="tawkToWidget"></div>
          </div>
        )}
      </div>

      <div className="chat-icon" onClick={toggleChat}>
        💬
      </div> 
        */}

    </div>

  );
}
export default HomePage;


