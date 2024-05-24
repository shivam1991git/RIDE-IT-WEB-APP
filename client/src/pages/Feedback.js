import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import DefaultLayout from '../components/DefultLayout';
import Footer from '../components/footer';
import { useDispatch, useSelector } from 'react-redux';
import { userFeedback } from '../redux/actions/userActions';
import { driverFeedback } from '../redux/actions/driverActions';
import Spinner from '../components/Spinner';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function Feedback() {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.alertsReducer);

  const user = JSON.parse(localStorage.getItem('user'));
  const driver = JSON.parse(localStorage.getItem('driver'));
  const [carQualityRating, setCarQualityRating] = useState(0);
  const [driverBehaviorRating, setDriverBehaviorRating] = useState(0);
  const [userBehaviorRating, setUserBehaviorRating] = useState(0);
  const [appRating, setAppRating] = useState(0);
  const [additionalComments, setAdditionalComments] = useState('');

  const handleRatingChange = (value, category) => {
    switch (category) {
      case 'carQuality':
        setCarQualityRating(value);
        break;
      case 'driverBehavior':
        setDriverBehaviorRating(value);
        break;
        case 'userBehavior':
          setUserBehaviorRating(value);
          break;
      case 'app':
        setAppRating(value);
        break;
      default:
        break;
    }
  };

  const handleTextAreaChange = (event) => {
    setAdditionalComments(event.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const feedbackData = {
      carQuality: carQualityRating,
      driverBehavior: driverBehaviorRating,
      userBehavior: userBehaviorRating,
      appRating: appRating,
      additionalComments: additionalComments,
      userId: user ? user._id : (driver ? driver._id : null)
    };
    if (user) {
      dispatch(userFeedback(feedbackData));
    } 
    if (driver) {
      dispatch(driverFeedback(feedbackData));
    }
    navigate('/');
  };

  return (
    <div className="feedbackbody">
      {loading && <Spinner />}
      <DefaultLayout />
      <div className="container">
        <h1>Share Your Opinion</h1>
        <form id="feedback-form" onSubmit={handleSubmit}>
          <div className="question">
            <label htmlFor="car-quality">How would you rate the quality of the car?</label>
            <div className="rating">
              {[5, 4, 3, 2, 1].map((value) => (
                <label key={value} className={value <= carQualityRating ? 'star selected' : 'star'}>
                  <input
                    type="radio"
                    name="car-quality"
                    value={value}
                    onClick={() => handleRatingChange(value, 'carQuality')}
                  />
                  {value}
                </label>
              ))}
            </div>
          </div>
          {user ? (
            <div className="question">
              <label htmlFor="driver-behavior">How would you rate the behavior of the driver?</label>
              <div className="rating">
                {[5, 4, 3, 2, 1].map((value) => (
                  <label key={value} className={value <= driverBehaviorRating ? 'star selected' : 'star'}>
                    <input
                      type="radio"
                      name="driver-behavior"
                      value={value}
                      onClick={() => handleRatingChange(value, 'driverBehavior')}
                    />
                    {value}
                  </label>
                ))}
              </div>
            </div>
          ) : null}
           {driver ? (
            <div className="question">
              <label htmlFor="driver-behavior">How would you rate the behavior of the user?</label>
              <div className="rating">
                {[5, 4, 3, 2, 1].map((value) => (
                  <label key={value} className={value <= userBehaviorRating ? 'star selected' : 'star'}>
                    <input
                      type="radio"
                      name="user-behavior"
                      value={value}
                      onClick={() => handleRatingChange(value, 'userBehavior')}
                    />
                    {value}
                  </label>
                ))}
              </div>
            </div>
          ) : null}
          <div className="question">
            <label htmlFor="app-rating">Rate the performance of our app:</label>
            <div className="rating">
              {[5, 4, 3, 2, 1].map((value) => (
                <label key={value} className={value <= appRating ? 'star selected' : 'star'}>
                  <input
                    type="radio"
                    name="app-rating"
                    value={value}
                    onClick={() => handleRatingChange(value, 'app')}
                  />
                  {value}
                </label>
              ))}
            </div>
          </div>
          <div className="question">
            <label htmlFor="additional-comments">Any additional comments or suggestions?</label>
            <textarea
              id="additional-comments"
              rows="4"
              placeholder="Write Here"
              value={additionalComments}
              onChange={handleTextAreaChange}
            ></textarea>
          </div>
          <button type="submit">Submit Feedback</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Feedback;
