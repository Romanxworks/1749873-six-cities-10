import {useState, ChangeEvent, FormEvent, useRef} from 'react';
import {CommentData} from '../../types/user';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {postReviewAction, fetchReviewsAction} from '../../store/api-actions';
import {MAX_REVIEW_LENGTH, MIN_REVIEW_LENGTH} from '../../const';
import {getIsReviewSubmit} from '../../store/offers-data/selectors';
type ReviewFormProps = {
  id: string
}

function ReviewsForm({id}:ReviewFormProps):JSX.Element{
  const [rating, setRating] = useState<number>(0);
  const commentRef = useRef<HTMLTextAreaElement | null>(null);
  const submitRef = useRef<HTMLButtonElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const isReviewsSubmit = useAppSelector(getIsReviewSubmit);

  const dispatch = useAppDispatch();

  const radioChangeHandle = ({target}: ChangeEvent<HTMLInputElement>) => {
    const value = Number(target.value);
    setRating(value);
  };
  const handleChangeDisabled = () => {
    if(commentRef.current !== null){
      if(commentRef.current.value.length >= MIN_REVIEW_LENGTH && commentRef.current.value.length < MAX_REVIEW_LENGTH){
        submitRef.current?.removeAttribute('disabled');
      }else{
        submitRef.current?.setAttribute('disabled', 'disabled');
      }
    }
  };

  const onSubmit = (commentData: CommentData) => {
    dispatch(postReviewAction(commentData));
    dispatch(fetchReviewsAction(id));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (rating !== null && commentRef.current !== null) {
      onSubmit({id, rating, comment: commentRef.current.value});
      formRef.current?.reset();
    }
  };
  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit} ref = {formRef}>
      <fieldset className="fieldset__reviews" disabled = {isReviewsSubmit}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" onChange = {radioChangeHandle}/>
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" onChange = {radioChangeHandle}/>
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" onChange = {radioChangeHandle} />
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" onChange = {radioChangeHandle} />
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" onChange = {radioChangeHandle} />
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </div>
        <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" ref = {commentRef}
          onChange = {handleChangeDisabled} maxLength = {MAX_REVIEW_LENGTH}
        >
        </textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
                      To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" ref = {submitRef} disabled>Submit
          </button>
        </div>
      </fieldset>
    </form>
  );
}

export default ReviewsForm;
