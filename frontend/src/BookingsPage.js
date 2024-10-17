import React, { useState, useEffect } from 'react';
import './BookingsPage.css';
import logo from './logo.png';
import BookingDetailsModal from './BookingDetailsModal';

import { useNavigate } from 'react-router-dom';

function BookingsPage() {
  
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [sortOption, setSortOption] = useState('date');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOption, setFilterOption] = useState('');
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const bookingsPerPage = 6;
  const [setError] = useState(null);

  const navigate = useNavigate(); 
  const handleLogout = () => {
          navigate('/'); 
  };

    useEffect(() => {  
  
      
      const fetchBookings = async () => {
        try { 
    setTimeout(() => {
      setBookings([
        {
          id: 1,
          hotelName: 'Hotel Aleksandar Palace',
          checkIn: '2024-09-01',
          checkOut: '2024-09-07',
          guests: 2,
          price: '$1000',
          image: 'pictures/ap.jpg',
          bookingId: 'BK10001',
          contactNumber: '+389 2 123 4567',
        },
        {
          id: 2,
          hotelName: 'Hotel Senigallia',
          checkIn: '2024-10-15',
          checkOut: '2024-10-20',
          guests: 4,
          price: '$1500',
          image: 'pictures/tino.jpg',
          bookingId: 'BK10002',
          contactNumber: '+389 2 765 4321',
        },
        {
          id: 3,
          hotelName: 'Hotel City Park',
          checkIn: '2024-11-05',
          checkOut: '2024-11-10',
          guests: 3,
          price: '$1200',
          image: 'pictures/gor.jpg',
          bookingId: 'BK10003',
          contactNumber: '+389 2 345 6789',
        },
        {
          id: 4,
          hotelName: 'Hotel Porta',
          checkIn: '2024-09-10',
          checkOut: '2024-09-15',
          guests: 2,
          price: '$800',
          image: 'pictures/arka.jpg',
          bookingId: 'BK10004',
          contactNumber: '+389 2 234 5678',
        },
        {
        id: 5,
        hotelName: 'Hotel Aleksandar Palace',
        checkIn: '2024-09-01',
        checkOut: '2024-09-07',
        guests: 2,
        price: '$1000',
        image: 'pictures/ap.jpg',
        bookingId: 'BK10001',
        contactNumber: '+389 2 123 4567',
      },
      {
        id: 6,
        hotelName: 'Hotel Senigallia',
        checkIn: '2024-10-15',
        checkOut: '2024-10-20',
        guests: 4,
        price: '$1500',
        image: 'pictures/tino.jpg',
        bookingId: 'BK10002',
        contactNumber: '+389 2 765 4321',
      },
      {
        id: 7,
        hotelName: 'Hotel City Park',
        checkIn: '2024-11-05',
        checkOut: '2024-11-10',
        guests: 3,
        price: '$1200',
        image: 'pictures/gor.jpg',
        bookingId: 'BK10003',
        contactNumber: '+389 2 345 6789',
      },
      {
        id: 8,
        hotelName: 'Hotel Porta',
        checkIn: '2024-09-10',
        checkOut: '2024-09-15',
        guests: 2,
        price: '$800',
        image: 'pictures/arka.jpg',
        bookingId: 'BK10004',
        contactNumber: '+389 2 234 5678',
      }

      ]);
      
      setLoading(false);
    }, 1000);
  } catch (err) {
    setError('Failed to load bookings.');
    setLoading(false);
  }
};

fetchBookings();
}, [setError]);

    const sortedBookings = bookings.sort((a, b) => {
      if (sortOption === 'price') {
        return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
      } else if (sortOption === 'date') {
        return new Date(a.checkIn) - new Date(b.checkIn);
      }
      return 0;
    });
  
    const [filterGuests, setFilterGuests] = useState('');
    const [filterHotels, setFilterHotels] = useState([]);
    const [filterStatus, setFilterStatus] = useState('');
    const [searchBookingId, setSearchBookingId] = useState('');

    const filteredBookings = sortedBookings.filter(booking =>
      booking.bookingId.toLowerCase().includes(searchBookingId.toLowerCase()) &&
      booking.hotelName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterOption === '' || parseFloat(booking.price.replace('$', '')) <= filterOption) &&
      (filterGuests === '' || booking.guests >= (filterGuests === '5' ? 5 : parseInt(filterGuests)))
    );

  const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const handleFilterChange = (event) => {
      setFilterOption(event.target.value);
    };
  
    const handleSortChange = (event) => {
      setSortOption(event.target.value);
    };
  
    const handleViewDetails = (booking) => {
      setSelectedBooking(booking);
    };
  
    const handleCloseModal = () => {
      setSelectedBooking(null);
    };

    const handleCancelBooking = (id) => {
      setBookings(bookings.filter(booking => booking.id !== id));
    };

    const handleClearFilters = () => {
      setSearchQuery('');
      setFilterOption('');
      setSortOption('date');
    };
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
    
  

    if (loading) {
      return <div className="loading">Loading...</div>;
    }
    
  
    return (

    <>
       <div className="profile-iconsb">
        <a href="/profile" className="profiles-iconb">
            <img src="pictures/icons8-male-user-48.png" alt="Profile"/>
        </a>
        <a href="/settings" className="settings-iconb">
            <img src="pictures/icons8-settings-48.png" alt="Settings"/>
        </a>
        <a href="/logout" className="logout-iconb" onClick={handleLogout}>
            <img src="pictures/icons8-log-out-48.png" alt="Log Out"/>
        </a>        
    </div>

    
      <div className="bookings-page">
        <div className="logo-container">
          <img src={logo} alt="Hotel Reservations App" className="home-logo" />
        </div>
  
        <h1 className='h1booking'>Your Bookings</h1>
  
        <div className="filters">
          <input
            type="text"
            placeholder="Search by hotel name"
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
<input
  type="text"
  placeholder="Search by Booking ID"
  value={searchBookingId}
  onChange={(e) => setSearchBookingId(e.target.value)}
  className="search-input"
/>
          <select value={filterOption} onChange={handleFilterChange} className="filter-select">
            <option value="">No Filter</option>
            <option value="1000">Under $1000</option>
            <option value="1500">Under $1500</option>
            <option value="2000">Under $2000</option>
          </select>
          <select value={sortOption} onChange={handleSortChange} className="sort-select">
            <option value="date">Sort by Date</option>
            <option value="price">Sort by Price</option>
            <option value="guests">Sort by Guests</option>
          <option value="hotelName">Sort by Hotel Name</option>
          </select>
          
          <select value={filterHotels} onChange={(e) => setFilterHotels([...e.target.selectedOptions].map(option => option.value))} className="filter-select">
          <option value="date">Sort by Resort</option>
  <option value="Luxury Hotel">Luxury Hotel</option>
  <option value="Beachside Resort">Beachside Resort</option>
  <option value="Mountain Retreat">Mountain Retreat</option>
</select>

        <select value={filterGuests} onChange={(e) => setFilterGuests(e.target.value)} className="filter-select">
  <option value="">No Filter</option>
  <option value="1">1 Guest</option>
  <option value="2">2 Guests</option>
  <option value="3">3 Guests</option>
  <option value="4">4 Guests</option>
  <option value="5">5+ Guests</option>
</select>

<select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="filter-select">
  <option value="">All Statuses</option>
  <option value="confirmed">Confirmed</option>
  <option value="pending">Pending</option>
  <option value="canceled">Canceled</option>
</select>


  <button onClick={handleClearFilters} className="clear-filters">Clear Filters</button>
        </div>

        <div className="bookings-list">
          {filteredBookings.length > 0 ? (
            filteredBookings.map((booking) => (
              <div className="booking-item" key={booking.id}>
                <img src={booking.image} alt={booking.hotelName} className="booking-image" />
                <div className="booking-details">
                  <h2>{booking.hotelName}</h2>
                  <p><strong>Check-In:</strong> {booking.checkIn}</p>
                  <p><strong>Check-Out:</strong> {booking.checkOut}</p>
                  <p><strong>Guests:</strong> {booking.guests}</p>
                  <p><strong>Price:</strong> {booking.price}</p>
                  <p><strong>Booking ID:</strong> {booking.bookingId}</p>
                  <p><strong>Contact Number:</strong> {booking.contactNumber}</p>
                </div>
                <div className="booking-actions">
                  <button className="view-button" onClick={() => handleViewDetails(booking)}>View Details</button>
                  <button className="cancel-button" onClick={() => handleCancelBooking(booking.id)}>Cancel Booking</button>
                </div>
              </div>
            ))
          ) : (
            <p>No bookings found.</p>
          )}
          {selectedBooking && (
            <BookingDetailsModal booking={selectedBooking} onClose={handleCloseModal} />
          )}
        </div>


        <div className="pagination">
        <button
          className="prev-page"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &laquo; Prev
        </button>
        {[...Array(Math.ceil(filteredBookings.length / bookingsPerPage)).keys()].map((pageNumber) => (
          <button
            key={pageNumber + 1}
            className={`page-number ${pageNumber + 1 === currentPage ? 'active' : ''}`}
            onClick={() => handlePageChange(pageNumber + 1)}
          >
            {pageNumber + 1}
          </button>
        ))}
        <button
          className="next-page"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === Math.ceil(filteredBookings.length / bookingsPerPage)}
        >
          Next &raquo;
        </button>
      </div>
    </div>

    </>
  );
}
  
  export default BookingsPage;