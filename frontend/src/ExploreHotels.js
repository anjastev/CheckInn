import React, { useState } from 'react';
import './ExploreHotels.css';
import { FaStar, FaMapMarkerAlt, FaFilter, FaSearch } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';



function ExploreHotels() {

  const navigate = useNavigate(); 
  const handleLogout = () => {
          navigate('/'); 
        };

  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('recommended');
  const [filters, setFilters] = useState({
    priceRange: '',
    starRating: '',
    amenities: [],
  });

  const hotels = [
    {
      id: 1,
      name: 'Hotel Aleksandar Palace',
      location: 'Skopje, North Macedonia',
      price: 120,
      rating: 4.5,
      distance: 0.5,
      amenities: ['Free Wi-Fi', 'Pool', 'Spa'],
      imageUrl: 'pictures/ap.jpg',
      latitude: 41.9981, 
      longitude: 21.4254 
    },
    {
      id: 2,
      name: 'Hotel Drim',
      location: 'Struga, North Macedonia',
      price: 250,
      rating: 4.8,
      distance: 2.0,
      amenities: ['Breakfast Included', 'Beach Access', 'Lake View'],
      imageUrl: 'pictures/drim.jpg',
      latitude: 41.1777, 
      longitude: 20.6766 
    },
    {
      id: 3,
      name: 'Inex Gorica',
      location: 'Ohrid, North Macedonia',
      price: 180,
      rating: 4.2,
      distance: 1.2,
      amenities: ['Lake View', 'Free Parking', 'Pet Friendly'],
      imageUrl: 'pictures/gor.jpg',
      latitude: 41.1220, 
      longitude: 20.8016 
    },
    {
      id: 4,
      name: 'Hotel Arka',
      location: 'Skopje, North Macedonia',
      price: 220,
      rating: 4.7,
      distance: 0.8,
      amenities: ['Rooftop Bar', 'Gym', 'Free Wi-Fi'],
      imageUrl: 'pictures/arka.jpg',
      latitude: 41.9991, 
      longitude: 21.4343 
    },
    {
      id: 5,
      name: 'Hotel Tino',
      location: 'Ohrid, North Macedonia',
      price: 150,
      rating: 4.3,
      distance: 3.5,
      amenities: ['Pool', 'Restaurant', 'Spa'],
      imageUrl: 'pictures/tino.jpg',
      latitude: 41.1169, 
      longitude: 20.7990 
    }
  ];

  
  const filteredHotels = hotels
    .filter((hotel) => {
      return (
        hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hotel.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
    .filter((hotel) => {
      if (filters.priceRange) {
        const [minPrice, maxPrice] = filters.priceRange.split('-').map(Number);
        if (hotel.price < minPrice || hotel.price > maxPrice) return false;
      }
      if (filters.starRating) {
        if (Math.floor(hotel.rating) !== Number(filters.starRating)) return false;
      }
      if (filters.amenities.length > 0) {
        return filters.amenities.every((amenity) => hotel.amenities.includes(amenity));
      }
      return true;
    });

  const sortedHotels = filteredHotels.sort((a, b) => {
    switch (sortOption) {
      case 'priceLowHigh':
        return a.price - b.price;
      case 'priceHighLow':
        return b.price - a.price;
      case 'ratingHighLow':
        return b.rating - a.rating;
      case 'distance':
        return a.distance - b.distance;
      case 'nameAZ':
        return a.name.localeCompare(b.name);
      default:
        return a.id - b.id; 
    }
  });

  const handleFilterChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === 'amenities') {
      setFilters((prevFilters) => {
        if (checked) {
          return { ...prevFilters, amenities: [...prevFilters.amenities, value] };
        } else {
          return {
            ...prevFilters,
            amenities: prevFilters.amenities.filter((amenity) => amenity !== value),
          };
        }
      });
    } else {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: value,
      }));
    }
  };


  

  return (
    <>
    <div className="profile-iconse">
        <a href="/profile" className="profiles-icone">
            <img src="pictures/icons8-male-user-48.png" alt="Profile"/>
        </a>
        <a href="/settings" className="settings-icone">
            <img src="pictures/icons8-settings-48.png" alt="Settings"/>
        </a>
        <a href="/logout" className="logout-icone" onClick={handleLogout}>
            <img src="pictures/icons8-log-out-48.png" alt="Log Out"/>
        </a>        
    </div>

    <div className="explore-hotels">



    <div className="logo-container">
    <img src="logo.png" alt="Logo" className="logo" />
  </div>
      
  <h1 className="hero-section-h1">Discover Your Perfect Stay</h1>
  <p className="hero-section-p">Find and book the best hotels around the world at unbeatable prices</p>
    

  <div className="search-bar-e">
    <input
      type="text"
      placeholder="Search by hotel name or location"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <button>
      <FaSearch />
    </button>
  </div>
   


      <div className="main-content">
        
        <div className="filters-sidebar">
          <h2>
            <FaFilter /> Filters
          </h2>
          <div className="filter-group">
            <h3>Price Range</h3>
            <select name="priceRange" onChange={handleFilterChange}>
              <option value="">Any</option>
              <option value="50-100">$50 - $100</option>
              <option value="101-200">$101 - $200</option>
              <option value="201-300">$201 - $300</option>
              <option value="301-500">$301 - $500</option>
            </select>
          </div>

          <div className="filter-group">
            <h3>Star Rating</h3>
            <select name="starRating" onChange={handleFilterChange}>
              <option value="">Any</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
              <option value="2">2 Stars</option>
              <option value="1">1 Star</option>
            </select>
          </div>

          <div className="filter-group">
            <h3>Amenities</h3>
            <label>
              <input
                type="checkbox"
                name="amenities"
                value="Free Wi-Fi"
                onChange={handleFilterChange}
              />
              Free Wi-Fi
            </label>
            <label>
              <input
                type="checkbox"
                name="amenities"
                value="Pool"
                onChange={handleFilterChange}
              />
              Pool
            </label>
            <label>
              <input
                type="checkbox"
                name="amenities"
                value="Spa"
                onChange={handleFilterChange}
              />
              Spa
            </label>
            <label>
              <input
                type="checkbox"
                name="amenities"
                value="Breakfast Included"
                onChange={handleFilterChange}
              />
              Breakfast Included
            </label>
            <label>
              <input
                type="checkbox"
                name="amenities"
                value="Free Parking"
                onChange={handleFilterChange}
              />
              Free Parking
            </label>
          
          </div>

          <div className="filter-group">
  <h3>Room Type</h3>
  <label>
    <input
      type="checkbox"
      name="roomType"
      value="Single"
      onChange={handleFilterChange}
    />
    Single Room
  </label>
  <label>
    <input
      type="checkbox"
      name="roomType"
      value="Double"
      onChange={handleFilterChange}
    />
    Double Room
  </label>
  <label>
    <input
      type="checkbox"
      name="roomType"
      value="Suite"
      onChange={handleFilterChange}
    />
    Suite
  </label>
</div>

<div className="filter-group">
  <h3>Distance to City Center</h3>
  <select name="distance" onChange={handleFilterChange}>
    <option value="">Any</option>
    <option value="0-1">0 - 1 km</option>
    <option value="1-5">1 - 5 km</option>
    <option value="5-10">5 - 10 km</option>
    <option value="10-20">10 - 20 km</option>
  </select>
</div>

<div className="filter-group">
  <h3>Guest Rating</h3>
  <select name="guestRating" onChange={handleFilterChange}>
    <option value="">Any</option>
    <option value="9-10">9 - 10</option>
    <option value="8-9">8 - 9</option>
    <option value="7-8">7 - 8</option>
    <option value="6-7">6 - 7</option>
  </select>
   </div>
        </div>

        
        <div className="hotels-section">
          <div className="sorting-bar">
            <label htmlFor="sortOptions">Sort by:</label>
            <select
              id="sortOptions"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="recommended">Recommended</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
              <option value="ratingHighLow">Rating: High to Low</option>
              <option value="distance">Distance</option>
              <option value="nameAZ">Name: A to Z</option>
            </select>
          </div>

          <div className="hotel-grid">
            {sortedHotels.length > 0 ? (
              sortedHotels.map((hotel) => (
                <div key={hotel.id} className="hotel-card">
                  <img src={hotel.imageUrl} alt={hotel.name} />
                  <div className="hotel-info">
                    <h3>{hotel.name}</h3>
                    <p className="location">
                      <FaMapMarkerAlt /> {hotel.location}
                    </p>
                    <p className="price">${hotel.price} / night</p>
                    <p className="rating">
                      <FaStar /> {hotel.rating}
                    </p>
                    <div className="amenities">
                      {hotel.amenities.map((amenity, index) => (
                        <span key={index}>{amenity}</span>
                      ))}
                    </div>
                    <button className="details-button">View Details</button>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-results">No hotels match your search criteria.</p>
            )}
          </div>
        </div>
      </div>


      <div className="interactive-map">
        <h2 className='maps'>Explore Hotels on the Map</h2>
        <MapContainer center={[41.9981, 21.4254]} zoom={7} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
          {hotels.map((hotel) => (
            <Marker
              key={hotel.id}
              position={[hotel.latitude, hotel.longitude]}
            >
              <Popup>
                <strong>{hotel.name}</strong><br />
                {hotel.location}<br />
                ${hotel.price} / night<br />
                Rating: {hotel.rating} <FaStar />
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>


      <div className="pagination">
    <button className="prev-page">&laquo; Prev</button>
    <span className="page-number">1</span>
    <span className="page-number">2</span>
    <span className="page-number">3</span>
    <span className="page-number">...</span>
    <span className="page-number">10</span>
    <button className="next-page">Next &raquo;</button>
  </div>
  
    </div>
</>
  
  );


}

export default ExploreHotels;
