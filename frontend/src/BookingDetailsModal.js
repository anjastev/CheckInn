import React from 'react';
import './BookingDetailsModal.css'; 

const BookingDetailsModal = ({ booking, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Booking Details</h2>
        <p><strong>Hotel Name:</strong> {booking.hotelName}</p>
        <p><strong>Check-In:</strong> {booking.checkIn}</p>
        <p><strong>Check-Out:</strong> {booking.checkOut}</p>
        <p><strong>Guests:</strong> {booking.guests}</p>
        <p><strong>Price:</strong> {booking.price}</p>
        <p><strong>Booking ID:</strong> {booking.bookingId}</p>
        <p><strong>Contact Number:</strong> {booking.contactNumber}</p>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default BookingDetailsModal;
