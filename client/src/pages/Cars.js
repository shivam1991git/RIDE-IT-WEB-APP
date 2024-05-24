import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DefultLayout from '../components/DefultLayout';
import { getAllCars } from '../redux/actions/carsActions';
import { Button, Flex, Row, Col, DatePicker } from 'antd';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import moment from 'moment';
import Footer from '../components/footer';

const { RangePicker } = DatePicker;

function Choosecar() {
    const { cars } = useSelector(state => state.carsReducer);
    const { loading } = useSelector(state => state.alertsReducer);
    const [totalCars, setTotalcars] = useState([]);
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        dispatch(getAllCars());
    }, [dispatch]);

    return (
        <div className='home'>
            <DefultLayout />

            {loading && <Spinner />}

            <h1 className='text-center' style={{ color: 'gold' }}>Select Best Car for You 😊!</h1>

            <Row justify='center' gutter={16} className='mt-5 mb-3'>
                {cars.map(car => (
                    <Col lg={5} sm={24} xs={24} key={car._id}>
                        <div className='car p-2 bs1'>
                            <img src={car.image} className='carimg' alt={car.name} />
                            <div className='car-content d-flex align-items-center justify-content-between'>
                                <div className='text-left pl-2'>
                                    <p>{car.name}</p>
                                    <p> Rent Per Hour /- {car.rentPerHour}</p>
                                </div>
                                {user ? (
                                    <div>
                                        <button className='btn1 mr-2'><a href={`/booking/${car._id}`}>Book Now</a></button>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
            <Footer />
        </div>
    );
}

export default Choosecar;
