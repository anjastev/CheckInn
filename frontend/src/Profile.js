import React from 'react';
import { useState } from 'react';
import './Profile.css';

const Profile = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <div className="profile-container">
        <h1>My Profile</h1>
        <div className="profile-info">
            <img src="pictures/271861794_2128130720686149_7185721109129941231_n.jpg" alt="Profile" className="profile-picture" />
            <div className="profile-details">
                <h2>Anja Stevkovska</h2>
                <p>Email: stevkovskaanja@gmail.com</p>
                <p>Member since: July 2024</p>
            </div>
        </div>
        <button className="edit-profile-btn" onClick={openModal}>Edit Profile</button>

       
        <div className="profile-sections">
            <div className="profile-section">
                <h3>Upcoming Bookings</h3>
                <ul>
                    <li>Hotel Paradise - Check-in: Oct 12, 2024</li>
                    <li>Seaside Resort - Check-in: Nov 5, 2024</li>
                    <li>Mountain Lodge - Check-in: Dec 22, 2024</li>
                </ul>
            </div>

            <div className="profile-section">
                <h3>Booking History</h3>
                <ul>
                    <li>Urban Hotel - Stayed: Sep 2-5, 2024</li>
                    <li>Luxury Suite - Stayed: Aug 15-20, 2024</li>
                    <li>City Hostel - Stayed: Jul 10-12, 2024</li>
                </ul>
            </div>

            <div className="profile-section">
                <h3>Saved Hotels</h3>
                <ul>
                    <li>Grand Palace Hotel</li>
                    <li>Sunny Beach Resort</li>
                    <li>Downtown Boutique Hotel</li>
                </ul>
            </div>

            <div className="profile-section">
                    <h3>Payment Methods</h3>
                    <ul>
                        <li>Visa ending in 1234</li>
                        <li>MasterCard ending in 5678</li>
                        <li>Add New Payment Method</li>
                    </ul>
                </div>

                <div className="profile-section">
                    <h3>Loyalty Points</h3>
                    <p>You have 1,200 points available</p>
                
                </div>

                <div className="profile-section">
                    <h3>Support</h3>
                    <ul>
                        <li>Contact Support</li>
                        <li>FAQ</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
            </div>

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <form className="edit-profile-form">
                            <label>
                                Name:
                                <input type="text" defaultValue="Anja Stevkovska" />
                            </label>
                            <label>
                                Email:
                                <input type="email" defaultValue="stevkovskaanja@gmail.com" />
                            </label>
                            <label>
                                Profile Picture URL:
                                <input type="text" defaultValue="pictures/271861794_2128130720686149_7185721109129941231_n.jpg" />
                            </label>
                            <div className="modal-buttons">
                                <button type="submit" className="save-btn">Save Changes</button>
                                <button type="button" className="cancel-btn" onClick={closeModal}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}


            
        </div>
    );
}

export default Profile;