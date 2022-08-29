import {sortByDate, getReviewDate} from '../../utils';
import {RATING_ADAPTER, MAX_REVIEWS_COUNT} from '../../const';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {useEffect} from 'react';
import {fetchReviewsAction} from '../../store/api-actions';
import {getReviews} from '../../store/offers-data/selectors';
type ReviewOfferProps = {id:string}

function ReviewOffer ({id}:ReviewOfferProps):JSX.Element{
  const dispatch = useAppDispatch();
  const reviews = useAppSelector(getReviews);
  useEffect(()=>{
    dispatch(fetchReviewsAction(id));
  },[id,dispatch]);
  const sortReviews = reviews.slice().sort(sortByDate).slice(0, MAX_REVIEWS_COUNT);

  return(
    <ul className="reviews__list">
      {sortReviews.map((review) => (
        <li className="reviews__item" key={review.id}>
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img className="reviews__avatar user__avatar" src = {review.user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
            </div>
            <span className="reviews__user-name">
              {review.user.name}
            </span>
          </div>
          <div className="reviews__info">
            <div className="reviews__rating rating">
              <div className="reviews__stars rating__stars">
                <span style={{width: `${review.rating / RATING_ADAPTER}%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <p className="reviews__text">
              {review.comment}
            </p>
            <time className="reviews__time" dateTime="2019-04-24">{getReviewDate(review.date)}</time>
          </div>
        </li>))}
    </ul>
  );
}

export default ReviewOffer;
