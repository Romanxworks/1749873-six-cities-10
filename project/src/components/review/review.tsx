import {Review} from '../../types/review';
import {RATING_ADAPTER} from '../../const';

type ReviewOfferProps = {
    id: number,
    reviews:Review[]
}

function ReviewOffer ({id, reviews}:ReviewOfferProps):JSX.Element{
  const review = reviews.find((reviewById) => reviewById.id === id);
  return(
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review?.avatar} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {review?.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${review ? review.rating / RATING_ADAPTER : null}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review?.comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{review?.date}</time>
      </div>
    </li>
  );
}

export default ReviewOffer;
