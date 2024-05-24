import React from 'react';
import { Card, Col, Row } from 'antd';
import DefaultLayout from '../components/DefultLayout';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import Spinner from '../components/Spinner';

const App = () => {
  const { loading } = useSelector(state => state.alertsReducer);

  return (
    <div className='home'>
      {loading && <Spinner />}
      <DefaultLayout>
        <div style={{ padding: '20px', marginTop: '5rem' }}>
          <Row gutter={12} justify="center">
            <Col span={6}>
              <Card className='card1'
                hoverable
                style={{ marginBottom: '20px', backgroundColor: 'blue', height: '300px' }}
                cover={<img alt="Card Image 1" src="assets/images/testimonial_back.png" height='200px' />}
              >
                <Link to='/adminuser' style={{ color: 'gold', display: 'block', textAlign: 'center', height: '100%' }}>
                  <h3>Users</h3>
                </Link>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                hoverable
                style={{ marginBottom: '20px', backgroundColor: 'blue', height: '300px' }}
                cover={<img alt="Card Image 1" src="assets/images/driver.jpeg" height='200px' />}
              >
                <Link to='/admindriver' style={{ color: 'gold', display: 'block', textAlign: 'center', height: '100%' }}>
                  <h3>Drivers</h3>
                </Link>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                hoverable
                style={{ marginBottom: '20px', backgroundColor: 'blue', height: '300px' }}
                cover={<img alt="Card Image 1" src="assets/images/rr.png" height='200px' />}
              >
                <Link to='/admin' style={{ color: 'gold', display: 'block', textAlign: 'center', height: '100%' }}>
                  <h3>Cars</h3>
                </Link>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                hoverable
                style={{ marginBottom: '20px', backgroundColor: 'blue', height: '300px' }}
                cover={<img alt="Card Image 1" src="assets/images/feedback.jpg" height='200px' />}
              >
                <Link to='/adminfeedback' style={{ color: 'gold', display: 'block', textAlign: 'center', height: '100%' }}>
                  <h3>Feedbacks</h3>
                </Link>
              </Card>
            </Col>
            <Col span={6}>
              <Card
                hoverable
                style={{ marginBottom: '20px', backgroundColor: 'blue', height: '300px' }}
                cover={<img alt="Card Image 1" src="assets/images/booking.jpg" height='200px' />}
              >
                <Link to='/adminbookings' style={{ color: 'gold', display: 'block', textAlign: 'center', height: '100%' }}>
                  <h3>Bookings</h3>
                </Link>
              </Card>
            </Col>
          </Row>
        </div>
      </DefaultLayout>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
