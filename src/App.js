import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Started from './Started';
import HomePage from './HomePage'; 
import Login from './Login'; 
import Signup from './Signup'; 
import ExploreHotels from './ExploreHotels';
import BookingsPage from './BookingsPage';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Profile from './Profile';
import Settings from './Settings';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Started />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/explore" element={<ExploreHotels />} />
        <Route path="/bookings" element={<BookingsPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/settings" element={<Settings/>} />
      </Routes>
    </Router>
  );
}

export default App;
