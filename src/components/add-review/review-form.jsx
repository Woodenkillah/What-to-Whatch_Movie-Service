import React from 'react';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';

const ReviewForm = (props) => {

  const history = useHistory();

  const [reviewData, setReviewData] = React.useState({
    reviewText: ``,
    rating: ``,
    date: ``,
    user: ``
  });

  const defaultRating = React.useRef(null);

  const handleRatingMark = (evt) => {
    setReviewData({
      ...reviewData,
      rating: parseFloat(evt.target.value)
    });
  };

  const handleReviewText = (evt) => {
    setReviewData({
      ...reviewData,
      reviewText: evt.target.value
    });
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    if (!reviewData.rating) {
      reviewData.rating = parseFloat(defaultRating.current.defaultValue);
    }

    // проработать необходимый формат даты
    setReviewData({
      ...reviewData,
      date: new Date(Date.now())
    });

    props.getFormData(reviewData);

    history.push({pathname: `/films/${props.targetFilmId}`});
  };

  return (
    <React.Fragment>
      <div className="add-review">
        <form action="#" className="add-review__form" onSubmit={handleFormSubmit} >
          <div className="rating">
            <div className="rating__stars" onChange={handleRatingMark}>
              <input className="rating__input" id="star-1" type="radio" name="rating" value="1" />
              <label className="rating__label" htmlFor="star-1">Rating 1</label>

              <input className="rating__input" id="star-2" type="radio" name="rating" value="2" />
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input className="rating__input" id="star-3" type="radio" name="rating" value="3" />
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input className="rating__input" id="star-4" type="radio" name="rating" value="4" />
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input className="rating__input" id="star-5" type="radio" name="rating" value="5" />
              <label className="rating__label" htmlFor="star-5">Rating 5</label>

              <input className="rating__input" id="star-6" type="radio" name="rating" value="6" />
              <label className="rating__label" htmlFor="star-6">Rating 6</label>

              <input className="rating__input" id="star-7" type="radio" name="rating" value="7" />
              <label className="rating__label" htmlFor="star-7">Rating 7</label>

              <input className="rating__input" id="star-8" type="radio" name="rating" value="8" defaultChecked ref={defaultRating}/>
              <label className="rating__label" htmlFor="star-8">Rating 8</label>

              <input className="rating__input" id="star-9" type="radio" name="rating" value="9" />
              <label className="rating__label" htmlFor="star-9">Rating 9</label>

              <input className="rating__input" id="star-10" type="radio" name="rating" value="10" />
              <label className="rating__label" htmlFor="star-10">Rating 10</label>
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text" id="review-text"
              placeholder="Review text"
              minLength={50}
              maxLength={400}
              onChange={handleReviewText}
            >
            </textarea>
            <div className="add-review__submit">
              <button
                className="add-review__btn"
                type="submit"
                disabled={!reviewData.reviewText}
              >Post</button>
            </div>

          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

ReviewForm.propTypes = {
  getFormData: PropTypes.func.isRequired,
  targetFilmId: PropTypes.number.isRequired
};

export default ReviewForm;
