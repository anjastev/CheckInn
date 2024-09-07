import React from 'react';
import './Settings.css';
import { useState } from 'react';

const Settings = () => {
    const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
    const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
    const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
    const [is2FAActive, setIs2FAActive] = useState(false);
    const [isAccountActivityOpen, setIsAccountActivityOpen] = useState(false);


    const openPasswordModal = () => setIsPasswordModalOpen(true);
    const closePasswordModal = () => setIsPasswordModalOpen(false);

    const openPrivacyModal = () => setIsPrivacyModalOpen(true);
    const closePrivacyModal = () => setIsPrivacyModalOpen(false);

    const openNotificationModal = () => setIsNotificationModalOpen(true);
    const closeNotificationModal = () => setIsNotificationModalOpen(false);

    const toggle2FA = () => setIs2FAActive(!is2FAActive); 
    const openAccountActivity = () => setIsAccountActivityOpen(true); 
    
    
    return (
        <div className="settings-container">
            <h1>Settings</h1>
            <div className="settings-section">
                <h2>Account Settings</h2>
                <div className="setting-option">
                    <label>Change Password</label>
                    <button className="change-btn" onClick={openPasswordModal}>Change</button>
                </div>
                <div className="setting-option">
                    <label>Privacy Settings</label>
                    <button className="edit-btn" onClick={openPrivacyModal}>Edit</button>
                </div>
                <div className="setting-option">
                    <label>Notification Preferences</label>
                    <button className="edit-btn" onClick={openNotificationModal}>Edit</button>
                </div>
            </div>

            {/* Password Modal */}
            {isPasswordModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Change Password</h2>
                        <input type="password" placeholder="Enter new password" />
                        <input type="password" placeholder="Confirm new password" />
                        <button className='save-btn' onClick={closePasswordModal}>Save</button>
                        <button className='cancel-btn' onClick={closePasswordModal}>Cancel</button>
                    </div>
                </div>
            )}

            {/* Privacy Modal */}
            {isPrivacyModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Privacy Settings</h2>
                        <label>
                            <input type="checkbox" /> Make my profile private
                        </label>
                        <label>
                            <input type="checkbox" /> Enable two-factor authentication
                        </label>
                        <button className='save-btn' onClick={closePrivacyModal}>Save</button>
                        <button className='cancel-btn' onClick={closePrivacyModal}>Cancel</button>
                    </div>
                </div>
            )}

            {/* Notification Modal */}
            {isNotificationModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Notification Preferences</h2>
                        <label>
                            <input type="checkbox" /> Email notifications
                        </label>
                        <label>
                            <input type="checkbox" /> SMS notifications
                        </label>
                        <button className='save-btn' onClick={closeNotificationModal}>Save</button>
                        <button className='cancel-btn' onClick={closeNotificationModal}>Cancel</button>
                    </div>
                </div>
            )}

            <div className="settings-section">
                <h2>App Preferences</h2>
                <div className="setting-option">
                    <label>Language</label>
                    <select>
                        <option value="en">English</option>
                        <option value="mk">Macedonian</option>
                        <option value="es">Spanish</option>
                    </select>
                </div>
                <div className="setting-option">
                    <label>Theme</label>
                    <select>
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                </div>
            </div>

            <div className="settings-section">
                <h2>Security</h2>
                <div className="setting-option">
                    <label>Two-Factor Authentication</label>
                    <button className="enable-btn" onClick={toggle2FA}>
                        {is2FAActive ? 'Disable' : 'Enable'}
                    </button>
                </div>
                <div className="setting-option">
                    <label>Account Activity</label>
                    <button className="view-btn" onClick={openAccountActivity}>View</button>
                </div>
            </div>


{/* Two-Factor Authentication Modal */}
{is2FAActive && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Two-Factor Authentication</h2>
                        <p>Your two-factor authentication is currently enabled.</p>
                        <button className='disable-btn' onClick={toggle2FA}>Disable</button>
                    </div>
                </div>
            )}

            {/* Account Activity Modal */}
            {isAccountActivityOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Account Activity</h2>
                        <p>Here is a summary of your account activity.</p>
                        <button className='close-btn' onClick={() => setIsAccountActivityOpen(false)}>Close</button>
                    </div>
                </div>
            )}



        </div>
    );
};

export default Settings;
