import React, { useState } from 'react';
import DefultLayout from '../components/DefultLayout';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';


function Services() {
    const [seen, setSeen] = useState(false);
    const [pickupLocation, setPickupLocation] = useState('');
    const [dropoffLocation, setDropoffLocation] = useState('');
    const user = JSON.parse(localStorage.getItem('user'));

    function togglePop() {
        setSeen(!seen);
    };

    function handleLogin(e) {
        e.preventDefault();
        togglePop();
        window.location.href = '/cars';
    }
    return (
        <div className="servicebody">
            <DefultLayout />
            <h3>Our Services</h3>
            {seen &&
                            <div className="popup">
                                <div className="popup-inner">

                                    <form onSubmit={handleLogin}>
                                        <label>
                                            Pickup Location:
                                            <input type="text" required value={pickupLocation} onChange={e => setPickupLocation(e.target.value)} />
                                        </label>
                                        <label>
                                            Dropoff Location:
                                            <input type="text" required value={dropoffLocation} onChange={e => setDropoffLocation(e.target.value)} />
                                        </label>
                                        <button type="submit">Ok</button>
                                    </form>
                                    <button onClick={togglePop}>Close</button>
                                </div>
                            </div>
                        }
            <div className="main-tariff">
                
                <section className="first">
                    <div className="secImg"style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        <img src="assets/images/airport.webp" alt="tour1" />
                    </div>
                    <div>
                        <span>Airport Transfers</span>
                        <span>Seamless transfers to and from airports with our reliable service.</span>
                        {user ?(
                        <button className="select-car-btn1" onClick={togglePop}>Book Now</button>
                    ) : null}
                    </div>
                </section>

                <div className="separation"></div>

                <section className="first second">
                    <div className="secImg"style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        <img src="assets/images/chicago-city-lights-at-night.jpg" alt="" />
                    </div>
                    <div>
                        <span>City Tours</span>
                        <span>Discover the beauty of your city with our city tour packages.</span>
                        {user ?(
                        <button className="select-car-btn1" onClick={togglePop}>Book Now</button>
                    ) : null}
                    </div>
                </section>

                <div className="separation"></div>

                <section className="first">
                    <div className="secImg"style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        <img src="assets/images/rr.png" alt="tour1" />
                    </div>
                    <div>
                        <span>Car Rentals</span>
                        <span>Seamless transfers to and from airports with our reliable service.</span>
                        {user ?(
                        <Link to="/cars" className="select-car-btn">Select Car</Link>
                    ) : null}
                    </div>
                </section>

                <div className="separation"></div>

                <section className="first second">
                    <div className="secImg"style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        <img src="assets/images/india-varanasi-best-places-to-visit-dasaswamedh-ghat.jpg" alt="" />
                    </div>
                    <div>
                        <span>Holidy Trip</span>
                        <span>Discover the beauty of your city with our city tour packages.</span>
                        <Link to="/touristpoint" className="select-car-btn">Select Place</Link>
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    )
}

export default Services