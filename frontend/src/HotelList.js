import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HotelList = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        // Ovoj kod pravi HTTP baranje do Spring Boot aplikacijata
        axios.get('http://localhost:8080/api/v1/hotels')
            .then(response => {
                setHotels(response.data); // Postavuvanje na podatoci vo state
            })
            .catch(error => {
                console.error("Error fetching hotels:", error);
            });
    }, []);

    return (
        <div>
            <h1>Available Hotels</h1>
            <ul>
                {hotels.map((hotel, index) => (
                    <li key={index}>
                        {hotel.name} - {hotel.location} - Rating: {hotel.rating}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HotelList;